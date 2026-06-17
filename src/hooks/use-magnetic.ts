"use client";

import { useRef, useState, type MouseEvent } from "react";

type MagneticOptions = {
  strength?: number;
};

/**
 * Tracks pointer position relative to an element's center and returns
 * spring-smoothed x/y offsets for a subtle magnetic pull effect.
 */
export function useMagnetic({ strength = 0.35 }: MagneticOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setPosition({
      x: (event.clientX - centerX) * strength,
      y: (event.clientY - centerY) * strength,
    });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return { ref, position, handleMouseMove, handleMouseLeave };
}
