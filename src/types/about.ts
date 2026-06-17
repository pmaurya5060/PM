export type AboutStat = {
  label: string;
  value: string;
};

export type AboutImage = {
  src?: string;
  alt: string;
  initials: string;
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  bio: string[];
  image: AboutImage;
  stats: AboutStat[];
  highlights: string[];
  location: string;
};
