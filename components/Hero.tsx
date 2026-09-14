"use client";

import Link from "next/link";
import { ArrowUpRight } from "./Icons";
import PortraitPlaceholder from "./PortraitPlaceholder";
import SocialLinks from "./SocialLinks";
import { profile } from "@/lib/data";

const heroPhrase = "I build thoughtful digital experiences.";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 md:pb-24 md:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 select-none whitespace-nowrap text-[18vw] font-black leading-none tracking-[-0.08em] text-brand/10"
      >
        BUILD
      </div>

      <div className="relative mx-auto max-w-site px-5 md:px-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-line bg-paper/80 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-muted backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-brand" />
          Available for select projects
        </div>

        <h1 className="mt-8 text-[15vw] font-black leading-[0.82] tracking-[-0.08em] text-ink opacity-0 animate-fade-up md:text-[8rem]">
          <span className="block text-ink">ALANI</span>
          <span className="block text-brand">MUJEEB</span>
          <span className="block text-ink">BABATUNDE</span>
        </h1>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-muted">
              <span>{profile.role}</span>
            </div>

            <div className="mt-4 flex min-h-[3.5rem] items-center">
              <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">
                <span className="inline-block text-brand">{heroPhrase}</span>
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-paper transition-transform hover:translate-y-[-1px]"
              >
                Let&apos;s collaborate <ArrowUpRight />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
              >
                View Work
              </Link>
            </div>
          </div>

          <div
            className="opacity-0 animate-fade-up md:justify-self-end"
            style={{ animationDelay: "250ms" }}
          >
            <div className="rounded-2xl border border-line bg-panel p-4 shadow-[0_18px_45px_-30px_rgba(17,17,17,0.3)]">
              <p className="text-[10px] uppercase tracking-[0.28em] text-muted">
                Focus
              </p>
              <p className="mt-3 max-w-[18rem] text-base leading-relaxed text-ink">
                Product thinking, polished interfaces, and practical systems
                that help ideas become experiences people trust.
              </p>
            </div>
          </div>
        </div>

        <div
          className="mx-auto mt-16 max-w-[28rem] opacity-0 animate-fade-up"
          style={{ animationDelay: "350ms" }}
        >
          <PortraitPlaceholder />
        </div>

        <div className="mt-10 flex items-center justify-center md:hidden">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
