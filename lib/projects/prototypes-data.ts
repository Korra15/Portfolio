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
    shortDescription: "A relentless challenger grows smarter with each return, while adaptive AI and dynamic weather evolve alongside the fight until only one survives.",
    tags: ["Unity 2022.3.38f1", "C#",  "Trello"],
    imageUrl: QueensQuard,
    videoUrl: "https://www.youtube.com/watch?v=Z--jgs82kb0",
    overview:
      "Many have tried to reach the Queen, but all have fallen before your might, and this new challenger should be no different.Easily slain, they return. Slain again, they return stronger and smarter than before. Will this new challenger overcome The Queen’s Guard and take the Queen, or will their ambitions be crushed beneath you like all that came before them?",
    detailedDescription: QueensGuardDetailed,
    category: "prototype",
  },

  {
    title: "Warming Warning",
    shortDescription: "",
    tags: ["Unity 2022.3.38f1", "C#", "Trello"],
    imageUrl: WarmingWarning,
    videoUrl: "https://youtu.be/nHZv34L6GhA",
    overview:
      "",
    detailedDescription: WarmingWarningDetailed,
    category: "prototype",
  },
];