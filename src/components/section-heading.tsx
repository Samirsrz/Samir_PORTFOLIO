import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-gold">
        <span aria-hidden className="h-px w-6 bg-gold/60" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-ink-muted",
            align === "center" ? "mx-auto" : ""
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
