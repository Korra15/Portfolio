import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

// Define the project category type
export type ProjectCategory = "game" | "prototype" | "other";

// Define the project structure type
export type Project = {
  title: string;
  shortDescription: string;
  tags: string[];
  imageUrl: any; // StaticImageData from Next.js
  videoUrl: string;
  projectLink: string;
  overview: string; // Main description for modal overview section
  detailedDescription?: string; // Optional detailed description
  category: ProjectCategory;
};