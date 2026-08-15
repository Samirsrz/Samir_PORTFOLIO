"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import NetworkCanvas from "@/components/three/network-canvas";
import { profile } from "@/data/profile";
import image from "../ui/Samir_image.png"
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* Ambient 3D signature — sits behind everything, low opacity */}
      <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen">
        <NetworkCanvas />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--bg)_70%)]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
        {/* Text column */}
        <div>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-gold"
          >
            <span aria-hidden className="h-px w-6 bg-gold/60" />
            {profile.heroEyebrow}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="mt-6 font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl lg:text-6xl"
          >
            {profile.heroHeadline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.22}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {profile.heroSub}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.34}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg">
              <a href="#work">
                View my work
                <ArrowDown size={16} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={profile.resumeFile} download>
                <Download size={16} />
                Download resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.46}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-border p-2.5 text-ink-muted transition-colors hover:border-gold hover:text-gold"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-border p-2.5 text-ink-muted transition-colors hover:border-gold hover:text-gold"
            >
              <LinkedinIcon size={17} />
            </a>
            <span className="font-mono text-xs text-ink-faint">
              {profile.location}
            </span>
          </motion.div>
        </div>

        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[2.5rem] border border-dashed border-gold/25 [animation:spin-slow_40s_linear_infinite]"
          />
          <div
            aria-hidden
            className="absolute -inset-3 rounded-[2.25rem] bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,75,0.18),transparent_60%)]"
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border-strong bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            <Image
              src={image}
              alt={profile.name}
              fill
              priority
              sizes="(min-width: 768px) 384px, 320px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-full border border-border-strong bg-bg-elevated/95 px-5 py-2 text-center font-mono text-[11px] uppercase tracking-wider text-ink-muted shadow-lg backdrop-blur">
            Open to entry-level SWE roles
          </div>
        </motion.div>
      </div>
    </section>
  );
}
