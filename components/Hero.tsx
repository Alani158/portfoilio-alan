"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "./Icons";
import PortraitPlaceholder from "./PortraitPlaceholder";
import SocialLinks from "./SocialLinks";
import { profile } from "@/lib/data";

const phrases = [
  "I build thoughtful digital experiences.",
  "I design and ship modern web products.",
  "I turn ideas into clear, usable systems.",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentPhrase.slice(0, text.length + 1);
          setText(nextText);

          if (nextText === currentPhrase) {
            setTimeout(() => setIsDeleting(true), 1200);
          }
        } else {
          const nextText = currentPhrase.slice(0, text.length - 1);
          setText(nextText);

          if (nextText === "") {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 45 : 90,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

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

        <h1 className="mt-8 text-[15vw] font-black leading-[0.82] tracking-[-0.08em] text-ink md:text-[8rem]">
          <span className="block text-ink">ALANI</span>
          <span className="block text-brand">MUJEEB</span>
          <span className="block text-ink">BABATUNDE</span>
        </h1>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-muted">
              <span>{profile.role}</span>
            </div>

            <div className="mt-4 flex min-h-[3.5rem] items-center">
              <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">
                <span className="inline-block min-w-[0.8ch] text-brand">
                  {text}
                </span>
                <span className="ml-1 inline-block h-6 w-[2px] translate-y-1 bg-brand align-middle md:h-7" />
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

          <div className="md:justify-self-end">
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

        <div className="mx-auto mt-16 max-w-[28rem]">
          <PortraitPlaceholder />
        </div>

        <div className="mt-10 flex items-center justify-center md:hidden">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
