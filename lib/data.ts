import React from "react";
import { SiEpicgames } from "react-icons/si";
import { IoGameController } from "react-icons/io5";
import { PiDesktopTowerDuotone } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";

import InterviewReady from "@/public/InterviewReady.jpg";
import TimeTest from "@/public/TimeTest.png"
import PeopleAnalyzer from "@/public/PeopleAnalyzer.png"
import ADiTiBot from "@/public/ADiTiBot.png"
import BlogBot from "@/public/BlogBot.jpg";
import GameDoora from "@/public/GameDoora.png";
import CareOnWheels from "@/public/CareOnWheels.png";
import SeaEye from "@/public/SeaEye.png";



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
    description:
      "Working with an extablished studio expanding their diverse team to create a new classic action RPG genre. Working with the various teams to deliver best-in-class game mechanics for AAA games. Exploring, experimenting with UEFN, developing on various platforms, receiving mentorship from seniors is a delightful experience.",
      // getting involved in foundational architectural decisions 
    icon: React.createElement(IoGameController),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Unreal Engine Exploration",
    description:
      " A 2 level game ",
    tags: ["Unreal Engine 5", "Blueprints", "C++"],
    imageUrl: InterviewReady,
    projectLink: "",
    detail: ""
  },
  {
    title: "TimeTest",
    description:
      "My first game developerd for game jam titans under the theme time. A 2D ",
    tags: ["GameMaker Studio"],
    imageUrl: TimeTest,
    projectLink: "",
    detail: ""
  },
  {
    title: "People Analyzer",
    description:
      "A ML, RL, VR application to access the users personality and generate scenarios based on the output to simulate human conversations and aid player to communicate with others of different personalities.",
    tags: ["Unity", "C#", "Android Studio", "Flask", "k-means algoithm"],
    imageUrl: PeopleAnalyzer,
    projectLink: "",
    detail: ""
  },
  {
    title: "Game Mechanics + AI",
    description:
      "",
    tags: ["Unreal Enigine", "Blueprints", "C++"],
    imageUrl:  InterviewReady,
    projectLink: "",
    detail: ""
  },
  {
    title: "Gamedoora",
    description:
      "First every studio-as-a-service. A platform to create, connect and collaborate with people across the globe to develop awe-inspiring games the open source way.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: GameDoora,
    projectLink: "",
    detail: ""
  },
  {
    title: "ADiTi Chatbot",
    description:
      "Lifelike conversational AI developed to aid parents and students answer all queries related to the university.",
    tags: ["Google Dialogflow", "Node.js", "Express", "Ngrok"],
    imageUrl: ADiTiBot,
    projectLink: "",
    detail: ""
  },
  {
    title: "Care on Wheels",
    description:
      "a voice controlled bot aimed to ease the patients dependency on the medical staff, providing regular vital check-ups and easily available first-aid.",
    tags: ["Arduino", "Vue.js", "Tableau", "Google Dialogflow", "Tailwind"],
    imageUrl: CareOnWheels,
    projectLink: "",
    detail: ""
  },
  {
    title: "Blogbot",
    description:
      "An application to answer queries related to the pandemic situation, vaccine status, chat with a web-scrapping, self-learnign bot, along with an automatic sanitizer dispenser and temperature sensor.",
    tags: ["Flask", "Arduino", "NLTK", "ScikitLearn", "Numpy", "Newspaper3K"],
    imageUrl: BlogBot,
    projectLink: "",
    detail: ""
  },
  {
    title: "SeaEye",
    description:
      "Deep learnign based underwater object detection model to identify and classify multiple types of underwater objects, increase awareness regarding the deteriorating underwater ecosystem and provide marine surveillance.",
    tags: ["Google Colab", "Roboflow"],
    imageUrl: SeaEye,
    projectLink: "",
    detail: "A multidisciplinary project, An underwater object detection model build to speedily and accurately identify multiple types of underwater objects along with classifying them into various categories, increase awareness regarding the deteriorating underwater ecosystem conditions and provide marine surveillanc."
  },
  {
    title: "Interview Ready",
    description:
      "An android application that tests the users ability in aptitude, logical reasoning, mathematical reasoning, data structures and algorithms through quizes to help users with their interview preperation",
    tags: ["Java", "Android Studio", "Firebase", "Lottie"],
    imageUrl: InterviewReady,
    projectLink: "",
    detail: "A one stop solution for interview preperations. An application that leverages the power of java to build a robust solution aiding aspirants prepare for the next leap in thier carrier "
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
  "Python",
  "Django",
  "MongoDB",
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
  "Express",
  "Linux",
  "AWS",
  "Google Cloud",
  "Figma",
] as const;

export const abilityData = [
  "Time Management",
  "Leadership",
  "Communication",
  "Problem Solving",
  "Project Management",
  "Creative",
  "Inquisitive",
  "Open Source Contribution",
] as const;
