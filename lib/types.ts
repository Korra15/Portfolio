import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

// Define the project category type
export type ProjectCategory = "game" | "prototype" | "other";

// Define the project structure type
export type Project = {
  title: string;
  description: string;
  shortDescription: string;
  tags: string[];
  imageUrl: any; // StaticImageData from Next.js
  videoUrl: string;
  projectLink: string;
  detail: string;
  category: ProjectCategory;
};