import eqaImg from "@/assets/images/projects/equinox-screenshot-bw.png";
import pokememsImg from "@/assets/images/projects/pokemems-screenshot-bw.png";
import eqaVideo from "@/assets/videos/eqa-preview.mp4";
import { default as pokememsVideo } from "@/assets/videos/pokemems-preview.mp4";

type Button = {
  copy: string;
  href: string;
};

export type ProjectPreview = {
  preview: {
    img: ImageMetadata;
    video: string;
  };
  title: string;
  buttonForLiveSite: Button;
  buttonForCodebase?: Button;
};

export const PROJECTS: ProjectPreview[] = [
  {
    preview: {
      img: eqaImg,
      video: eqaVideo,
    },
    title: "Equinox Martial Arts",
    buttonForLiveSite: {
      copy: "Visit website",
      href: "https://equinoxacademy.com.au",
    },
  },
  {
    preview: {
      img: pokememsImg,
      video: pokememsVideo,
    },
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
