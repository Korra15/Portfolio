"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

import { FaTrophy } from "react-icons/fa";


export default function Triumphs() {
    const { ref } = useSectionInView("Triumphs");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[60rem] text-justify leading-8 sm:mb-40 scroll-mt-28" 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="triumphs"
    >
      <SectionHeading>My Triumphs</SectionHeading>
      <ul className="list-image-none">
        <li> <FaTrophy className="inline mr-2"/> 5 cups chopped Porcini mushrooms</li>
        <li> <FaTrophy className="inline mr-2"/> 5 cups chopped Porcini mushrooms</li>
        <li> <FaTrophy className="inline mr-2"/> 5 cups chopped Porcini mushrooms</li>
      </ul>

    </motion.section>
  )
}