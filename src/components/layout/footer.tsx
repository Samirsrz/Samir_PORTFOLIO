import { Code2, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/profile";

const SOCIAL_LINKS = [
  { href: profile.socials.github, label: "GitHub", icon: GithubIcon },
  { href: profile.socials.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: profile.socials.leetcode, label: "LeetCode", icon: Code2 },
  { href: profile.socials.email, label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg text-ink">
            {profile.name}
            <span className="text-gold">.</span>
          </p>
          <p className="mt-1 text-sm text-ink-faint">{profile.role}</p>
        </div>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="rounded-full border border-border p-2.5 text-ink-muted transition-colors hover:border-gold hover:text-gold"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border py-4 text-center font-mono text-xs text-ink-faint">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
