"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              profile.available ? "bg-emerald-500" : "bg-neutral-400"
            }`}
          />
          <span className="hidden text-xs font-medium uppercase tracking-[0.15em] text-muted sm:block">
            Available for New Project
          </span>
          <span className="text-sm font-extrabold tracking-tight sm:hidden">
            AM.
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors hover:text-ink ${
                pathname.startsWith(l.href)
                  ? "font-semibold text-ink"
                  : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:scale-[1.04]"
          >
            Let&apos;s Talk
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-ink transition-transform ${
              open ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-transform ${
              open ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-paper md:hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3.5 text-base font-medium last:border-0"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-paper"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
