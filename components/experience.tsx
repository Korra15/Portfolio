"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/experience-data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { useInView } from "react-intersection-observer";
import DetailModal from "./detail-modal";
import type { Experience } from "@/lib/types";
import { FaExternalLinkAlt } from "react-icons/fa";


// Component for individual timeline element with its own inView state
function TimelineItem({ 
  item, 
  theme, 
  nhgLogoIcon, 
  onViewDetails 
}: { 
  item: Experience;
  theme: string;
  nhgLogoIcon: React.ReactNode;
  onViewDetails: () => void;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const hasDetailedDescription = !!item.detailedDescription;

  const handleCardClick = () => {
    if (hasDetailedDescription) {
      onViewDetails();
    } else {
      window.open(item.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <VerticalTimelineElement
      visible={inView}
      contentStyle={{
        background:
          theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight:
          theme === "light"
            ? "0.4rem solid #9ca3af"
            : "0.4rem solid rgba(255, 255, 255, 0.5)",
      }}
      date={item.date}
      icon={item.company === "Nodding Heads Games" ? nhgLogoIcon : item.icon}
      iconStyle={{
        background:
          theme === "light" ? "white" : "rgba(31, 41, 55, 0.95)",
        fontSize: "1.5rem",
      }}
    >
      <div 
        ref={ref} 
        className="relative cursor-pointer group"
        onClick={handleCardClick}
      >
        <h3 className="font-bold capitalize text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {item.title}
        </h3>
        <h4 className="font-normal"> {item.company}</h4>
        <p className="font-normal !mt-0">{item.location}</p>
        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
          {item.description}
        </p>
        
        {/* Call to action and Visit Company link */}
        <div className="mt-4 flex items-center justify-between">
          {hasDetailedDescription && (
            <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              Click to view details →
            </div>
          )}
          
          {/* Visit Company link icon - only show if no detailed description */}
          {!hasDetailedDescription && (
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-shrink-0 ml-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="text-blue-500 text-sm hover:text-blue-600 transition-colors" />
            </a>
          )}
        </div>
      </div>
    </VerticalTimelineElement>
  );
}

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.25);
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  // Create NHG logo element with current theme
  const nhgLogoIcon = (
    <img 
      src='/NHG.png' 
      alt="Logo" 
      className={`h-[3.25rem] w-[3.25rem] pl-3 pt-2 ${
        theme === "dark" ? "filter invert brightness-0 contrast-100" : ""
      }`} 
    />
  );

  const handleViewDetails = (experience: Experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  // Transform experience data for modal
  const modalData = selectedExperience ? {
    title: selectedExperience.title,
    company: selectedExperience.company,
    location: selectedExperience.location,
    overview: selectedExperience.description,
    date: selectedExperience.date,
    link: selectedExperience.link,
    detailedDescription: selectedExperience.detailedDescription,
  } : null;

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-16 sm:mb-28">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <TimelineItem 
              item={item} 
              theme={theme} 
              nhgLogoIcon={nhgLogoIcon}
              onViewDetails={() => handleViewDetails(item)}
            />
          </React.Fragment>
        ))}
      </VerticalTimeline>

      {/* Detail Modal */}
      <DetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={modalData}
        type="experience"
      />
    </section>
  );
}