import React from "react";
import { SiEpicgames } from "react-icons/si";
import { IoGameController } from "react-icons/io5";
import { PiDesktopTowerDuotone } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";

import type { Experience } from "./types";
import { TAOverview, TAExperience, GAExperience, NHGExperience, WCPExperience, FlegeExperience, StrallExperience } from "./details/DetailedExperience";

export const experiencesData: Experience[] = [
  {
    title: "Master's in Game Design and Development",
    company: "Rochester Institute of Technology",
    location: "Rochester, New York, USA",
    description:
        "Currently pursuing my master's in game design and development from Rochester Institute of Technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - 2026",
    link: "https://www.rit.edu/",
  },
    {
    title: "Teaching Assistant - Multiple Game Development Courses",
    company: "Rochester Institute of Technology",
    location: "Rochester, New York, USA",
    description:
        "Contributed as a Teaching Assistant for the multiple undergraduate game development course",
    overview: TAOverview,
    detailedDescription: TAExperience,
    icon: React.createElement(FaChalkboardTeacher),
    date: "Jan|2025 - Present",
  },
    {
    title: "Graudate Research Assistant",
    company: "Rochester Institute of Technology",
    location: "Rochester, New York, USA",
    description:
        "Worked as a VR Developer collaborating on a research project building games for kids with ADHD to help improve their focus and attention span through audio visual stimuli and interactive gameplay.",
    detailedDescription: GAExperience,
    icon: React.createElement(GiArchiveResearch),
    date: "Aug|2024 - May|2025",
  },
  {
    title: "Game Programmer",
    company: "Nodding Heads Games",
    location: "Pune, India",
    description:
      "Ported Raji: An Ancient Epic to PS5. Exploring, experimenting in UEFN to create narrative based experiences.",
    detailedDescription: NHGExperience,
    icon: React.createElement(IoGameController),
    date: "Aug|2023 - May|2024",
    link: "https://www.noddingheadsgames.com/",
  },
  {
    title: "Women Creators Program - UEFN",
    company: "Epic Games",
    location: "Remote",
    description:
      "Epic games with support from Dancing Atoms Studios, AWS for Games, Women in Games International and Green Rain had organized a 5-week extensive training course mentoring 100 women creators, on building and publishing cross-platform experiences in UEFN. Thrilling experience teaming up and working with women across the globe to construct exciting Fortnite islands.",
    detailedDescription: WCPExperience,
    icon: React.createElement(SiEpicgames),
    date: "Sep|2023 - Oct|2023",
    link: "https://www.unrealengine.com/en-US/events/women-creators-program-2023",
  },
  {
    title: "Lead Game Developer",
    company: "Flege",
    location: "Dubai, UAE",
    description:
      "Team Lead and Gameplay Programmer on an immersive multiplayer game simulation of the Dubai real estate market, developed in Unreal Engine and supported by AWS-based backend services for gameplay functionality and deployment.",
    detailedDescription: FlegeExperience,
    icon: React.createElement(IoGameController),
    date: "May|2023 - Aug|2023",
    link: "https://flege.co/",
  },
  {
    title: "BTech. Computer Science and Engineering - Intelligent Systems",
    company: "MIT ADT University",
    location: "Pune, India",
    description:
      "I completed my undergraduate from MIT ADT University ranking 3rd in Bachelor of Technology Computer Science and Engineering - Intelligent Systems.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
    link: "https://mituniversity.ac.in/",
  },
  {
    title: "Game Developer",
    company: "Strall Pvt. Ltd.",
    location: "Mumbai, India",
    description:
      "Worked as a Gameplay Functionality Programmer on Team Deathmatch and Battle Royale multiplayer modes, collaborating closely with the team and overseeing Android build generation.",
    detailedDescription: StrallExperience,
    icon: React.createElement(PiDesktopTowerDuotone),
    date: "Sep|2022 - Apr|2023",
    link: "https://www.linkedin.com/company/strall-pvt-ltd/about/",
  },
] as const;
