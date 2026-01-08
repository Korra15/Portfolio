"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { useModalContext } from "@/context/modal-context";

type DetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    company?: string; // For experiences
    location?: string; // For experiences
    overview: string; // Changed from description
    date?: string; // For experiences
    link?: string; // For experiences
    projectLink?: string; // For projects - optional
    githubLink?: string; // For projects - optional
    itchLink?: string; // For projects - optional
    videoUrl?: string; // For projects - optional
    tags?: string[]; // For projects
    imageUrl?: any; // For projects
    detailedDescription?: string;
  } | null;
  type: "project" | "experience";
};

export default function DetailModal({ isOpen, onClose, data, type }: DetailModalProps) {
  const { setIsModalOpen } = useModalContext();

  // Update global modal state when this modal opens/closes
  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen, setIsModalOpen]);

  if (!data) return null;

  const isProject = type === "project";
  const linkUrl = isProject ? data.projectLink : data.link;

  // Function to convert YouTube URL to embeddable format
  const getEmbedUrl = (url: string) => {
    if (!url) return null;
    
    // Handle different YouTube URL formats
    const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(youtubeRegex);
    
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    
    return null;
  };

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative border border-gray-200 dark:border-gray-700"
            >
              {/* Close Button - Top Right */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <IoClose className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>

              {/* Content */}
              <div className="p-8">
                {/* Title and Basic Info */}
                <div className="mb-8 pt-4">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{data.title}</h2>
                  
                  {isProject ? (
                    <>
                      {data.tags && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {data.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{data.company}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">{data.location}</p>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">{data.date}</p>
                    </div>
                  )}
                </div>

                {/* Project Image or Video */}
                {isProject && (
                  <div className="mb-8">
                    {data.videoUrl && getEmbedUrl(data.videoUrl) ? (
                      <div className="relative w-full h-64 md:h-80 lg:h-96">
                        <iframe
                          src={getEmbedUrl(data.videoUrl)!}
                          title={`${data.title} Demo Video`}
                          className="w-full h-full rounded-lg shadow-lg"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : data.imageUrl ? (
                      <Image
                        src={data.imageUrl}
                        alt={data.title}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                      />
                    ) : null}
                  </div>
                )}

                {/* Overview */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Overview
                  </h4>
                  <div 
                    className="modal-content text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: data.overview }}
                  />
                </div>

                {/* Detailed Description */}
                {data.detailedDescription && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      {isProject ? "Key Features & Implementation" : "Key Responsibilities & Achievements"}
                    </h4>
                    <div 
                      className="modal-content text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: data.detailedDescription }}
                    />
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-center gap-4">
                  {/* Only show View Project button if projectLink exists for projects, or link exists for experiences */}
                  {((isProject && data.projectLink) || (!isProject && data.link)) && (
                    <a
                      href={linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    >
                      {isProject ? "View Project" : "Visit Company"}
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                  )}
                  
                  {/* GitHub link button for projects */}
                  {isProject && data.githubLink && (
                    <a
                      href={data.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
                    >
                      View on GitHub
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                  )}

                  {/* Itch link button for projects */}
                  {isProject && data.itchLink && (
                    <a
                      href={data.itchLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
                    >
                      View on Itch
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                  )}

                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}