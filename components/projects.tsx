"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/project-data";
import ProjectTile from "./project-tile";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCategory } from "@/lib/types";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);
  const [activeTab, setActiveTab] = useState<ProjectCategory>("game");
  const [isLoaded, setIsLoaded] = useState(false);

  // Add loading delay to prevent flash of content
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300); // Small delay to ensure smooth loading

    return () => clearTimeout(timer);
  }, []);

  // Group projects by category with type safety
  const gameProjects = projectsData.filter(
    (project) => project.category === "game"
  );
  const prototypeProjects = projectsData.filter(
    (project) => project.category === "prototype"
  );
  const otherProjects = projectsData.filter(
    (project) => project.category === "other"
  );

  return (
    <section
      ref={ref}
      id="projects"
      className={`scroll-mt-28 mb-24 project-section ${
        isLoaded ? "loaded" : ""
      }`}
    >
      <SectionHeading>Projects</SectionHeading>

      {/* Tab Navigation with animation */}
      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 p-1 flex gap-2">
          <motion.button
            onClick={() => setActiveTab("game")}
            className={`relative flex items-center justify-center px-6 py-3 text-[0.9rem] font-medium transition ${
              activeTab === "game"
                ? "text-gray-950 dark:text-gray-200"
                : "text-gray-500 hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Games
            {activeTab === "game" && (
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
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("prototype")}
            className={`relative flex items-center justify-center px-6 py-3 text-[0.9rem] font-medium transition ${
              activeTab === "prototype"
                ? "text-gray-950 dark:text-gray-200"
                : "text-gray-500 hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Prototypes
            {activeTab === "prototype" && (
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
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("other")}
            className={`relative flex items-center justify-center px-6 py-3 text-[0.9rem] font-medium transition ${
              activeTab === "other"
                ? "text-gray-950 dark:text-gray-200"
                : "text-gray-500 hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
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
          </motion.button>
        </div>
      </motion.div>

      {/* Projects Content with AnimatePresence for smooth transitions */}
      <div className="px-8 sm:px-16 lg:px-24 xl:px-32">
        {isLoaded && (
          <AnimatePresence mode="wait">
            {activeTab === "game" && (
              <motion.div
                key="games"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {gameProjects.map((project, index) => (
                  <ProjectTile
                    key={index}
                    title={project.title}
                    shortDescription={project.shortDescription}
                    tags={project.tags}
                    imageUrl={project.imageUrl}
                    videoUrl={project.videoUrl}
                    projectLink={project.projectLink}
                    githubLink={project.githubLink}
                    index={index}
                    overview={project.overview}
                    detailedDescription={project.detailedDescription}
                  />
                ))}
              </motion.div>
            )}

            {activeTab === "prototype" && (
              <motion.div
                key="prototypes"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {prototypeProjects.map((project, index) => (
                  <ProjectTile
                    key={index}
                    title={project.title}
                    shortDescription={project.shortDescription}
                    tags={project.tags}
                    imageUrl={project.imageUrl}
                    videoUrl={project.videoUrl}
                    projectLink={project.projectLink}
                    githubLink={project.githubLink}
                    index={index}
                    overview={project.overview}
                    detailedDescription={project.detailedDescription}
                  />
                ))}
              </motion.div>
            )}

            {activeTab === "other" && (
              <motion.div
                key="other"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {otherProjects.map((project, index) => (
                  <ProjectTile
                    key={index}
                    title={project.title}
                    shortDescription={project.shortDescription}
                    tags={project.tags}
                    imageUrl={project.imageUrl}
                    videoUrl={project.videoUrl}
                    projectLink={project.projectLink}
                    githubLink={project.githubLink}
                    index={index}
                    overview={project.overview}
                    detailedDescription={project.detailedDescription}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Loading placeholder */}
        {!isLoaded && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-gray-400 dark:text-gray-600">
              Loading projects...
            </div>
          </div>
        )}
      </div>
    </section>
  );
}