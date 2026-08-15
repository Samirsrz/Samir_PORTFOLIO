import { GraduationCap, BadgeCheck, Clock } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { education, certifications } from "@/data/education";

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 border-t border-border px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="Background" title="Education & certifications" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Timeline — genuinely chronological, so dates carry the order */}
          <div className="relative space-y-10 border-l border-border pl-8">
            {education.map((item, i) => (
              <Reveal key={item.school} delay={i * 0.08} className="relative">
                <span className="absolute -left-[2.55rem] flex h-6 w-6 items-center justify-center rounded-full border border-gold/40 bg-bg text-gold">
                  <GraduationCap size={12} />
                </span>
                <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-xl text-ink">{item.school}</h3>
                <p className="mt-1 text-sm text-ink-muted">{item.credential}</p>
                <p className="mt-1 font-mono text-xs text-ink-faint">{item.detail}</p>
              </Reveal>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <Reveal key={cert.name} delay={i * 0.08}>
                <Card className="flex items-start gap-4 p-6">
                  <span className="mt-0.5 text-gold">
                    {cert.status === "Completed" ? (
                      <BadgeCheck size={20} />
                    ) : (
                      <Clock size={20} />
                    )}
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-ink">{cert.name}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{cert.issuer}</p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                      {cert.status}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
