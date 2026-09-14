"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

const filters = ["All", "Full-Stack", "Frontend"] as const;

export default function ProjectsGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list =
    active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-6 border-b border-line pb-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`text-sm transition-colors ${
              active === f
                ? "font-semibold text-ink"
                : "text-muted hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto hidden text-sm text-muted sm:block">
          {list.length} {list.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <motion.div
        layout
        className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div
              layout
              key={p.slug}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
