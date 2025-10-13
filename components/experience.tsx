"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { useInView } from "react-intersection-observer";

import { FaExternalLinkAlt } from "react-icons/fa";

// Component for individual timeline element with its own inView state
function TimelineItem({ item, theme, nhgLogoIcon }: { item: typeof experiencesData[number], theme: string, nhgLogoIcon: React.ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
      <div ref={ref}>
        <h3 className="font-bold capitalize text-lg">{item.title}</h3>
        <h4 className="font-normal"> {item.company}</h4>
        <p className="font-normal !mt-0">{item.location}</p>
        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
          {item.description}
          <a href={item.link} target="_blank" className=""> 
            <FaExternalLinkAlt className="text-blue-500 absolute bottom-0 right-0 pr-2 pb-2 text-2xl"/> 
          </a>
        </p>
      </div>
    </VerticalTimelineElement>
  );
}

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.25);
  const { theme } = useTheme();

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

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-16 sm:mb-28">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <TimelineItem item={item} theme={theme} nhgLogoIcon={nhgLogoIcon} />
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}