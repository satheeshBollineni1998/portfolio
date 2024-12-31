"use client"
import { FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs,FaVuejs,FaPython,FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";


const about={
  title:"About Me",
  description:"I am a passionate Front-End Developer with over 3 years of experience in building dynamic and user-friendly web applications. I specialize in React.js, Next.js, and cloud-based solutions and combining strong problem-solving skills with a commitment to delivering high-quality results",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Satheesh Bollineni"
    },
    {
      fieldName:"Phone",
      fieldValue:"+1(516)-914-9017"
    },
    {
      fieldName:"Experience",
      fieldValue:"4 years"
    },
    {
      fieldName:"Email",
      fieldValue:"satish9bollineni@gmail.com"
    },
   
  ]
}
const experience={
  icon:"/assets/resume/badge.svg",
  title:"My Experience",
  description:" I have over 3 years of experience as a Front-End Developer, working with clients like Unilever, Blackstone, and MicroFocus. I specialize in building dynamic web applications using React.js, Next.js, and integrating APIs seamlessly. My expertise extends to optimizing website performance, implementing scalable AWS solutions, and delivering user-focused designs.",
  items:[
    {
      company:"Vxceed Technologies",
      position:"Product Engineer",
      duration:"Jul2022 to Dec2022",
    },
    {
      company:"Ajackus",
      position:"Front-end Developer",
      duration:"Oct2021 to Jul2022",
    },
    {
      company:"Wipro Technologies",
      position:"Project Engineer",
      duration:"May-2019 to Oct-2021",
    }
  ]

}
const education={
  icon:"/assests/resume/badge.svg",
  title:"My Education",
  description:"I hold a Master’s degree in Computer Science, providing me with advanced knowledge in software development, algorithms, and problem-solving. This education has equipped me with the technical expertise required to excel in modern web development.",
  items:[
    {
      institution:"Pace University",
      degree:"Maters in Computer Science",
      duration:"jan-2023 to Dec-2024"
    },
    {
      institution:"Coding Ninjas",
      degree:"Full Stack Web Devlopement",
      duration:"Jul-2018 to April-2019"
    },
    {
      institution:"Coding Ninjas",
      degree:"Python programming",
      duration:"Jul-2021 to Dec-2021"
    },
    {
      institution:"Edureka",
      degree:"AWS Cloud Architect",
      duration:"Jul-2023 to Nov-2023"
    }
  ]

}
const skills={
  title:"My Skills",
  description:"I specialize in React.js, Next.js, and Tailwind CSS for building responsive, user-friendly interfaces. With expertise in API integration and AWS-certified cloud architecture, I create scalable, secure solutions. My problem-solving skills in Data Structures and Algorithms enhance my development capabilities.",
  skillist:[
    {
      icon:<FaHtml5/>,
      name:"html5",
    },
    {
      icon:<FaCss3/>,
      name:"css3",
    },
    {
      icon:<FaJs/>,
      name:"javascript",
    },
    {
      icon:<FaReact/>,
      name:"react.js",
    },
    {
      icon:<FaVuejs/>,
      name:"vue.js",
    },
    {
      icon:<SiNextdotjs/>,
      name:"Next.js",
    },
    {
      icon:<SiTailwindcss/>,
      name:"tailwind.css",
    },
    {
      icon:<FaNodeJs/>,
      name:"node.js",
    },
    {
      icon:<FaFigma/>,
      name:"figma",
    },
    {
      icon:<FaPython/>,
      name:"Python programming",
    },
    {
      icon:<FaAws/>,
      name:"Amazon AWS",
    },

  ]

}

import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {motion} from "framer-motion";
const Resume = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{delay:2.4,duration:0.4,ease:"easeIn"}
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">

          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full"> 
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item,index)=>
                    {
                      return<li key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-x-w[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item,index)=>
                    {
                      return<li key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-x-w[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 xl:gap-[30px">
                {skills.skillist.map((skill,index)=>
                {
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                   </li>

                })}
              </ul>

              </div>

            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index)=>
                  {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume
