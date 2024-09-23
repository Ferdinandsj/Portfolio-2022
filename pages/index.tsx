import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import ProjectCard from "../components/ProjectDetail/ProjectDetailCard";
import LeftHomeSection from "../components/Index/LeftHomeSection";
import { projects } from "../data/projects"; // Import your project data
import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/Index/ExperienceCard";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import AboutMe from "@/components/AboutMe";
import Link from "next/link";
import { ProjectDetail } from "@/types";

export default function Home() {
  return (
    <div className="flex flex-col justify-start">
      <div className="flex flex-col md:flex-row gap-10 md:gap-24 justify-center">
        {/* Left Section: Hide on smaller screens */}
        <div className="md:sticky top-0 h-full pt-24 md:pb-40 block">
          <LeftHomeSection />
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col gap-10 md:gap-20">
          <div
            id="Selected projects"
            className="pt-10 md:pt-24 pb-10 md:pb-20 flex w-full md:w-[400px] items-center gap-10 md:gap-20 flex-col justify-center px-4"
          >
            {projects
              .sort(
                (
                  a: ProjectDetail,
                  b: ProjectDetail
                ) => a.id - b.id
              ) // Sorting by ID in ascending order
              .map(
                (
                  project: ProjectDetail,
                  index: number
                ) => (
                  <ProjectCard
                    key={index}
                    project={project}
                  />
                )
              )}
            {/* 
            Uncomment if you want to show an "All Projects" button
            <div className="w-full grow flex items-end justify-end">
              <Button>
                All Projects <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </div> 
            */}
          </div>

          {/* Experience Section */}
          <div className="flex flex-col pb-10 md:pb-20 border-t-[1px] border-gray-300 gap-8 px-4">
            <div
              id="Experience"
              className="pt-10  flex w-full  items-center gap-20 
              md:gap-20 md:w-[400px] md:pt-16 flex-col"
            >
              {experiences.map(
                (experience, index) => (
                  <ExperienceCard
                    key={index}
                    experience={experience}
                  />
                )
              )}
            </div>
            <div className="w-full grow flex items-end justify-end">
              <Link href="https://drive.google.com/file/d/1MhFiBrNiMgVt2VmDXghoalQOtlVfFcZ3/view?usp=sharing">
                <Button>
                  In-depth CV{" "}
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="w-screen">
        <AboutMe />
      </div>
    </div>
  );
}
