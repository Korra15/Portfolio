import React from "react";
import { SiEpicgames } from "react-icons/si";
import { IoGameController } from "react-icons/io5";
import { SiUnrealengine } from "react-icons/si";
import { PiDesktopTowerDuotone } from "react-icons/pi";


import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Triumphs",
    hash: "#triumphs",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduation",
    company: "MIT ADT University",
    location: "Pune, India",
    description:
      "I completed my bachelors from MIT ADT University ranking 3rd in Bachelor of Technology Computer Science and Engineering - Intelligent Systems  .",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Game Developer",
    company: "Strall Pvt. Ltd.",
    location: "Mumbai, India",
    description:
      "Gameplay functionality programmer collaborating with a team to develop a Team-Death-Match and Battle Royale multiplayer game. I also overlooked the server management and android build generation",
    icon: React.createElement(PiDesktopTowerDuotone),
    date: "2022 - 2023",
  },
  {
    title: "Lead Game Developer",
    company: "Flege",
    location: "Dubai, UAE",
    description:
      "Team lead and Sole programmer of a metaverse workshop combine with an immersive experience simulating the Dubai real estate market using unreal engine for a multiplayer game adventure using AWS services to deploy and manage gameplay functionalities. ",
    icon: React.createElement(IoGameController),
    date: "May|2023 - Aug|2023",
  },
  {
    title: "Women Creators Program - UEFN",
    company: "Epic Games",
    location: "Remote",
    description:
      "Epic games with support from Dancing Atoms Studios, AWS for Games, Women in Games International and Green Rain had organized a 5-week extensive training course mentoring 100 creatives from across multiple regions on building and publishing cross-platform experiences in UEFN. Thrilling experience teaming up and working with women across the globe to construct wonderfous Fortnite islands.",
    icon: React.createElement(SiEpicgames),
    date: "Sep|2023 - Oct|2023",
  },
  {
    title: "Game Programmer",
    company: "Nodding Heads Games",
    location: "Pune, India",
    description:""
    //   " Working with an extablished studio expanding their diverse team to create a new classic action RPG genre. Exploring and experimenting with UEFN, various console .
    //   3. Working with the animation and
    //   technical animation teams to deliver a
    //   best-in-class animation system for AAA
    //   games and get
    //   involved in foundational architectural
    //   decisions and implementation.",
    // icon: React.createElement(IoGameController),
    // date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Unreal Engine Exploration",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    projectLink: ""
  },
  {
    title: "TimeTest",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    projectLink: ""
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    projectLink: ""
  },
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    projectLink: ""
  },
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    projectLink: ""
  },
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    projectLink: ""
  },
] as const;

export const skillsData = [
  "Game Development",
  "Unreal Engine",
  "C++",
  "Unity",
  "C#",
  "Python",
  "JavaScript",
  "CSS",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Django",
  "Framer Motion",
] as const;

export const abilityData = [
  "Time Management",
  "Leadership",
  "Communication"
] as const;
