// When you're ready to write, the cleanest path is an MDX post per file under
// `src/content/posts/*.mdx`, mapped over here instead of this static empty state.

import { Notebook } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/profile";

export function Blog() {
  return (
    <section id="blog" className="scroll-mt-24 border-t border-border px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="Writing" title="Blog" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center rounded-3xl border border-dashed border-border-strong px-6 py-16 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold">
              <Notebook size={20} />
            </span>
            <h3 className="mt-5 font-display text-xl text-ink">
              First post is still in the oven.
            </h3>
            <p className="mt-2 max-w-md text-sm text-ink-muted">
              I&apos;ll be writing about the systems I build — auth, APIs, and the
              occasional ML detour. In the meantime, the code speaks for itself.
            </p>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 text-sm font-medium text-gold underline-offset-4 hover:underline"
            >
              Follow along on GitHub →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
