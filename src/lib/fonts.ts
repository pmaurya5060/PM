import { Cormorant_Garamond, Inter } from "next/font/google";

/**
 * Editorial serif for display headings.
 * `variable` exposes a CSS custom property we map in Tailwind as `font-heading`.
 */
export const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

/**
 * Neutral sans for body copy and UI.
 * `display: swap` avoids invisible text while the font loads.
 */
export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
