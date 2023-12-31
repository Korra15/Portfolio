"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { abilityData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

// const fadeInAnimationAfter = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     delay: 5.0,
//     transition: {
//       delay: 0.05 * index,
//     },
//   }),
// };

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-16 max-w-[53rem] scroll-mt-28 text-center sm:mb-28"
    >
      <SectionHeading>skills and Abilities</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 shadow shadow-fuchsia-500 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mt-[0.5rem]">
        {abilityData.map((ability, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 shadow shadow-green-500 dark:bg-white/10 dark:text-white/80 "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {ability}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}