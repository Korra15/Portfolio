import React from "react";
import { SiEpicgames } from "react-icons/si";
import { IoGameController } from "react-icons/io5";
import { PiDesktopTowerDuotone } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import { RiGamepadFill } from "react-icons/ri";


export const links = [
  {
    name: "Home",
    hash: "#home",
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
    name: "About",
    hash: "#about",
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
      "I completed my bachelors from MIT ADT University ranking 3rd in Bachelor of Technology Computer Science and Engineering - Intelligent Systems.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
    link: "https://mituniversity.ac.in/",
  },
  {
    title: "Unreal Developer",
    company: "Eastern Royal Company",
    location: "Pune, India",
    description:
      "Developed realistic 3D virtual tour games for university campuses, as a free roam exploration game allowing the user to wander around these locations grasping their essense in an interactive and engaging way. Also part of the team to create an adventure game named 'Local Streets'.",
    icon: React.createElement(RiGamepadFill),
    date: "Jan|2022 - Oct|2023",
    link: "https://www.youtube.com/channel/UCSNTRYL01WOflaOiMI6mHCA",
  },
  {
    title: "Game Developer",
    company: "Strall Pvt. Ltd.",
    location: "Mumbai, India",
    description:
      "Gameplay functionality programmer collaborating with a team to develop a Team-Death-Match and Battle Royale multiplayer game. I also overlooked the server management and android build generation.",
    icon: React.createElement(PiDesktopTowerDuotone),
    date: "2022 - 2023",
    link: "https://www.linkedin.com/company/strall-pvt-ltd/about/",
  },
  {
    title: "Lead Game Developer",
    company: "Flege",
    location: "Dubai, UAE",
    description:
      "Team lead and Sole programmer of a metaverse workshop combine with an immersive experience simulating the Dubai real estate market using unreal engine for a multiplayer game adventure using AWS services to deploy and manage gameplay functionalities.",
    icon: React.createElement(IoGameController),
    date: "May|2023 - Aug|2023",
    link: "https://flege.co/",
  },
  {
    title: "Women Creators Program - UEFN",
    company: "Epic Games",
    location: "Remote",
    description:
      "Epic games with support from Dancing Atoms Studios, AWS for Games, Women in Games International and Green Rain had organized a 5-week extensive training course mentoring 100 creatives from across multiple regions on building and publishing cross-platform experiences in UEFN. Thrilling experience teaming up and working with women across the globe to construct wonderfous Fortnite islands.",
    icon: React.createElement(SiEpicgames),
    date: "Sep|2023 - Oct|2023",
    link: "https://www.unrealengine.com/en-US/events/women-creators-program-2023",
  },
  {
    title: "Game Programmer",
    company: "Nodding Heads Games",
    location: "Pune, India",
    description:
      "Ported Raji: An Ancient Epic on PS5. Working with an extablished studio expanding their diverse team to create a new classic action RPG genre. Working with the various teams to deliver best-in-class game mechanics for AAA games. Exploring, experimenting with UEFN, developing on various platforms, receiving mentorship from seniors is a delightful experience.",
      // getting involved in foundational architectural decisions 
    icon: React.createElement(IoGameController),
    date: "2023 - 2024",
    link: "https://www.noddingheadsgames.com/",
  },
] as const;

export const skillsData = [
  "Game Development",
  "Unreal Engine",
  "Unity",
  "Unreal Engine for Fortnite",
  "GameMaker",
  "Machine Learning",
  "Artificial Intelligence",
  "C/C++",
  "C#",
  "Verse",
  "Python",
  "MySQL",
  "JavaScript",
  "TypeScript",
  "CSS",
  "Tailwind",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Git",
  "Linux",
  "AWS",
  "Google Cloud",
  "Figma",
] as const;

export const abilityData = [
  "Leadership",
  "Communication",
  "Problem Solving",
  "Project Management",
  "Time Management",
  "Creative",
  "Inquisitive",
  // "Open Source Contribution",
] as const;
