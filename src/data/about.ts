import type { AboutContent } from "@/types/about";

/**
 * All About section copy lives here.
 * Change text, stats, or highlights without touching components.
 */
export const aboutContent: AboutContent = {
  eyebrow: "01 — About",
  title: "A designer who thinks in motion and builds with intent",
  bio: [
    "I'm a creative developer focused on the intersection of design, engineering, and motion. I care about the details most people never consciously notice — easing curves, typographic rhythm, and the half-second delay that makes an interface feel alive.",
    "Over the past five years I've partnered with startups and studios to ship products that feel premium: SaaS dashboards, marketing sites, and interactive brand experiences. I work end-to-end — from Figma prototypes to production React.",
    "When I'm not coding, I'm studying film composition, collecting type specimens, and pushing the limits of what the web can feel like.",
  ],
  image: {
    // Add src: "/images/profile.jpg" when you have a photo
    alt: "Alex Morgan portrait",
    initials: "AM",
  },
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "40+" },
    { label: "Happy Clients", value: "25+" },
  ],
  highlights: [
    "Motion-first UI",
    "Design systems",
    "Next.js & React",
    "Creative direction",
    "Performance obsessed",
  ],
  location: "San Francisco, CA",
};
