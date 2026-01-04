import Game from "@/public/Game.png";
import AI1 from "@/public/AI1.png";
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
    detailedDescription: `• Implemented comprehensive AI behavior systems for enemy characters
• Developed fluid character movement including gliding and swimming
• Created dynamic jump height multiplier based on context
• Designed elevator systems with physics-based interactions
• Combined Blueprint visual scripting with C++ for optimal performance
• Explored advanced Unreal Engine features and capabilities
• Focused on creating engaging and responsive gameplay mechanics`,
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
    detailedDescription: `• Designed unique puzzle-shooting mechanics combining FPS with strategy
• Implemented complex level design requiring logical thinking
• Created weapon systems with puzzle-solving elements
• Developed AI enemies with strategic behavior patterns
• Used Unreal Engine 5's Blueprint system for rapid iteration
• Integrated C++ for performance-critical gameplay systems
• Focused on cultivating strategic and critical thinking skills`,
    category: "prototype",
  },
  {
    title: "Warming Warning",
    shortDescription: "",
    tags: [],
    imageUrl: Game,
    videoUrl: "https://youtu.be/nHZv34L6GhA",
    overview:
      "A 2 level puzle based first person shooter game, filled with challenges aimed to culivate strategical, logical and critical thinking.",
    category: "prototype",
  },

  {
    title: "The Queens Guard",
    shortDescription: "",
    tags: [],
    imageUrl: Game,
    videoUrl: "https://www.youtube.com/watch?v=Z--jgs82kb0",
    overview:
      "A 2 level puzle based first person shooter game, filled with challenges aimed to culivate strategical, logical and critical thinking.",
    category: "prototype",
  },


];