export type SocialIconName = "github" | "linkedin" | "twitter" | "mail";

export type SocialLink = {
  name: string;
  href: string;
  icon: SocialIconName;
};

export type NavItem = {
  label: string;
  href: string;
};

export type HeroCta = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  role: string;
  email: string;
  url: string;
  description: string;
  availability: {
    isAvailable: boolean;
    label: string;
  };
  social: SocialLink[];
  hero: {
    eyebrow: string;
    headline: string[];
    subheadline: string;
    cta: {
      primary: HeroCta;
      secondary: HeroCta;
    };
  };
};
