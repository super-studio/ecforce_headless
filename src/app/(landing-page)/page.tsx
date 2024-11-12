import { Hero } from "./_components/hero";
import { NewArrival } from "./_components/new-arrival";
import { BrandConcept } from "./_components/brand-concept";
import { News } from "./_components/news";
import { SignUp } from "./_components/sign-up";

export default async function Page() {
  "use cache";

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
