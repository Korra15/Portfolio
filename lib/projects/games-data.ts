import Game from "@/public/Game.png";

import TimeTest from "@/public/TimeTest.png"
import PeopleAnalyzer from "@/public/PeopleAnalyzer.png"
import GameDoora from "@/public/GameDoora.png";
import { Project } from "../types";

export const gamesData: Project[] = [
  {
    title: "Ember's Oath - Graduate Capstone Project",
    shortDescription: "3rd Person Action Adventure RPG set in a fantasy world",
    tags: ["Gameplay Programmer", "UI Programmer", "Unreal Engine 5.6", "C++"],
    imageUrl: PeopleAnalyzer,
    videoUrl: "https://youtu.be/HM0yv-m3DS0",
    overview:
      "ML, RL, VR application to access the users personality and generate scenarios based on the output to simulate human conversations aiding  players to communicate with different personalities.",
    detailedDescription: `• Developed ML algorithms for real-time personality assessment
• Implemented reinforcement learning for adaptive conversation scenarios
• Created immersive VR environment using Unity and C#
• Integrated Mixamo animations for realistic character interactions
• Built Flask backend for ML model inference and data processing
• Designed personality-based scenario generation system
• Developed for Android platform with cross-platform compatibility
• Focused on improving interpersonal communication skills`,
    category: "game",
  },
  {
    title: "People Analyzer",
    shortDescription: "VR personality analyzer with AI-driven conversation simulation",
    tags: ["Unity", "C#", "Android Studio", "Flask", "Mixamo"],
    imageUrl: PeopleAnalyzer,
    videoUrl: "https://youtu.be/HM0yv-m3DS0",
    overview:
      "ML, RL, VR application to access the users personality and generate scenarios based on the output to simulate human conversations aiding  players to communicate with different personalities.",
    detailedDescription: `• Developed ML algorithms for real-time personality assessment
• Implemented reinforcement learning for adaptive conversation scenarios
• Created immersive VR environment using Unity and C#
• Integrated Mixamo animations for realistic character interactions
• Built Flask backend for ML model inference and data processing
• Designed personality-based scenario generation system
• Developed for Android platform with cross-platform compatibility
• Focused on improving interpersonal communication skills`,
    category: "game",
  },
  {
    title: "Gamedoora",
    shortDescription: "Open-source game development collaboration platform",
    tags: ["React", "Next.js", "SQL", "Tailwind"],
    imageUrl: GameDoora,
    projectLink: "http://gamedoora.com/",
    overview:
      "First ever studio-as-a-service. A platform to create, connect and collaborate with people across the globe to develop awe-inspiring games the open source way.",
    detailedDescription: `• Pioneered studio-as-a-service concept for game development
• Built scalable web platform using React and Next.js
• Implemented real-time collaboration tools for global teams
• Designed SQL database architecture for project management
• Created responsive UI/UX with Tailwind CSS
• Developed open-source framework for game development workflows
• Facilitated cross-cultural collaboration and knowledge sharing
• Focused on democratizing game development access`,
    category: "game"
  },
  {
    title: "TimeTest",
    shortDescription: "2D maze chase game built against time with treasure hunting mechanics",
    tags: ["GameMaker Studio"],
    imageUrl: TimeTest,
    videoUrl: "https://youtu.be/d7A8eDPak-0",
    overview:
      "My first game developed for game jam titans under the theme 'time'. A 2D action maze chase to satisfy the hungry protagonist by feeding it treasures running agaist time navigating bullets.",
    detailedDescription: `• Developed for Game Jam Titans with "time" theme constraint
  • Implemented real-time maze generation and navigation system
  • Created hunger-based gameplay mechanics with treasure collection
  • Designed bullet-dodging system with collision detection
  • Used GameMaker Studio for rapid prototyping and development
  • Balanced difficulty progression across multiple levels
  • Optimized performance for smooth 60fps gameplay`,
    category: "game",
  },
];