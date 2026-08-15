"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Server } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [5, -5]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), {
    stiffness: 150,
    damping: 18,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  const pills = project.roles ?? project.features ?? [];
  const pillVariant = project.roles ? "accent" : "gold";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-gold/30 sm:p-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0"
      />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="lg:max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
            {project.tagline}
          </p>
          <h3 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
            {project.name}
          </h3>

          {pills.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {pills.map((p) => (
                <Badge key={p} variant={pillVariant as "accent" | "gold"}>
                  {p}
                </Badge>
              ))}
            </div>
          )}

          <div className="mt-5 space-y-3">
            {project.description.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t} variant="mono">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 flex-row gap-3 lg:flex-col">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-accent-strong"
            >
              <ExternalLink size={15} />
              Live
            </a>
          )}
          {project.links.client && (
            <a
              href={project.links.client}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm text-ink-muted transition-colors hover:border-gold hover:text-gold"
            >
              <GithubIcon size={15} />
              Client
            </a>
          )}
          {project.links.server && (
            <a
              href={project.links.server}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm text-ink-muted transition-colors hover:border-gold hover:text-gold"
            >
              <Server size={15} />
              Server
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
