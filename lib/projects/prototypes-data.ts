import Game from "@/public/Game.png";
import AI1 from "@/public/AI1.png";
import QueensQuard from "@/public/QueensGuard.png";
import WarmingWarning from "@/public/WarmingWarning.png";
import { GameMechanicsAIDetailed, PuzzleShooterDetailed, QueensGuardDetailed, WarmingWarningDetailed } from "../details/prototypes-detailed";
import { Project } from "../types";

export const prototypesData: Project[] = [
   {
    title: "Game Mechanics + AI",
    shortDescription: "Unreal Engine showcase with AI behaviors and game mechanics",
    tags: ["Unreal Engine", "Blueprints", "C++"],
    imageUrl: AI1,
    videoUrl: "https://youtu.be/g8KDFuvY5sw",
    overview:
      "Unreal engine exploration project. Includes simple enemy AI behviour, gameplay mechanics like character gliding, swimming, jump height multiplyer, elevator logic.",
    detailedDescription: GameMechanicsAIDetailed,
    category: "prototype"
  },
  {
    title: "Puzzle Shooter",
    shortDescription: "Strategic FPS puzzle game with 2 challenging levels",
    tags: ["Unreal Engine 5", "Blueprints", "C++"],
    imageUrl: Game,
    videoUrl: "https://youtu.be/ZkF977oFx_g",
    overview:
      "A 2 level puzle based first person shooter game, filled with challenges aimed to culivate strategical, logical and critical thinking.",
    detailedDescription: PuzzleShooterDetailed,
    category: "prototype",
  },

   {
    title: "The Queens Guard",
    shortDescription: "A reverse Souls-like where an adaptive enemy returns smarter each time, forcing the boss to evolve or fall.",
    tags: ["Unity 2022.3.38f1", "C#",  "Trello"],
    imageUrl: QueensQuard,
    videoUrl: "https://www.youtube.com/watch?v=Z--jgs82kb0",
    overview:
      "Many have tried to reach the Queen, but all have fallen before your might, and this new challenger should be no different.Easily slain, they return. Slain again, they return stronger and smarter than before. Will this new challenger overcome The Queen’s Guard and take the Queen, or will their ambitions be crushed beneath you like all that came before them?",
    detailedDescription: QueensGuardDetailed,
    githubLink: "https://github.com/Korra15/The-Queens-Guard",
    category: "prototype",
  },

  {
    title: "Warming Warning",
    shortDescription: "A turn-based city survival game where players fight a losing battle against rising seas by managing people, resources, and time.",
    tags: ["Unity 2022.3.38f1", "C#", "Trello"],
    imageUrl: WarmingWarning,
    videoUrl: "https://youtu.be/nHZv34L6GhA",
    overview:
      "The island is sinking due to rising water levels. Your job as Mayor is to keep your people happy and to protect their homes on the island for as long as possible. During the night, the water rises, and parts of the island will sink. Place houses, recreation centers, and water control facitilities strategically to retain your population, increase happiness, and extend your turns for as long as possible.",
    detailedDescription: WarmingWarningDetailed,
    category: "prototype",
  },
];