import Link from "next/link";
import { experience } from "@/lib/experience";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./Icons";

export default function ExperienceSection() {
  return (
    <section className="px-3 pb-20 md:px-6 md:pb-28">
      <div className="mx-auto max-w-site rounded-[2rem] border border-line bg-[#f8f4ef] px-6 py-14 shadow-[0_25px_60px_-48px_rgba(17,17,17,0.35)] md:px-12 md:py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
                /Experience
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-ink md:text-6xl">
                Work History
              </h2>
            </div>
            <p className="text-sm text-muted">Frontend · Full-Stack · Data</p>
          </div>
        </Reveal>

        <div className="mt-12 divide-y divide-line">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.06}>
              <div className="grid gap-2 py-6 md:grid-cols-[1fr_auto] md:items-start md:py-7">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-ink md:text-xl">
                    {e.company}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand">
                    {e.role}
                  </p>
                </div>
                <p className="text-sm text-muted md:text-right">{e.period}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <Link
            href="/experience"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
          >
            Full Experience <ArrowUpRight />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
