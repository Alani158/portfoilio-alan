import Link from "next/link";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import { ArrowUpRight } from "./Icons";
import { profile } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="px-3 pb-20 md:px-6 md:pb-28">
      <div className="mx-auto max-w-site rounded-[2rem] border border-line bg-gradient-to-br from-brand/10 via-paper to-[#f2ece2] px-6 py-20 text-center shadow-[0_25px_70px_-45px_rgba(17,17,17,0.35)] md:py-28">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
            <span
              className={`h-2 w-2 rounded-full ${
                profile.available ? "bg-brand" : "bg-neutral-400"
              }`}
            />
            Available for new project
          </span>
          <h2 className="mt-6 text-5xl font-black tracking-[-0.06em] md:text-7xl">
            Have a project
            <span className="mt-2 block text-brand">in mind?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
            I build thoughtful digital products with clear structure, modern
            interfaces, and systems that are easy to trust and grow with.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-transform hover:translate-y-[-1px]"
          >
            Contact Me <ArrowUpRight />
          </Link>
          <div className="mt-10 flex justify-center">
            <SocialLinks />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
