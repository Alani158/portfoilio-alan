import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";
import { ArrowUpRight, GitHubIcon, LinkedInIcon } from "@/components/Icons";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
};

const socialCards = [
  {
    label: "GitHub",
    href: profile.github,
    desc: "Code, repositories and open-source work.",
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    desc: "Professional profile and work history.",
    Icon: LinkedInIcon,
  },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[16vw] font-extrabold leading-none text-outline-faint"
      >
        CONTACT
      </div>

      <div className="relative mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-medium text-muted">
            <span
              className={`h-2 w-2 rounded-full ${
                profile.available ? "bg-emerald-500" : "bg-neutral-400"
              }`}
            />
            Available for New Project
          </span>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-8xl">
            LET&apos;S WORK
            <br />
            <span className="text-outline">TOGETHER</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Have a project in mind, a role to fill, or just want to talk shop?
            My inbox is always open.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-transform hover:scale-[1.04]"
            >
              {profile.email} <ArrowUpRight />
            </a>
            <SocialLinks />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {socialCards.map(({ label, href, desc, Icon }, i) => (
            <Reveal key={label} delay={0.1 + i * 0.08}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-start justify-between rounded-2xl border border-line bg-white p-7 transition-shadow hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)]"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5" />
                    <h2 className="text-lg font-semibold tracking-tight">
                      {label}
                    </h2>
                  </div>
                  <p className="mt-2 text-sm text-muted">{desc}</p>
                </div>
                <span className="flex h-10 w-10 rotate-45 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:rotate-0 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                  <ArrowUpRight />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
