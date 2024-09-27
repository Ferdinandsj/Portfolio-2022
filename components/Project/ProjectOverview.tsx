import type { FC } from "react";
import type { ProjectDetail } from "@/types";
import H3 from "../typography/h3";
import { Badge } from "../ui/badge";
import Subtle from "../typography/subtle";
import Image from "next/image";

interface ProjectHeaderProps {
  project: ProjectDetail;
}

const ProjectOverview: FC<ProjectHeaderProps> = ({
  project,
}) => {
  return (
    <div
      className="flex flex-col gap-14 mx-auto font-inter text-base leading-7 text-gray-700 tracking-normal
    sm:w-full"
    >
      <div className="flex flex-col gap-10">
        {/* Project Title */}
        <div className="flex flex-col-reverse gap-5 sm:flex-col">
          <h1 className="text-3xl font-semibold text-gray-700">
            {project.title}
          </h1>

          <div className="flex w-full gap-5">
            {/* Project Image */}
            <div>
              {/* Conditional rendering based on heroImage2 existence */}
              {project.overview.heroImage2 ? (
                <div className="flex gap-5">
                  <Image
                    className="max-w-[336px] lg:max-h-[336px] lg:w-auto"
                    width={834}
                    height={336}
                    src={
                      project.overview.heroImage
                    }
                    alt="Secondary Hero Image"
                  />

                  <Image
                    className="max-w-[468px] hidden lg:block"
                    width={834}
                    height={336}
                    src={
                      project.overview.heroImage2
                    }
                    alt="Secondary Hero Image"
                  />
                </div>
              ) : (
                <Image
                  width={834}
                  height={336}
                  src={
                    project.overview.heroImage ||
                    ""
                  }
                  alt="Secondary Hero Image"
                />
              )}
            </div>
          </div>
        </div>
        {/* Challenge text */}
        <p className="text-lg text-gray-700">
          {project.overview.challenge}
        </p>
      </div>

      {/* Two-Column Layout for Challenge & Result */}
      <div
        className="flex flex-col w-full justify-between gap-10
        
        lg:flex-row lg:gap-5 lg:flex-none"
      >
        <div className="flex flex-col gap-14 max-w-[468px]">
          {/* Responsibilities */}
          <div className="flex flex-col gap-[2px]">
            <H3>Responsibilities</H3>
            <p>
              {project.overview.responsabilitites}
            </p>
          </div>
          <div className="flex flex-col gap-[2px]">
            <H3>Result</H3>
            <p>{project.overview.result}</p>
          </div>
        </div>

        <div
          className="flex flex-col gap-8
        sm:gap-10"
        >
          {/* Project Details and tags*/}
          <div
            className="flex flex-col w-full h-full gap-10 min-w-[346px]
          lg:border-gray-300 lg:border-r-[1px] lg:items-end lg:pr-10"
          >
            <div
              className="flex justify-start gap-10
            lg:gap-10 lg:max-w-48 lg:justify-end lg:w-auto lg:flex-col lg:text-end
            "
            >
              <div>
                <Subtle>Client</Subtle>
                <div>{project.employer}</div>
              </div>
              <div>
                <Subtle>Role</Subtle>
                <p>{project.overview.role}</p>
              </div>

              <div>
                <Subtle>Timeline</Subtle>
                <p>{project.overview.timeline}</p>
              </div>

              {project.overview.crew && (
                <div>
                  <Subtle>Crew</Subtle>
                  <p className="text-gray-800">
                    {project.overview.crew}
                  </p>
                </div>
              )}
            </div>
            {/* Tags/Technologies */}
            <div
              className="flex flex-wrap justify-start gap-3 w-full
            lg:justify-end"
            >
              {project.overview.tags.map(
                (tag, index) => (
                  <Badge
                    key={index}
                    className="font-normal text-sm bg-white text-gray-700 border-[1px] border-gray-300 rounded-none px-2 py-[6px] hover:bg-white"
                  >
                    {tag}
                  </Badge>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
