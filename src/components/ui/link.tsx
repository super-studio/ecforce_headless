"use client";

import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type PrefetchImage = {
  srcset: string;
  sizes: string;
  src: string;
  alt: string;
  loading: string;
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function prefetchImages(href: string) {
  if (!href.startsWith("/") || href.startsWith("/order") || href === "/") {
    return [];
  }
  const url = new URL(href, window.location.href);
  const imageResponse = await fetch(`/api/prefetch-images${url.pathname}`, {
    priority: "low",
  });
  // 開発環境でのみ例外をスロー
  if (!imageResponse.ok && process.env.NODE_ENV === "development") {
    throw new Error("Failed to prefetch images");
  }
  const { images } = await imageResponse.json();
  return images as PrefetchImage[];
}

const seen = new Set<string>();

/**
 * ホバー時に画像をプリフェッチするNext.jsのLinkコンポーネントのラッパー
 * @see https://github.com/ethanniser/NextFaster
 */
export const Link: typeof NextLink = (({ children, ...props }) => {
  const [images, setImages] = useState<PrefetchImage[]>([]);
  const [preloading, setPreloading] = useState<(() => void)[]>([]);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const router = useRouter();
  let prefetchTimeout: NodeJS.Timeout | null = null; // タイムアウトIDを追跡

  useEffect(() => {
    if (props.prefetch === false) {
      return;
    }

    const linkElement = linkRef.current;
    if (!linkElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // 1秒後にプリフェッチをトリガーするタイムアウトを設定
          // eslint-disable-next-line react-hooks/exhaustive-deps
          prefetchTimeout = setTimeout(async () => {
            router.prefetch(String(props.href));
            await sleep(0); // ドキュメントのプリフェッチを先に行いたい
            void prefetchImages(String(props.href)).then((images) => {
              setImages(images);
            }, console.error);
            // 画像がプリフェッチされたら監視を停止
            observer.unobserve(entry.target);
          }, 300); // 300msの遅延
        } else if (prefetchTimeout) {
          // 要素が1秒以内にビューポートから外れた場合、プリフェッチをキャンセル
          clearTimeout(prefetchTimeout);
          prefetchTimeout = null;
        }
      },
      { rootMargin: "0px", threshold: 0.1 } // 少なくとも10%が表示されたときにトリガー
    );

    observer.observe(linkElement);

    return () => {
      observer.disconnect(); // コンポーネントがアンマウントされたときにオブザーバーをクリーンアップ
      if (prefetchTimeout) {
        clearTimeout(prefetchTimeout); // コンポーネントがアンマウントされたときに保留中のタイムアウトをクリア
      }
    };
  }, [props.href, props.prefetch]);

  return (
    <NextLink
      ref={linkRef}
      prefetch={false}
      onMouseEnter={() => {
        router.prefetch(String(props.href));
        if (preloading.length) return;
        const p: (() => void)[] = [];
        for (const image of images) {
          const remove = prefetchImage(image);
          if (remove) p.push(remove);
        }
        setPreloading(p);
      }}
      onMouseLeave={() => {
        for (const remove of preloading) {
          remove();
        }
        setPreloading([]);
      }}
      onMouseDown={(e) => {
        const url = new URL(String(props.href), window.location.href);
        if (
          url.origin === window.location.origin &&
          e.button === 0 &&
          !e.altKey &&
          !e.ctrlKey &&
          !e.metaKey &&
          !e.shiftKey
        ) {
          e.preventDefault();
          router.push(String(props.href));
        }
      }}
      {...props}
    >
      {children}
    </NextLink>
  );
}) as typeof NextLink;

function prefetchImage(image: PrefetchImage) {
  if (image.loading === "lazy" || seen.has(image.srcset)) {
    return;
  }
  const img = new Image();
  img.decoding = "async";
  img.fetchPriority = "low";
  img.sizes = image.sizes;
  seen.add(image.srcset);
  img.srcset = image.srcset;
  img.src = image.src;
  img.alt = image.alt;
  let done = false;
  img.onload = img.onerror = () => {
    done = true;
  };
  return () => {
    if (done) return;
    img.src = img.srcset = "";
    seen.delete(image.srcset);
  };
}
