import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

/** Shared editorial header used across every section. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        align === "center" && "text-center",
        className,
      )}
    >
      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
        {eyebrow}
      </p>
      <h2 className="max-w-2xl font-heading text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.1] tracking-tight text-[var(--foreground)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
          {description}
        </p>
      )}
    </header>
  );
}
