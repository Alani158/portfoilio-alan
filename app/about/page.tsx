import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PortraitPlaceholder from "@/components/PortraitPlaceholder";
import CTASection from "@/components/CTASection";
import { ArrowUpRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
};

const skills = [
  {
    title: "Frontend Development",
    items: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "Appwrite", "Prisma", "MySQL / SQL", "REST APIs"],
  },
  {
    title: "Design & Workflow",
    items: ["UI Implementation", "Figma to Code", "Git & GitHub", "Vercel / Netlify"],
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[18vw] font-extrabold leading-none text-outline-faint"
        >
          ABOUT
        </div>

        <div className="relative mx-auto max-w-site px-5 md:px-8">
          <SectionHeading eyebrow="/ABOUT" title="Alani Mujeeb Babatunde" />

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_360px]">
            <div className="space-y-6 leading-relaxed text-muted">
              <Reveal>
                <p className="text-lg text-ink">
                  I&apos;m a full-stack developer focused on building modern,
                  responsive web applications — from clean, conversion-focused
                  frontends to reliable backends, databases, and deployments.
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <p>
                  I work across the stack with React, Next.js, JavaScript,
                  Tailwind CSS, Node.js, Appwrite, Prisma, and SQL. My recent
                  work includes a full-stack e-commerce platform for a crochet
                  business, a newsletter application with user registration and
                  database integration, and landing pages designed around clean
                  UI and strong user experience.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Alongside development, I&apos;ve worked as a Data Analyst at
                  the International Institute of Tropical Agriculture (IITA) —
                  an experience that shaped how I approach problems: process the
                  data, understand the goal, then build the solution.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:scale-[1.04]"
                >
                  See My Work <ArrowUpRight />
                </Link>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <PortraitPlaceholder />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 pb-20 md:px-8 md:pb-28">
        <Reveal>
          <p className="text-sm font-medium text-muted">/SKILLS & TOOLS</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">
            What I Work With
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-white p-7">
                <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
