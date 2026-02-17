type Button = {
  copy: string;
  href: string;
};

export type ProjectPreview = {
  title: string;
  buttonForLiveSite: Button;
  buttonForCodebase?: Button;
};

export const PROJECTS: ProjectPreview[] = [
  {
    title: "Equinox Martial Arts",
    buttonForLiveSite: {
      copy: "Visit website",
      href: "https://equinoxacademy.com.au",
    },
  },
  {
    title: "Pokémems",
    buttonForLiveSite: {
      copy: "Play game",
      href: "https://poke-mems.netlify.app/",
    },
    buttonForCodebase: {
      copy: "See code",
      href: "https://github.com/henrylin03/pokemems",
    },
  },
];
