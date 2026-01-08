"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DetailModal from "./detail-modal";

type ProjectTileProps = {
  title: string;
  shortDescription: string;
  tags: readonly string[];
  imageUrl: any;
  videoUrl?: string;
  projectLink?: string;
  githubLink?: string;
  itchLink?: string;
  index: number;
  overview?: string; // Changed from description
  detailedDescription?: string;
};

export default function ProjectTile({
  title,
  shortDescription,
  tags,
  imageUrl,
  videoUrl,
  projectLink,
  githubLink,
  itchLink,
  index,
  overview,
  detailedDescription,
}: ProjectTileProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTileClick = () => {
    setIsModalOpen(true);
  };

  const projectData = {
    title,
    overview: overview || shortDescription,
    projectLink,
    githubLink,
    itchLink,
    videoUrl,
    tags: Array.from(tags),
    imageUrl,
    detailedDescription,
  };

  return (
    <>
      <motion.div
        className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index }}
        onClick={handleTileClick}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
            {shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs rounded-full text-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs rounded-full text-gray-700 dark:text-gray-300">
                +{tags.length - 3} more
              </span>
            )}
          </div>

          {/* Call to action */}
          <div className="mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium">
            Click to view details →
          </div>
        </div>
      </motion.div>

      {/* Detail Modal */}
      <DetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={projectData}
        type="project"
      />
    </>
  );
}
