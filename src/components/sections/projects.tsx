import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { projects, researchProjects } from "@/data/projects";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-border px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="Three systems, three sets of roles"
            description="Each of these started from the same question: who actually uses this, and what should each of them be allowed to do?"
          />
        </Reveal>

        <div className="mt-14 space-y-6">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {researchProjects.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-gold">
                Also — Machine Learning
              </p>
            </Reveal>
            <div className="mt-6 space-y-6">
              {researchProjects.map((project) => (
                <Reveal key={project.slug}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
