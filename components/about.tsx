"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
   const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[60rem] text-justify leading-8 sm:mb-40 scroll-mt-28" 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-4">
       I am a Btech graduated majored in {" "} <span className="font-bold"> Computer science and engineering </span> from {" "} <span className="font-bold"> MIT ADT University </span>. Computers have always captivaed me, a screen filled with million tiny pixels, hardware understanding 1s and 0s, a device to unlock enormous possibilities. This fascination is what ignited my passion towards {" "} <span className="font-bold"> Games and Artificial intelligence </span>. How a small idea can be shaped into something so engrossing and informative, a single line of code turned into something life-changing. Playing sports namely football, karate is what helps me keep my brain active, alongwith travelling and exploring that help me connect to the world. Rejuvinating with the fresh splash of colours, I enjoy painiting and embrodiery. Blogging about my experiences and adventures is my way of giving back to the community. Escaping reality, fantasy novels are my go to!
      </p>

      <p>
        I am a game enthusiast mesmerized by the enormous potential of guidance these fantasy worlds hold. Being able to create amazing new environments, getting lost in the beauty of these virtual universes is just breathtaking. Games, movies and books teach us a lot of valuable life lessons, leveraging this invaluable wisdom and implementing it in my daily workflow is my conduct. My love and enthusiasm for games is what drives me to dive deeper in this industry and fuels my spirit to create something helpful to all mankind. Having the power to impact lives, guide them towards the good to make this world a better place is a golden opportunity that I would not like to miss.
      </p>
    </motion.section>
  );
}