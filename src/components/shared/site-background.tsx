"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassPanelProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Frosted glass surface using backdrop-filter.
 * Semi-transparent fill + blur reads content behind without losing legibility.
 */
export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)]",
        "shadow-[var(--glass-shadow)] backdrop-blur-xl backdrop-saturate-150",
        className,
      )}
    >
      {children}
    </div>
  );
}

type AvailabilityBadgeProps = {
  label: string;
  isAvailable: boolean;
};

export function AvailabilityBadge({
  label,
  isAvailable,
}: AvailabilityBadgeProps) {
  return (
    <GlassPanel className="inline-flex items-center gap-2.5 px-4 py-2">
      <span className="relative flex h-2 w-2">
        {isAvailable && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        )}
        <span
          className={cn(
            "relative inline-flex h-2 w-2 rounded-full",
            isAvailable ? "bg-emerald-400" : "bg-neutral-400",
          )}
        />
      </span>
      <span className="text-sm text-[var(--muted)]">{label}</span>
    </GlassPanel>
  );
}

/** Soft ambient orb — cheap GPU transform, no layout thrash. */
function GlowOrb({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        "bg-[var(--glow-primary)] opacity-60",
        className,
      )}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -25, 15, 0],
        scale: [1, 1.08, 0.95, 1],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

/** SVG feTurbulence noise — lightweight texture without an image request. */
function NoiseOverlay() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[var(--noise-opacity)] mix-blend-overlay"
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 17) % 84)}%`,
  top: `${12 + ((index * 23) % 76)}%`,
  size: 2 + (index % 3),
  duration: 14 + (index % 6) * 2,
  delay: index * 0.4,
}));

/**
 * Layered ambient background: gradients, orbs, noise, particles.
 * Fixed + pointer-events-none keeps it decorative only.
 */
export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--background)]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--gradient-1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,var(--gradient-2),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_0%_80%,var(--gradient-3),transparent)]" />

      <GlowOrb className="left-[10%] top-[15%] h-72 w-72" delay={0} />
      <GlowOrb className="right-[5%] top-[40%] h-96 w-96" delay={4} />
      <GlowOrb className="bottom-[10%] left-[35%] h-64 w-64" delay={8} />

      <NoiseOverlay />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-[var(--particle-color)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--background)_95%)]" />
    </div>
  );
}
