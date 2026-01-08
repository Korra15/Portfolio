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
  videoUrl?: string; // Optional video URL
  projectLink?: string; // Optional project link
  githubLink?: string; // Optional GitHub repository link
  itchLink?: string; // Optional Itch.io link
  overview: string; // Main description for modal overview section
  detailedDescription?: string; // Optional detailed description
  category: ProjectCategory;
};

// Define the experience structure type
export type Experience = {
  title: string;
  company: string;
  location: string;
  description: string; // Short description shown on the card
  overview?: string; // Optional longer overview for modal (falls back to description if not provided)
  detailedDescription?: string; // Optional detailed description for expanded view
  icon: React.ReactElement;
  date: string;
  link?: string;
};