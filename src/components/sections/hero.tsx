"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { FadeIn } from "@/components/animations/fade-in";
import { TextReveal } from "@/components/animations/text-reveal";
import { AvailabilityBadge } from "@/components/shared/site-background";
import { Container } from "@/components/shared/container";
import { SocialIcon } from "@/components/shared/social-icon";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

export function Hero() {
  const { hero, availability, social, name, role } = siteConfig;

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center pb-20 pt-28"
    >
      <Container>
        <div className="mb-10 flex items-center justify-between gap-4">
          <FadeIn delay={0.1}>
            <AvailabilityBadge
              isAvailable={availability.isAvailable}
              label={availability.label}
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <ThemeToggle />
          </FadeIn>
        </div>

        <div className="max-w-4xl">
          <FadeIn delay={0.2}>
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
              {hero.eyebrow}
            </p>
          </FadeIn>

          <h1 className="font-heading text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[1.05] tracking-tight text-[var(--foreground)]">
            {hero.headline.map((line, index) => (
              <span key={line} className="block overflow-hidden">
                <TextReveal
                  text={line}
                  delay={0.25 + index * 0.12}
                  as="span"
                  className={cn(
                    index === hero.headline.length - 1 &&
                      "text-[var(--muted)] italic",
                  )}
                />
              </span>
            ))}
          </h1>

          <FadeIn delay={0.85} className="mt-8 max-w-2xl">
            <p className="text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
              {hero.subheadline}
            </p>
          </FadeIn>

          <FadeIn delay={1} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton strength={0.25}>
              <Link
                href={hero.cta.primary.href}
                className={cn(
                  "group inline-flex items-center gap-2 rounded-full px-7 py-3.5",
                  "bg-[var(--foreground)] text-[var(--background)]",
                  "text-sm font-medium transition-shadow duration-300",
                  "hover:shadow-[0_0_40px_var(--glow-primary)]",
                )}
              >
                {hero.cta.primary.label}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <Link
                href={hero.cta.secondary.href}
                className={cn(
                  "inline-flex items-center rounded-full px-7 py-3.5",
                  "border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl",
                  "text-sm font-medium text-[var(--foreground)]",
                  "transition-all duration-300 hover:border-[var(--foreground)]/20",
                )}
              >
                {hero.cta.secondary.label}
              </Link>
            </MagneticButton>
          </FadeIn>
        </div>

        <FadeIn delay={1.15} className="mt-16 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="font-heading text-2xl text-[var(--foreground)]">{name}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">{role}</p>
          </div>

          <ul className="flex items-center gap-3">
            {social.map((item) => (
              <li key={item.name}>
                <MagneticButton strength={0.35}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-full",
                      "border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl",
                      "text-[var(--muted)] transition-all duration-300",
                      "hover:border-[var(--foreground)]/20 hover:text-[var(--foreground)]",
                    )}
                  >
                    <SocialIcon name={item.icon} className="h-4 w-4" />
                  </Link>
                </MagneticButton>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
