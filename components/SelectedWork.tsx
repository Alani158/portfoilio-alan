import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./Icons";

export default function SelectedWork() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium text-muted">/SELECTED WORK</p>
              <h2 className="mt-2 text-4xl font-extrabold tracking-tight md:text-6xl">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden items-center gap-2 text-sm font-medium hover:underline md:inline-flex"
            >
              View All Work <ArrowUpRight />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} className={i === 2 ? "md:col-span-2" : ""}>
              <div className={i === 2 ? "mx-auto w-full max-w-xl" : ""}>
                <ProjectCard project={p} />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium">
            View All Work <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
