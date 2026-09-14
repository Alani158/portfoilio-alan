import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProjectsGrid from "@/components/ProjectsGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[16vw] font-extrabold leading-none text-outline-faint"
        >
          PROJECTS
        </div>
        <div className="relative mx-auto max-w-site px-5 md:px-8">
          <SectionHeading eyebrow="/WORK" title="Selected Projects" />
          <p className="mt-4 max-w-lg leading-relaxed text-muted">
            E-commerce platforms, full-stack web applications, and landing
            pages — each built with a focus on clean UI, responsiveness, and
            real functionality.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 pb-20 md:px-8 md:pb-28">
        <ProjectsGrid />
      </section>

      <CTASection />
    </>
  );
}
