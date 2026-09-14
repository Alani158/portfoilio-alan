"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

const filters = ["All", "Full-Stack", "Frontend"] as const;

export default function ProjectsGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list = useMemo(
    () =>
      active === "All" ? projects : projects.filter((p) => p.type === active),
    [active],
  );

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
            type="button"
          >
            {f}
          </button>
        ))}
        <span className="ml-auto hidden text-sm text-muted sm:block">
          {list.length} {list.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <div className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-2">
        {list.map((p) => (
          <div
            key={p.slug}
            className="transition-all duration-300 ease-out hover:-translate-y-0.5"
          >
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
