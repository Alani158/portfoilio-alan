import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { profile } from "@/lib/data";
import Reveal from "@/components/Reveal";
import ScreenshotPlaceholder from "@/components/ScreenshotPlaceholder";
import CTASection from "@/components/CTASection";
import { ArrowLeft, ArrowUpRight, GitHubIcon } from "@/components/Icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  return { title: project ? project.title : "Project" };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <article className="mx-auto max-w-site px-5 py-10 md:px-8 md:py-14">
        {/* top bar */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium transition-colors hover:border-ink"
          >
            <ArrowLeft /> Back
          </Link>
          <span className="hidden items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-xs font-medium text-muted sm:inline-flex">
            <span
              className={`h-2 w-2 rounded-full ${
                profile.available ? "bg-emerald-500" : "bg-neutral-400"
              }`}
            />
            Available for New Project
          </span>
        </div>

        {/* header */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_300px]">
          <div>
            <Reveal>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
                {project.short}{" "}
                <span className="align-middle text-2xl font-medium text-muted md:text-3xl">
                  /Real Project
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:scale-[1.04]"
                >
                  Live Preview <ArrowUpRight />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
                >
                  <GitHubIcon className="h-4 w-4" /> GitHub Repo
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <dl className="space-y-7 rounded-2xl border border-line bg-white p-7">
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                  Service
                </dt>
                <dd className="mt-1.5 font-medium">
                  {project.type} Development
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                  Timeline
                </dt>
                <dd className="mt-1.5 font-medium">{project.timeline}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                  Year
                </dt>
                <dd className="mt-1.5 font-medium">{project.year}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                  Tools
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-ink ring-1 ring-line"
                    >
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* overview & problem */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Overview
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {project.overview}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              The Problem / Goal
            </h2>
            <p className="mt-4 leading-relaxed text-muted">{project.problem}</p>
          </Reveal>
        </div>

        {/* role */}
        <Reveal className="mt-14">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8 text-ink md:p-10">
            <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              My Role
            </h2>
            <p className="mt-4 leading-relaxed text-ink/80">{project.role}</p>
          </div>
        </Reveal>

        {/* features */}
        <div className="mt-20">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Key Features
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((f, i) => (
              <Reveal key={f} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <span className="text-xs font-bold text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm font-medium leading-relaxed">
                    {f}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* screenshots */}
        <div className="mt-20">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Screenshots
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {project.screenshots.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.05}
                className={i === 0 ? "md:col-span-2" : ""}
              >
                {s.src ? (
                  <div
                    className={`relative overflow-hidden rounded-xl border border-line bg-[#f4f4f4] ${i === 0 ? "aspect-[16/9]" : "aspect-[16/10]"}`}
                  >
                    <Image
                      src={s.src}
                      alt={s.label}
                      fill
                      className="object-contain p-2"
                      sizes={
                        i === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"
                      }
                    />
                  </div>
                ) : (
                  <ScreenshotPlaceholder
                    label={s.label}
                    ratio={i === 0 ? "aspect-[16/9]" : "aspect-[16/10]"}
                  />
                )}
              </Reveal>
            ))}
          </div>
        </div>

        {/* process */}
        <div className="mt-20">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Development Process
            </h2>
          </Reveal>
          <ol className="mt-8 divide-y divide-line rounded-2xl border border-line bg-white">
            {project.process.map((step, i) => (
              <Reveal key={step} delay={i * 0.05}>
                <li className="flex gap-6 p-6 md:p-7">
                  <span className="text-sm font-bold text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-muted md:text-base">
                    {step}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* bottom links */}
        <Reveal className="mt-16">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-line bg-white p-8">
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                Like this project?
              </h2>
              <p className="mt-1 text-sm text-muted">
                Check out the live site or browse more of my work.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:scale-[1.04]"
              >
                Live Preview <ArrowUpRight />
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
              >
                More Projects
              </Link>
            </div>
          </div>
        </Reveal>
      </article>

      <CTASection />
    </>
  );
}
