import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="What I build with"
            description="The tools that show up across most of what I ship — from the database up to the interface."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <Card className="h-full p-6">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-gold">
                  {group.category}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="default">
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
