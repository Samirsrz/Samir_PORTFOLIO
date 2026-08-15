import { Mail, Phone, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const LINKS = [
  { href: profile.socials.email, label: profile.email, icon: Mail },
  { href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`, label: profile.phone, icon: Phone },
  { href: profile.socials.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: profile.socials.github, label: "GitHub", icon: GithubIcon },
  { href: profile.socials.leetcode, label: "LeetCode", icon: Code2 },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-gold">
            <span aria-hidden className="h-px w-6 bg-gold/60" />
            Contact
          </span>
          <h2 className="mt-6 font-display text-3xl font-medium text-ink sm:text-5xl">
            Let&apos;s build something reliable.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-ink-muted">
            Open to entry-level software engineering roles — reach out directly,
            or find me on any of these.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <a href={profile.socials.email}>
                <Mail size={16} />
                Say hello
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-xs text-ink-muted transition-colors hover:border-gold hover:text-gold"
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
