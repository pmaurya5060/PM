"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch: theme is unknown on the server.
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full",
          "border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl",
          className,
        )}
      />
    );
  }

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "group flex h-10 w-10 items-center justify-center rounded-full",
        "border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl",
        "transition-all duration-300 hover:border-[var(--foreground)]/20 hover:shadow-[var(--glass-shadow)]",
        className,
      )}
    >
      <Sun
        className={cn(
          "absolute h-4 w-4 text-[var(--foreground)] transition-all duration-500",
          isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
        )}
      />
      <Moon
        className={cn(
          "absolute h-4 w-4 text-[var(--foreground)] transition-all duration-500",
          isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0",
        )}
      />
    </button>
  );
}
