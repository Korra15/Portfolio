import React from "react";
import { SiEpicgames } from "react-icons/si";
import { IoGameController } from "react-icons/io5";
import { PiDesktopTowerDuotone } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import { RiGamepadFill } from "react-icons/ri";


import InterviewReady from "@/public/InterviewReady.jpg";
import Game from "@/public/Game.png";
import AI1 from "@/public/AI1.png";
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
      "Working with an extablished studio expanding their diverse team to create a new classic action RPG genre. Working with the various teams to deliver best-in-class game mechanics for AAA games. Exploring, experimenting with UEFN, developing on various platforms, receiving mentorship from seniors is a delightful experience.",
      // getting involved in foundational architectural decisions 
    icon: React.createElement(IoGameController),
    date: "2023 - present",
    link: "https://www.noddingheadsgames.com/",
  },
] as const;

export const projectsData = [
  {
    title: "Puzzle Shooter",
    description:
      "A 2 level puzle based first person shooter game, filled with challenges aimed to culivate strategical, logical and critical thinking.",
    tags: ["Unreal Engine 5", "Blueprints", "C++"],
    imageUrl: Game,
    projectLink: "https://youtu.be/ZkF977oFx_g",
    detail: ""
  },
  {
    title: "TimeTest",
    description:
      "My first game developerd for game jam titans under the theme time. A 2D action maze chase to satisfy the hungry protagonist by feeding it treasures running agaist time navigating bullets.",
    tags: ["GameMaker Studio"],
    imageUrl: TimeTest,
    projectLink: "https://youtu.be/d7A8eDPak-0",
    detail: ""
  },
  {
    title: "People Analyzer",
    description:
      "A ML, RL, VR application to access the users personality and generate scenarios based on the output to simulate human conversations aiding  players to communicate with different personalities.",
    tags: ["Unity", "C#", "Android Studio", "Flask", "Mixamo"],
    imageUrl: PeopleAnalyzer,
    projectLink: "https://youtu.be/HM0yv-m3DS0",
    detail: ""
  },
  {
    title: "Game Mechanics + AI",
    description:
      "Unreal engine exploration project. Includes simple enemy AI behviour, gameplay mechanics like character gliding, swimming, jump height multiplyer, elevator logic.",
    tags: ["Unreal Enigine", "Blueprints", "C++"],
    imageUrl: AI1,
    projectLink: "https://youtu.be/g8KDFuvY5sw",
    detail: ""
  },
  {
    title: "Gamedoora",
    description:
      "First every studio-as-a-service. A platform to create, connect and collaborate with people across the globe to develop awe-inspiring games the open source way.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: GameDoora,
    projectLink: "http://gamedoora.com/",
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
      "A voice controlled bot aimed to ease the patients dependency on the medical staff, providing regular vital check-ups and easily available first-aid.",
    tags: ["Arduino", "Vue.js", "Tableau", "Google Dialogflow", "Tailwind"],
    imageUrl: CareOnWheels,
    projectLink: "https://devfolio.co/projects/care-on-wheels-c011",
    detail: ""
  },
  {
    title: "Blogbot",
    description:
      "A chatbot app to answer queries related to the pandemic situation, vaccine status using web-scrapping, self-learnign, along with an automatic sanitizer dispenser and temperature sensor.",
    tags: ["Flask", "Arduino", "NLTK", "ScikitLearn", "Numpy", "Newspaper3K"],
    imageUrl: BlogBot,
    projectLink: "https://devfolio.co/projects/blog-bot-3e68",
    detail: ""
  },
  {
    title: "SeaEye",
    description:
      "Deep learnign based underwater object detection model to identify and classify multiple types of underwater objects, increase awareness regarding the deteriorating underwater ecosystem and provide marine surveillance.",
    tags: ["Google Colab", "Roboflow"],
    imageUrl: SeaEye,
    projectLink: "https://ieeexplore.ieee.org/document/10112371",
    detail: "A multidisciplinary project, An underwater object detection model build to speedily and accurately identify multiple types of underwater objects along with classifying them into various categories, increase awareness regarding the deteriorating underwater ecosystem conditions and provide marine surveillanc."
  },
  {
    title: "Interview Ready",
    description:
      "An android application that tests the users ability in aptitude, logical reasoning, mathematical reasoning, data structures and algorithms through quizes to help users with their interview preperation",
    tags: ["Java", "Android Studio", "Firebase", "Lottie"],
    imageUrl: InterviewReady,
    projectLink: "https://www.irjet.net/archives/V8/i10/IRJET-V8I10208.pdf",
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
  "Verse",
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
  "Leadership",
  "Communication",
  "Problem Solving",
  "Project Management",
  "Time Management",
  "Creative",
  "Inquisitive",
  // "Open Source Contribution",
] as const;
