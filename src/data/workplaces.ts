import cbaImg from "@/assets/images/employers/cba.png";
import leapImg from "@/assets/images/employers/leap.png";
import telstraImg from "@/assets/images/employers/telstra.png";

export type Workplace = {
  employer: string;
  position: string;
  startDate: Date;
  endDate: Date;
  img: ImageMetadata;
};

export const WORKPLACES: Workplace[] = [
  {
    employer: "LEAP Legal Software",
    position: "Software Engineer",
    startDate: new Date(2025, 6), // May
    endDate: new Date(2025, 13), // Dec
    img: leapImg,
  },
  {
    employer: "Commonwealth Bank",
    position: "Automation Engineer",
    startDate: new Date(2021, 9), // Aug
    endDate: new Date(2024, 8), // July,
    img: cbaImg,
  },
  {
    employer: "Telstra",
    position: "Web Developer",
    startDate: new Date(2020, 9), // Aug
    endDate: new Date(2021, 9), // Aug
    img: telstraImg,
  },
];
