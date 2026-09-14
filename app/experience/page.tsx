import type { Metadata } from "next";
import Link from "next/link";
import { experience } from "@/lib/experience";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <section className="min-h-screen bg-paper text-ink">
      <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            /Experience
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-[-0.06em] md:text-6xl">
            Work History
          </h1>
          <p className="mt-4 max-w-lg leading-relaxed text-muted">
            A path that spans frontend development, full-stack work, and data
            analysis — each role sharpening a different part of how I build.
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-line">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.07}>
              <div className="grid gap-4 py-8 md:grid-cols-[1fr_auto] md:gap-10">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
                    {e.company}
                  </h2>
                  <p className="mt-1.5 text-sm font-medium text-brand">
                    {e.role}
                  </p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                    {e.description}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-muted md:text-right">
                  {e.period}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
          >
            See the Work <ArrowUpRight />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
