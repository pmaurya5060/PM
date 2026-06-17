/**
 * Edit this file to personalize the entire site.
 * Components read from here — no hunting through JSX.
 */
export const siteConfig = {
  name: "Alex Morgan",
  role: "Creative Developer & Designer",
  email: "hello@alexmorgan.dev",
  url: "https://alexmorgan.dev",
  description:
    "Premium portfolio showcasing creative development, motion design, and polished digital experiences.",
  availability: {
    isAvailable: true,
    label: "Available for freelance & full-time",
  },
  social: [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: "github" as const,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: "linkedin" as const,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: "twitter" as const,
    },
    {
      name: "Email",
      href: "mailto:hello@alexmorgan.dev",
      icon: "mail" as const,
    },
  ],
  hero: {
    eyebrow: "Portfolio · 2026",
    headline: ["Crafting", "digital", "experiences", "with precision"],
    subheadline:
      "I design and build premium web experiences — motion-first interfaces, performant architecture, and cinematic detail.",
    cta: {
      primary: { label: "View Projects", href: "#projects" },
      secondary: { label: "Get in Touch", href: "#contact" },
    },
  },
} satisfies import("@/types").SiteConfig;
