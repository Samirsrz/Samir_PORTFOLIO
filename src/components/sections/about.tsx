import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <SectionHeading eyebrow="About" title="Behind the stack" />
            <p className="mt-6 font-mono text-xs leading-relaxed text-ink-faint">
              CSE @ North South University
              <br />
              Advanced Web Development — in progress
              <br />
              Based in {profile.location}
            </p>
          </Reveal>

          <div className="space-y-6">
            {profile.about.map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
