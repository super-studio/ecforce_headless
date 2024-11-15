/* eslint-disable @typescript-eslint/no-explicit-any */
import { callEcforceApi } from "../../shared";
import type { Product, Thumbnail } from "./types";

export async function listProducts(fetchOptions?: RequestInit) {
  const res = await callEcforceApi<{ data: Product[]; included: Thumbnail[] }>(
    {
      path: "/admin/products?q[product_category_names_cont]=Headless&include=thumbnail",
      method: "GET",
    },
    fetchOptions
  );
  return res.data.map((product) => ({
    ...product,
    attributes: {
      ...product.attributes,
      thumbnail: res.included.find(
        (item) =>
          item.type === "thumbnail" &&
          item.id === product.relationships.thumbnail.data?.id
      ),
    },
  }));
}

export async function getProduct(id: string, fetchOptions?: RequestInit) {
  const res = await callEcforceApi<{ data: Product; included: Thumbnail[] }>(
    {
      path: `/admin/products/${id}?include=thumbnail`,
      method: "GET",
    },
    fetchOptions
  );
  return {
    ...res.data,
    attributes: {
      ...res.data.attributes,
      thumbnail: res.included.find(
        (item) =>
          item.type === "thumbnail" &&
          item.id === res.data.relationships.thumbnail.data?.id
      ),
    },
  };
}
