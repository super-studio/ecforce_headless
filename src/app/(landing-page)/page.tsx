import { Header } from "@/components/app-frame/header";
import { Hero } from "./_components/hero";
import { Footer } from "./_components/footer";
import { NewArrival } from "./_components/new-arrival";
import { BrandConcept } from "./_components/brand-concept";
import { News } from "./_components/news";
import { SignUp } from "./_components/sign-up";

export default function Page() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <Header />
      <Hero />
      <NewArrival />
      <BrandConcept />
      <News />
      <SignUp />
      <Footer />
    </div>
  );
}
