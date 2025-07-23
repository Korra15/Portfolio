"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlay, FaExternalLinkAlt } from "react-icons/fa";

type ProjectTileProps = {
  title: string;
  shortDescription: string;
  tags: readonly string[];
  imageUrl: any;
  videoUrl?: string;
  projectLink?: string;
  index: number;
};

export default function ProjectTile({
  title,
  shortDescription,
  tags,
  imageUrl,
  videoUrl,
  projectLink,
  index,
}: ProjectTileProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleTileClick = () => {
    if (projectLink) {
      window.open(projectLink, '_blank');
    }
  };

  // Convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    if (!url) return "";
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}?autoplay=1&mute=1` : "";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.1 }}
      className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer"
      onClick={handleTileClick}
    >
      {/* Media Section */}
      <div className="relative h-48 overflow-hidden">
        {videoUrl && !isVideoPlaying ? (
          // YouTube thumbnail with play button
          <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div 
              className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={(e) => {
                e.stopPropagation();
                if (videoUrl) {
                  window.open(videoUrl, '_blank');
                }
              }}
            >
              <div className="bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 transition-all duration-200">
                <FaPlay className="text-gray-800 text-xl ml-1" />
              </div>
            </div>
          </div>
        ) : (
          // Regular image
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        
        {/* External link indicator */}
        {projectLink && (
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
              <FaExternalLinkAlt className="text-gray-600 dark:text-gray-300 text-sm" />
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {shortDescription}
        </p>

        {/* Skills Footer */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
              +{tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
