import ProjectCard from "../components/ProjectDetail/ProjectDetailCard";
import LeftHomeSection from "../components/Index/LeftHomeSection";
import { projects } from "../data/projects"; // Import your project data
import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/Index/ExperienceCard";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectDetail } from "@/types";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import MobileHeader from "@/components/ui/mobileheader";

export default function Home() {
  return (
    <div className="flex flex-col justify-start">
      <div
        className="flex flex-col gap-10 lg:gap-24 justify-center
      lg:flex-row "
      >
        {/* Left Section: Hide on smaller screens */}
        <div
          className="top-0 h-full pt-24 block
                    lg:sticky lg:pb-40"
        >
          <LeftHomeSection />
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col gap-10 items-center md:gap-20">
          <div
            id="Selected projects"
            className="flex flex-col gap-5 justify-center w-full items-center pt-10  border-t-[1px] border-gray-300 pb-10
            md:pt-24 md:pb-20 md:w-[400px] md:gap-10 md:border-none
            lg:gap-10 lg:pb-0"
          >
            <MobileHeader>Selected projects</MobileHeader>
            <div className="flex flex-col gap-10 lg:gap-20">
              {projects
                .sort((a: ProjectDetail, b: ProjectDetail) => a.id - b.id) // Sorting by ID in ascending order
                .map((project: ProjectDetail, index: number) => (
                  <ProjectCard key={index} project={project} />
                ))}
              {/* 
            Uncomment if you want to show an "All Projects" button
            <div className="w-full grow flex items-end justify-end">
              <Button>
                All Projects <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </div> 
            */}
            </div>
          </div>

          {/* Experience Section */}
          <div
            className="flex flex-col pb-20 md:pb-20 border-t-[1px] border-gray-300 gap-8
          md:max-w-full
          
          justify-center w-full items-end pt-10 
            md:pt-0 md:w-[400px] md:gap-10
            lg:gap-10"
          >
            <MobileHeader>Experience</MobileHeader>

            <div
              id="Experience"
              className="max-w-xs flex-col pt-10 flex w-full gap-20 
              md:gap-20 md:w-[400px] md:pt-16 md:max-w-full"
            >
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
            </div>
            <div className="w-full grow flex items-start">
              <Link href="https://drive.google.com/file/d/1MhFiBrNiMgVt2VmDXghoalQOtlVfFcZ3/view?usp=sharing">
                <Button>
                  In-depth CV <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Footer (kind of) */}
            <div className="border-t-[1px] border-gray-300 pt-8 mt-40">
              <a href="https://github.com/Ferdinandsj">
                <div className="flex gap-2">
                  <GitHubLogoIcon className="h-6 w-6 text-gray-700" />
                  <p className="text-semibold text-gray-500 hover:text-gray-700 transition duration-300">
                    Portfolio made by Ferdinand with{" "}
                    <span className="text-gray-700">React</span>,{" "}
                    <span className="text-gray-700">Next.js</span>
                    {" & "}
                    <span className="text-gray-700">Tailwind</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
    </div>
  );
}
