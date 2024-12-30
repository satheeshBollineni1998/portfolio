"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Black Stone",
    description:
      "I have worked in Blackstone project as a front-end developer, integrating APIs, creating portfolios for customers, and designing and developing web pages.",
    stack: [
      { name: "Html5" }, 
      { name: "Css3" }, 
      { name: "React.js" },
      { name: "JavaScript" },
      {name:"redux.js"}
    ],
    image: "/assets/work/Bs1.png",
    live: "https://www.blackstone.com/",
    github: "https://github.com/satheeshBollineni1998?tab=repositories",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Xnapp Sales",
    description:
      "I have worked as a full stack developer,Integrating API's in both front end and backend, Updating the product data based on promotions and integrated the key features like order quantity based on the size",
    stack: [
      { name: "Html5" },
      { name: "Css3" },
      { name: "Bootstrap" },
      { name: "JavaScript" },
      { name: "Vue.js" },
      { name: "Node.js" },
    ],
    image: "/assets/work/xnappsales.png", // Replace with a valid image
    live: "https://www.vxceed.com/",
    github: "https://github.com/satheeshBollineni1998?tab=repositories",
  },
  {
    num: "03",
    category: "Game Programming",
    title: "Shoot the targets",
    description:
      "In the Game programming course i have developed some 3D games and deployed in the itch.io using unity and C# programming ",
    stack: [
      { name: "C#" },
      { name: "Unity" }
    ],
    image: "/assets/work/game.png", // Replace with a valid image
    live: "https://satheesh.itch.io/shoot-the-targets",
    github: "https://itch.io/game/edit/",
  },
  {
    num: "04",
    category: "Mobile Web development",
    title: "Smart Eats Nutrition Tracker",
    description:
      "In the Android web development couse i have developed an app name Nutrition tracker to keep track of calories from food  ",
    stack: [
      { name: "kotlin" },
      { name: "javascipt" },
      {name: "xml"}
    ],
    image: "/assets/work/smarteats.png", // Replace with a valid image
    live: "https://github.com/satheeshBollineni1998/CS639final",
    github: "https://github.com/satheeshBollineni1998/CS639final",
  },
  {
    num: "05",
    category: "Final Proiect",
    title: "DestinEase",
    description:
      "In the Final project we build an website named DestinEase which uses Machine learning algorithms to find the desired locations based on the user preferences ",
    stack: [
      { name: "HTML" },
      { name: "CSS3" },
      {name: "Javascript"},
      {name: "React.js"},
      {name:"Node.js"}
    ],
    image: "/assets/work/destinease.png", // Replace with a valid image
    live: "https://github.com/htmw/2024F-Visionary-Techs/wiki",
    github: "https://github.com/htmw/2024F-Visionary-Techs",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title} 
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index!==project.stack.length-1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live ? (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : null}
                {project.github ? (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        alt={`${project.title} Image`}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
