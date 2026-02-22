import { BeforeAfterSection } from "@/components/sections/before-after";
import { CTAForm } from "@/components/sections/cta-form";
import { Hero } from "@/components/sections/hero";
import { NotableProjects } from "@/components/sections/notable-projects";
import { Reviews } from "@/components/sections/reviews";
import { ServiceAreaSection } from "@/components/sections/service-area";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyUs } from "@/components/sections/why-us";

export default function Home() {
  return (
    <>
      <Hero />
      <NotableProjects />
      <ServicesGrid />
      <BeforeAfterSection />
      <WhyUs />
      <Reviews />
      <ServiceAreaSection />
      <CTAForm />
    </>
  );
}
