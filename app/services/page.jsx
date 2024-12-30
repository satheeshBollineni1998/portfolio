"use client"
import {BsArrowDownRight}from "react-icons/bs";
import Link from "next/Link";

const services=[
  {
    num: "01",
    title: "Front-End Web Development",
    description:
      "Designed and developed user-friendly web interfaces using React.js, Next.js, and Bootstrap. Implemented API integrations to create seamless and responsive web pages. Focused on delivering high-quality, performance-optimized solutions with an emphasis on user experience and accessibility.",
    href: "https://github.com/satheeshBollineni1998?tab=repositories",
  },
  {
    num: "02",
    title: "Full Stack Web Development",
    description:
      "Built robust web applications by managing both front-end and back-end development. Developed and maintained RESTful APIs, integrated third-party services, and implemented secure authentication mechanisms. Leveraged technologies like Node.js, Express.js, and MongoDB to deliver scalable solutions.",
    href: "https://github.com/satheeshBollineni1998?tab=repositories",
  },
  {
    num: "03",
    title: "Software Developer",
    description:
      "Proficient in solving complex problems using Python and Java. Contributed to developing core features and optimizing the performance of high-traffic websites. Designed efficient algorithms, automated workflows, and implemented modular code structures to enhance software maintainability.",
    href: "https://github.com/satheeshBollineni1998?tab=repositories",
  },
  {
      num: "04",
      title: "Amazon AWS",
      description:
        "Designed and deployed scalable cloud-based solutions using Amazon Web Services (AWS). Implemented secure infrastructure with services like EC2, S3, and RDS, ensuring high availability and reliability. Optimized cost management and automated deployment pipelines using AWS Lambda and CloudFormation.",
      href: "https://github.com/satheeshBollineni1998?tab=repositories", // Replace with actual URL
  }
]
import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto" >
        <motion.div initial={{opacity:0}} 
        animate={{opacity:1,
        transition:{delay:2.4,duration:0.4,ease:"easeIn"}}}
        className="grid dri-cols-l md:grid-cols-2 gap-[60px]">
        {services.map((services,index)=>
        {
          return(
            <div 
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* top */}
              <div className="w-full flex justify-between item-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover trasition-all duration-500">{services.num}</div>
                <Link href={services.href} className="w-[70px] h-[70px] rounded-full
                bg-white group-hover:bg-accent transition-all duration -500 flex justify-center items-center hover:rotate-45">
                <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
                
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{services.title}</h2>
              {/* description */}
              <p className="text-white/60">{services.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          )
        })}

        </motion.div>
      </div>
    </section>
  )
}

export default Services;
