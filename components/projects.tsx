"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/project-data";
import ProjectTile from "./project-tile";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  const [activeTab, setActiveTab] = useState<"games" | "other">("games");

  // Group projects by category
  const gameProjects = projectsData.filter(project => project.category === "game");
  const otherProjects = projectsData.filter(project => project.category === "other");

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-24">
      <SectionHeading>Projects</SectionHeading>
      
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 p-1 flex gap-2">
          <button
            onClick={() => setActiveTab("games")}
            className={`relative flex items-center justify-center px-6 py-3 text-[0.9rem] font-medium transition ${
              activeTab === "games" 
                ? "text-gray-950 dark:text-gray-200" 
                : "text-gray-500 hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300"
            }`}
          >
            Games
            {activeTab === "games" && (
              <motion.span
                className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                layoutId="activeProjectTab"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              ></motion.span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("other")}
            className={`relative flex items-center justify-center px-6 py-3 text-[0.9rem] font-medium transition ${
              activeTab === "other" 
                ? "text-gray-950 dark:text-gray-200" 
                : "text-gray-500 hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300"
            }`}
          >
            Other
            {activeTab === "other" && (
              <motion.span
                className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                layoutId="activeProjectTab"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              ></motion.span>
            )}
          </button>
        </div>
      </div>

      {/* Projects Content */}
      <div className="px-8 sm:px-16 lg:px-24 xl:px-32">
        {activeTab === "games" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {gameProjects.map((project, index) => (
              <ProjectTile
                key={index}
                title={project.title}
                shortDescription={project.shortDescription}
                tags={project.tags}
                imageUrl={project.imageUrl}
                videoUrl={project.videoUrl}
                projectLink={project.projectLink}
                index={index}
              />
            ))}
          </div>
        )}
        
        {activeTab === "other" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {otherProjects.map((project, index) => (
              <ProjectTile
                key={index}
                title={project.title}
                shortDescription={project.shortDescription}
                tags={project.tags}
                imageUrl={project.imageUrl}
                videoUrl={project.videoUrl}
                projectLink={project.projectLink}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}