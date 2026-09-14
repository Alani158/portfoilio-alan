import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import ServiceAccordion from "@/components/ServiceAccordion";
import ExperienceSection from "@/components/ExperienceSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <ServiceAccordion />
      <ExperienceSection />
      <CTASection />
    </>
  );
}
