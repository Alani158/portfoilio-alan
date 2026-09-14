import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import ScreenshotPlaceholder from "./ScreenshotPlaceholder";
import { ArrowUpRight } from "./Icons";

export default function ProjectCard({ project }: { project: Project }) {
  const heroImage = project.screenshots[0]?.src;

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-white transition-shadow duration-300 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)]">
        <div className="absolute left-4 top-4 z-10 rounded-full border border-line bg-paper px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink">
          {project.type}
        </div>
        <div className="absolute right-4 top-4 z-10 flex h-10 w-10 rotate-45 items-center justify-center rounded-full bg-ink text-paper opacity-0 transition-all duration-300 group-hover:rotate-0 group-hover:opacity-100">
          <ArrowUpRight />
        </div>

        {heroImage ? (
          <div className="relative aspect-[16/10] overflow-hidden rounded-none border-0 bg-[#f3f3f3]">
            <Image
              src={heroImage}
              alt={`${project.title} preview`}
              fill
              priority
              quality={65}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        ) : (
          <ScreenshotPlaceholder
            label={`${project.title} — hero`}
            ratio="aspect-[16/10]"
            className="rounded-none border-0"
          />
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:underline">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted">
          {project.category} &nbsp;·&nbsp; {project.tags.slice(0, 2).join(", ")}
        </p>
      </div>
    </Link>
  );
}
