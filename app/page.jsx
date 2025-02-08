"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text Section */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full-Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello, I'm <br /> <span className="text-accent">Satheesh Bollineni</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a passionate Full-Stack and Front-End Developer with expertise in React.js, Vue.js, JavaScript, and Java for building scalable, high-performance applications. With a strong foundation in Data Structures, Algorithms, and Cloud Architecture (AWS, Kubernetes, Docker), I create secure and efficient solutions that enhance user experiences. My experience in RESTful APIs, Microservices, and Agile development allows me to bridge the gap between design and functionality, delivering seamless and responsive web applications.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* Download CV Button */}
              <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                  aria-label="Download CV">
                  <a
                    href="https://drive.google.com/file/d/1l_oRZXxInFen4ywwy3r9asZo-TjPFojb/view"
                    download
                    className="flex items-center gap-2 w-full h-full">
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                {/* Social Icons */}
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo Section */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo alt="Satheesh Bollineni's Profile Picture" />
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <Stats />
    </section>
  );
};

export default Home;
