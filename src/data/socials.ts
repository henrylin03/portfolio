import githubIcon from "@/assets/icons/github.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";

export type SocialMediaLink = {
  label: string;
  href: string;
  icon: ImageMetadata;
  classes: string;
};

export const SOCIALS: SocialMediaLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/henrylin03",
    icon: linkedinIcon,
    classes: "opacity-70",
  },
  {
    label: "GitHub",
    href: "https://github.com/henrylin03/",
    icon: githubIcon,
    classes: "opacity-80",
  },
];
