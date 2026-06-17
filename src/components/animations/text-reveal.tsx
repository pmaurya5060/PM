"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

const containerVariants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.06,
      delayChildren: delay,
    },
  }),
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    rotateX: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 18,
      mass: 0.8,
    },
  },
};

/**
 * Splits copy into words and staggers each word upward with a spring.
 * `perspective` on the parent enables subtle 3D rotation on reveal.
 */
export function TextReveal({
  text,
  className,
  delay = 0,
  as: Tag = "span",
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <Tag className={cn("inline-block perspective-[800px]", className)}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.28em]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        custom={delay}
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={wordVariants}
            className="inline-block origin-bottom"
            style={{ transformStyle: "preserve-3d" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
