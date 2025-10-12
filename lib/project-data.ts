import { Project } from "./types";
import { gamesData } from "./projects/games-data";
import { prototypesData } from "./projects/prototypes-data";
import { otherProjectsData } from "./projects/other-projects-data";



// Export individual category data for specific use cases
export { gamesData } from "./projects/games-data";
export { prototypesData } from "./projects/prototypes-data";
export { otherProjectsData } from "./projects/other-projects-data";

// Combined project data from all categories
export const projectsData: Project[] = [
  ...gamesData,
  ...prototypesData,
  ...otherProjectsData,
] as const;