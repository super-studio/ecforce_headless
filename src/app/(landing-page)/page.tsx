import { Hero } from "./_components/hero";
import { NewArrival } from "./_components/new-arrival";
import { BrandConcept } from "./_components/brand-concept";
import { News } from "./_components/news";
import { SignUp } from "./_components/sign-up";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
import { cacheLife } from "next/dist/server/use-cache/cache-life";

export default async function Page() {
  "use cache";
  cacheTag("products", "landing-page");
  cacheLife("max");

  return (
    <>
      <Hero />
      <NewArrival />
      <BrandConcept />
      <News />
      <SignUp />
    </>
  );
}
