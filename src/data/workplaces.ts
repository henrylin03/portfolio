import cbaImg from "@/assets/images/employers/cba.png";
import leapImg from "@/assets/images/employers/leap-no-shade.png";
import telstraImg from "@/assets/images/employers/telstra-no-shade.png";

export type Workplace = {
  employer: string;
  position: string;
  startMonthYear: string;
  endMonthYear: string;
  img: ImageMetadata;
};

export const WORKPLACES: Workplace[] = [
  {
    employer: "LEAP Legal Software",
    position: "Software Engineer",
    startMonthYear: "May 2025",
    endMonthYear: "Dec 2025",
    img: leapImg,
  },
  {
    employer: "Commonwealth Bank",
    position: "Automation Engineer",
    startMonthYear: "Aug 2021",
    endMonthYear: "Jul 2024",
    img: cbaImg,
  },
  {
    employer: "Telstra",
    position: "Web Developer",
    startMonthYear: "Aug 2020",
    endMonthYear: "Aug 2021",
    img: telstraImg,
  },
];
