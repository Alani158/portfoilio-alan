"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./Icons";

const services = [
  {
    title: "Frontend Development",
    desc: "Responsive interfaces that feel sharp, intuitive, and built to convert — from marketing pages to product surfaces.",
    points: [
      "Landing pages & marketing websites",
      "Dashboard and SaaS interfaces",
      "Component-driven UI built with clarity",
    ],
  },
  {
    title: "Full-Stack Development",
    desc: "End-to-end applications with real functionality behind the interface: auth, data, APIs, and deployment-ready architecture.",
    points: [
      "Next.js application builds",
      "Auth and user flows",
      "Database and API integration",
    ],
  },
  {
    title: "Product Design Systems",
    desc: "Design logic turned into scalable front-end systems that stay consistent across screens, states, and content types.",
    points: [
      "Design-to-code execution",
      "Reusable UI patterns",
      "Typography and spacing systems",
    ],
  },
  {
    title: "Web Experience Strategy",
    desc: "A thoughtful approach to structure, hierarchy, and interaction so the final experience feels clean and intentional.",
    points: [
      "Content structure planning",
      "User-flow clarity",
      "Performance and responsiveness",
    ],
  },
];

export default function ServiceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="px-3 pb-20 md:px-6 md:pb-28">
      <div className="mx-auto max-w-site rounded-[2rem] border border-line bg-white px-6 py-14 shadow-[0_25px_70px_-48px_rgba(17,17,17,0.35)] md:px-12 md:py-20">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            /Services
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] md:text-6xl">
            What I Do
          </h2>
        </Reveal>

        <div className="mt-12">
          {services.map((s, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="border-b border-line last:border-0">
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left md:py-8"
                  >
                    <span
                      className={`text-xl font-semibold tracking-tight transition-colors md:text-3xl ${
                        open ? "text-ink" : "text-muted hover:text-ink"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        open
                          ? "rotate-90 border-brand bg-brand text-paper"
                          : "border-line text-ink"
                      }`}
                    >
                      <ArrowUpRight />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mb-8 grid gap-8 rounded-[1.5rem] border border-line bg-panel p-6 md:grid-cols-[1fr_220px] md:p-8">
                          <div>
                            <p className="leading-relaxed text-muted">
                              {s.desc}
                            </p>
                            <ul className="mt-6 space-y-2.5">
                              {s.points.map((pt) => (
                                <li
                                  key={pt}
                                  className="flex items-center gap-3 text-sm text-ink/80"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                                  {pt}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="rounded-[1.25rem] border border-line bg-gradient-to-br from-[#f8f4ee] to-[#efe7df] p-4">
                            <div className="flex h-full min-h-[170px] flex-col justify-between rounded-[1rem] border border-line bg-paper p-4">
                              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
                                Approach
                              </span>
                              <div className="space-y-3">
                                <div className="h-2.5 w-full rounded-full bg-line" />
                                <div className="h-2.5 w-4/5 rounded-full bg-brand/30" />
                                <div className="h-2.5 w-3/5 rounded-full bg-accent/70" />
                              </div>
                              <span className="text-xs text-muted">
                                Clean systems. Thoughtful execution.
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
