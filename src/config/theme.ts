/**
 * Single source of truth for design tokens.
 * Values here mirror CSS variables in globals.css — change both together,
 * or treat this file as documentation for what each token controls.
 */
export const themeTokens = {
  light: {
    background: "#fafafa",
    foreground: "#0a0a0a",
    muted: "#737373",
    card: "rgba(255, 255, 255, 0.72)",
    cardBorder: "rgba(0, 0, 0, 0.06)",
    glass: "rgba(255, 255, 255, 0.55)",
    glow: "rgba(0, 0, 0, 0.04)",
    accent: "#171717",
    accentSoft: "rgba(23, 23, 23, 0.08)",
  },
  dark: {
    background: "#030303",
    foreground: "#f5f5f5",
    muted: "#a3a3a3",
    card: "rgba(255, 255, 255, 0.04)",
    cardBorder: "rgba(255, 255, 255, 0.08)",
    glass: "rgba(255, 255, 255, 0.06)",
    glow: "rgba(255, 255, 255, 0.06)",
    accent: "#fafafa",
    accentSoft: "rgba(255, 255, 255, 0.08)",
  },
} as const;

export type ThemeMode = keyof typeof themeTokens;
