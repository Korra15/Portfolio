import Game from "@/public/Game.png";

import TimeTest from "@/public/TimeTest.png"
import PeopleAnalyzer from "@/public/PeopleAnalyzer.png"
import GameDoora from "@/public/GameDoora.png";
import EmbersOath from "@/public/EmbersOath.png";
import echoes from "@/public/echoes.png";
import DoomScroller from "@/public/DoomScroller.png";
import { EmbersOathDetailed, PeopleAnalyzerDetailed, DoomScrollerDetailed, GamedooraDetailed, TimeTestDetailed, echoesDetailed } from "../details/games-detailed";
import { Project } from "../types";

export const gamesData: Project[] = [
  {
    title: "Ember's Oath - Graduate Capstone Project",
    shortDescription: "3rd Person Action Adventure RPG set in a fantasy world",
    tags: ["Gameplay Programmer", "UI Programmer", "Unreal Engine 5.6", "C++", "Jira"],
    imageUrl: EmbersOath,
    videoUrl: "https://youtu.be/2h7qhLl50wY",
    overview:
      "In a dark fantasy world where magic is nearly extinct, Ember, a fire mage who can transform into a phoenix, must reclaim lost knowledge and confront a tyrant determined to erase magic forever.",
    detailedDescription: EmbersOathDetailed,
    category: "game",
  },
  {
    title: "echoes",
    shortDescription: "Part of a team that explores games as reflections of our community",
    tags: ["Game Director", "Assistant Producer", "Unity", "C#"],
    imageUrl: echoes,
    projectLink: "https://www.echoes-vip.org/",
    overview:
      "It is a Virtually Integrated Project (VIP) that is about making community games that are small, personal and deeply human. They are not about scale or granduer, but about creating small meaningful moments of connection that ripple outwards.",
    detailedDescription: echoesDetailed,
    category: "game",
  },
  {
    title: "Doom Scroller",
    shortDescription: "A 2D couch co-op platformer where two robot friends try to survive an alien invasion",
    tags: ["Unity", "C#", "Jira"],
    imageUrl: DoomScroller,
    videoUrl: "https://www.youtube.com/watch?v=FNkagAr5AQU",
    itchLink: "https://korra15.itch.io/doom-scroller",
    detailedDescription: DoomScrollerDetailed,
    overview:
      "A 2D platformer co-op game where you’re playing as two robot friends at a space station shipping company that suddenly gets overrun by aliens. One player plays as a small robot who platforms around, while another plays as a claw robot who can lift platforms. Solve rapid puzzles and help each other to try and survive from the impending doom as you can!",
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
    detailedDescription: PeopleAnalyzerDetailed,
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
    detailedDescription: GamedooraDetailed,
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
    detailedDescription: TimeTestDetailed,
    category: "game",
  },
];