"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { aboutContent } from "@/data/about";
import {
  RevealOnScroll,
  StaggerItem,
  StaggerReveal,
} from "@/components/animations/reveal-on-scroll";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { GlassPanel } from "@/components/shared/site-background";
import { cn } from "@/lib/utils";

function PortraitCard() {
  const { image } = aboutContent;

  return (
    <GlassPanel className="relative aspect-[4/5] overflow-hidden p-1">
      <div className="relative h-full w-full overflow-hidden rounded-[calc(1rem-2px)]">
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            priority={false}
          />
        ) : (
          <div
            className={cn(
              "flex h-full w-full items-center justify-center",
              "bg-[radial-gradient(ellipse_at_30%_20%,var(--gradient-1),transparent_50%),",
              "radial-gradient(ellipse_at_70%_80%,var(--gradient-2),transparent_50%),",
              "var(--glass-bg)]",
            )}
          >
            <span className="font-heading text-7xl font-medium text-[var(--foreground)]/20">
              {image.initials}
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,var(--background)_0%,transparent_40%)] opacity-30" />
      </div>

      <div className="absolute bottom-5 left-5 right-5">
        <GlassPanel className="inline-flex items-center gap-2 px-3 py-2">
          <MapPin className="h-3.5 w-3.5 text-[var(--muted)]" aria-hidden />
          <span className="text-xs text-[var(--muted)]">
            {aboutContent.location}
          </span>
        </GlassPanel>
      </div>
    </GlassPanel>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <GlassPanel className="flex flex-col gap-1 px-5 py-4">
      <span className="font-heading text-3xl font-medium text-[var(--foreground)]">
        {value}
      </span>
      <span className="text-sm text-[var(--muted)]">{label}</span>
    </GlassPanel>
  );
}

export function About() {
  const { eyebrow, title, bio, stats, highlights } = aboutContent;

  return (
    <section id="about" className="relative py-28 sm:py-32">
      <Container>
        <RevealOnScroll>
          <SectionHeader eyebrow={eyebrow} title={title} />
        </RevealOnScroll>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
          <RevealOnScroll direction="right" delay={0.1}>
            <PortraitCard />
          </RevealOnScroll>

          <div className="flex flex-col justify-center">
            <StaggerReveal className="space-y-6">
              {bio.map((paragraph) => (
                <StaggerItem key={paragraph.slice(0, 24)}>
                  <p className="text-base leading-[1.8] text-[var(--muted)] sm:text-lg">
                    {paragraph}
                  </p>
                </StaggerItem>
              ))}
            </StaggerReveal>

            <RevealOnScroll delay={0.2} className="mt-10">
              <ul className="flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <li key={item}>
                    <span
                      className={cn(
                        "inline-block rounded-full px-4 py-1.5 text-sm",
                        "border border-[var(--glass-border)] bg-[var(--glass-bg)]",
                        "text-[var(--foreground)] backdrop-blur-xl",
                        "transition-colors duration-300 hover:border-[var(--foreground)]/15",
                      )}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>
        </div>

        <StaggerReveal className="mt-16 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <StatCard label={stat.label} value={stat.value} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
