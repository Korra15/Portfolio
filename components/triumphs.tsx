"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


import { FaTrophy } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { IoLanguageSharp } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa6";
import { BiSolidGame } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";





export default function Triumphs() {
    const { ref } = useSectionInView("Triumphs",0.25);

  return (
    <motion.section
      ref={ref}
      className="mb-16 max-w-[60rem] text-justify leading-8 sm:mb-28 scroll-mt-28" 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="triumphs"
    >
      <SectionHeading>Triumphs</SectionHeading>

      <h2 className="text-2xl font-[600] capitalize text-left mt-4 ml-1"> Game Design and Level Design :</h2>
      <ul className="list-image-none list-outside mr-2 ml-5">
        <li> <BiSolidGame className="inline"/> Conducting research on a survey-driven evaluation method that applies the MDA framework and design thinking to assess early design iterations without heavy prototyping. </li>
        <li> <BiSolidGame className="inline"/>The following projects explore level design across multiple genres, focusing on layout, pacing, environment storytelling and player flow. 
          <ul className="list-disc mr-2 ml-16 list-outside mb-1">
            <li> Designed an RPG campaign for the turn based game "The Battle for Wesnoth". <a href="https://www.youtube.com/playlist?list=PLO3tVIkjD4ZLSQZWCcXnEjLNIj-OJbELi" className="underline text-blue-500" target="_blank"> Here is the link to the campaign </a> </li>
            <li> Designed an narrative driven FPS experience using Unreal Editor for Fortnite (UEFN). <a href="https://youtu.be/7Q57CgXvQ24" className="underline text-blue-500" target="_blank"> Here is the link to the level </a>
              <ul className="list-disc mr-2 ml-16 list-outside mb-1">
                <li> This level uses environmental storytelling to guide the player and convey the game’s narrative.</li>
              </ul> 
            </li>
            <li> Designed a puzzle level in Portal using it's level editor. <a href="https://youtu.be/Lt5f-Zu8HHo" className="underline text-blue-500" target="_blank"> Here is the link to the level </a> 
              <ul className="list-disc mr-2 ml-16 list-outside mb-1">
                  <li>The level is divided into three parts:
                    <ul className="list-disc mr-2 ml-16 list-outside mb-1">
                      <li>Part 1: Introduces core mechanics.</li>
                      <li>Part 2: Adds a second mechanic while reinforcing the first.</li>
                      <li>Part 3: Final challenge combining all learned skills.</li>
                    </ul>
                </li>
              </ul>
            </li>
            <li> Designed a 2D platformer level for "BattleBlock Theatre". <a href="https://www.youtube.com/playlist?list=PLO3tVIkjD4ZKn8qOT6g6nrS0JhHPGhnyT" className="underline text-blue-500" target="_blank"> Here is the link to the level </a>
              <ul className="list-disc mr-2 ml-16 list-outside mb-1">
                <li> A level where you have to race against time to collect all strawberries and one pie. </li>
                <li> The more you explore the more you are rewarded. </li>
              </ul>
            </li>
          </ul> 
        </li>
      </ul>

      <h2 className="text-2xl font-[600] capitalize text-left mt-4 ml-1"> sports :</h2>
      <ul className="list-image-none list-outside mr-2 ml-5">
        <li> <FaTrophy className="inline"/> Overjoyed to receive a silver medal for archery at the intercollegiate championship held at MIT ADT university.</li>
        <li> <FaTrophy className="inline"/> Feeling elated to receive a gold medal for winning the intercollegiate football(soccer) championship held at MIT ADT university.</li>
        <li> <FaTrophy className="inline"/> Proud to be training in Shito-ryu Karate as a sr. blue belt.</li>

      </ul>

      <h2 className="text-2xl font-[600] capitalize text-left mt-4 ml-1"> publications :</h2>
      <ul className="list-image-none list-outside mr-2 ml-5">
        <li> <IoNewspaper className="inline"/> Published a paper <a href="https://ieeexplore.ieee.org/document/10112371" className="underline text-blue-500" target="_blank"> Exploration of Deep Learning Based Underwater Image Processing Techniques </a> under Conference on Computing for Sustainable Global Development (INDIACom23). </li>
        <li> <IoNewspaper className="inline"/> Published a research paper for our project <a href="https://ieeexplore.ieee.org/document/10037307" className="underline text-blue-500" target="_blank"> People Analyzer</a> in International Conference on Data, Decision and System (ICDDS22). We have also filled an Indian Patent for the same.</li>
        <li> <IoNewspaper className="inline"/> Published a paper named <a href="https://www.irjet.net/archives/V8/i10/IRJET-V8I10208.pdf" className="underline text-blue-500" target="_blank"> Interview Ready: Quiz Application for Aptitude</a> in International Research Journal of Engineering and Technology. </li>
        <li> <IoNewspaper className="inline"/> Published a provisional patent name "Project 2D blueprints into real world 3D plans using Hologram Home".</li>
      </ul>

      <h2 className="text-2xl font-[600] capitalize text-left mt-4 ml-1"> Contributions & Competitions :</h2>
      <ul className="list-image-none list-outside mr-2 ml-5">
        <li> <FaGitAlt className="inline"/> Pround contributor in <a href="https://github.com/gamedoora" className="underline text-blue-500" target="_blank"> Gamedoora </a> an open source studio-as-a-service platform, revolutionizing the gaming industry.  </li>
        <li> <FaGitAlt className="inline"/> Cheerful to receive <span className="font-semibold"> Best All Girls Team </span>award for our project {" "} <a href="https://devfolio.co/projects/care-on-wheels-c011" className="underline text-blue-500" target="_blank">"Care On Wheels", Anytime Anywhere Healthcare</a> in Codebreak 3.0 hackathon. </li>
        <li> <FaGitAlt className="inline"/> Delighted to receive the <span className="font-semibold"> IEEE Student Branch Team </span> award for our project {" "}<a href="https://devfolio.co/projects/blog-bot-3e68" className="underline text-blue-500" target="_blank">"BlogBot", a complete corona virus kit</a> in Codebreak 2.0. </li>
        <li> <FaGitAlt className="inline"/> Participated in Google coding competitions Hash Code and Kiskstart.</li>
        <li> <FaGitAlt className="inline"/> Contributed in multiple open source projects under various hackathons.</li>
      </ul>
      
      <h2 className="text-2xl font-[600] capitalize text-left mt-5 ml-1 mb-1"> Clubs & Events :</h2>
      <ul className="list-image-none list-outside mr-2 ml-5">

        <li> <FaUniversity className="inline"/> ACES Technical Team Lead, an autonomous student body under the CSE dept. of MIT School of Engineering, MIT ADT University for 2 consecutive years.

          <ul className="list-disc mr-2 ml-16 list-outside mb-1">
            <li> My team and I thoughtfully designed and executed, "Quest for Justice", a virtual team treasure hunt an ingenious event to eleavate student's spirit duing the lockdown.</li>
            <li> Organised multiple workshops aiding students build theier person holistically. </li>
            <li> Established a platform of meet-ups/ common ground where current students can interact & gain guidance from thier seniors.</li>
          </ul>  
        </li>

        <li> <FaUniversity className="inline"/> Contributed as a social media team member for IEEE Women in Engineering MIT-ADT and am enthusiastically volunteering to coordinate and manage various events organized by the group. </li>
        <li> <FaUniversity className="inline" /> President of the Gamedevelopment and Metaverse community in the university.
        </li>

      </ul>

      <h2 className="text-2xl font-[600] capitalize text-left mt-4 ml-1"> Courses & Workshops :</h2>
      <ul className="list-image-none list-outside mr-2 ml-5">
        <li> <FaCode className="inline"/> Participated in a one week national online workshop - CODETHON on "High Performance Computing" organized by MIT ADT University in association with NVIDIA Deep Learning Institute.</li>
        <li> <FaCode className="inline"/> Was a part of 30 Days of Google Cloud 2021. </li>
        <li> <FaCode className="inline"/> Completed the AWS Acadmy Cloud Foundation and Machine Learnign Foundation courses.</li>
        <li> <FaCode className="inline"/> Completed the Python Specialization offered by The University of Michigan trough coursera.</li>
        <li> <FaCode className="inline"/> Completed the Complete Vue Mastery offered by Zero to  Mastery trough udemy.</li>
      </ul>

      <h2 className="text-2xl font-[600] capitalize text-left mt-4 ml-1"> languages :</h2>
      <ul className="list-image-none list-outside mr-2 ml-5">
        <li> <IoLanguageSharp className="inline"/> Winner of Japaneses speaking competition organised by the School of Holistic Development, MIT ADT University. </li>
      </ul>

      <h2 className="text-2xl font-[600] capitalize text-left mt-4 ml-1"> others :</h2>
      <ul className="list-image-none list-outside mr-2 ml-5">
        <li> <FaAngleDoubleRight className="inline"/> Attended the Indian Game Developer Conference (IGDC) 2023 as a part of team Nodding Heads Games. </li>
        <li> <FaAngleDoubleRight className="inline"/> Participated in the YUVA: Prime Minister’s Scheme for Mentoring Young Authors. </li>
        <li> <FaAngleDoubleRight className="inline"/> Volunteered in the organizing committee of multiple college events and fests. </li>
      </ul>


    </motion.section>
  )
}