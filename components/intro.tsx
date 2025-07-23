'use client';

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaBlogger, FaGamepad  } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Typewriter from 'typewriter-effect';


export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();


  return (
    
    <section 
      ref={ref} 
      id="home" 
      className='mb-16 max-w-[80rem] sm:mb-0 scroll-mt-[100rem]' >
      
      <div className='flex items-center justify-center'>
        <div className='relative'>
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image src='/TT.jpg' alt='Ayushi Parikh'
              width='192' height='192' quality='95' priority={true} 
              className='h-36 w-36 object-cover border-[0.35rem] border-white shadow-xl rounded-full'/> 
              {/* rounded-full */}
          </motion.div>

        </div>
      </div>

      <motion.h1
        className="mb-7 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl ml-14 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-medium">Hello, I am Ayushi Parikh <br></br>
        </span>
        {/* A passionate{" "}  */}
        <span className="font-bold ">
          <Typewriter 
            options={{
                strings: [' Game Programmer ', ' Game Designer ', ' Developer', ' Blogger', " Adventurer", " Sport Enthusiast"],
                autoStart: true,
                loop: true,
                delay: 45,
                deleteSpeed: 45,
                
        }} 
        /> </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
          <a
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-[1.045] hover:scale-[1.045] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 hover:bg-gray-950 "
            href="/AyushiParikh_Resume.pdf"
            download
          >
            Download Resume{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/ayushi-parikh/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/Korra15"
            target="_blank"
          >
            <FaGithubSquare />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://korra15.itch.io/"
            target="_blank"
          >
            <FaGamepad  />
          </a>
          
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://the-way-to-wisdom.blogspot.com/"
            target="_blank"
          >
            <FaBlogger  />
          </a>

        </div>

        <p className='items-center justify-center px-4 text-xl font-medium mt-[1.2rem] ml-[1.9rem] sm:flex-row'> Connect with me <GoMail className='inline'/>  <a className='underline' href='mailto:mailayushi15@gmail.com'> mailayushi15@gmail.com</a></p>

      </motion.div>
    </section>
  )
}
