import { FC, useEffect, useState } from "react";
import type { ProjectDetail } from "@/types";
import H3 from "../typography/h3";
import { Badge } from "../ui/badge";
import Subtle from "../typography/subtle";
import Image from "next/image";

interface ProjectHeaderProps {
  project: ProjectDetail;
}

const ProjectOverview: FC<ProjectHeaderProps> = ({ project }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    // Trigger the animation when the component mounts
    setAnimationClass("animate-slideUp");
  }, []);

  const videoPlayer = (
    <div className="flex flex-row gap-5 h-[500px] overflow-hidden max-h-[500px]">
      <video
        className="w-full lg:max-h-full lg:w-auto"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        <source src={project.overview.heroImage.image1} type="video/mp4" />
      </video>
    </div>
  );

  // Check if a file is a video based on its extension
  const isVideo = (src: string) => {
    return (
      src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".ogg")
    );
  };

  const renderMedia = (src: string) => {
    if (isVideo(src)) {
      return videoPlayer;
    } else if (!project.overview.heroImage.image2) {
      return (
        <div className="flex flex-row gap-5 h-[500px] overflow-hidden max-h-[500px]">
          <Image
            style={{
              objectFit: "cover",
            }}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            width={1000}
            height={500}
            src={project.overview.heroImage.image1}
            alt="Secondary Hero Image"
          />
          ;
        </div>
      );
    } else {
      return (
        <div className="flex flex-row justify-start items-start gap-5 h-[400px] max-h-[500px]">
          <div className="max-h-[400px]">
            <Image
              src={src}
              alt={project.overview.heroImage.caption || ""}
              className="w-full h-full object-contain"
              width={1000}
              height={600}
            />
          </div>
          <div className="max-h-[400px]">
            <Image
              src={project.overview.heroImage.image2}
              alt={project.overview.heroImage.caption || ""}
              className="w-full h-full object-contain object-top"
              width={1000}
              height={600}
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col gap-14 mx-auto font-inter text-base leading-7 text-gray-700 tracking-normal sm:w-full">
      <div className="flex flex-col gap-10">
        {/* Project Title */}
        <div className="flex flex-col-reverse gap-5 sm:flex-col">
          <h1
            className={`text-3xl font-semibold text-gray-700 ${animationClass}`}
          >
            {project.title}
          </h1>

          <div className="flex w-full gap-5">
            {/* Project Media (Image or Video) */}
            {renderMedia(project.overview.heroImage.image1)}
          </div>
        </div>

        {/* Challenge text */}
        <p className="text-lg text-gray-700">{project.overview.challenge}</p>
      </div>

      {/* Two-Column Layout for Challenge & Result */}
      <div className="flex flex-col w-full justify-between gap-10 lg:flex-row lg:gap-5 lg:flex-none">
        <div className="flex flex-col gap-14 max-w-[468px]">
          {/* Responsibilities */}
          <div className="flex flex-col gap-[2px]">
            <H3>Responsibilities</H3>
            <p>{project.overview.responsabilitites}</p>
          </div>
          <div className="flex flex-col gap-[2px]">
            <H3>Result</H3>
            <p>{project.overview.result}</p>
          </div>
        </div>

        <div className="flex flex-col gap-8 sm:gap-10">
          {/* Project Details and tags */}
          <div className="flex flex-col w-full h-full gap-10 min-w-[346px] lg:border-gray-300 lg:border-r-[1px] lg:items-end lg:pr-10">
            <div className="flex justify-start gap-10 lg:gap-10 lg:max-w-48 lg:justify-end lg:w-auto lg:flex-col lg:text-end">
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
                  <p className="text-gray-800">{project.overview.crew}</p>
                </div>
              )}
            </div>
            {/* Tags/Technologies */}
            <div className="flex flex-wrap justify-start gap-3 w-full lg:justify-end">
              {project.overview.tags.map((tag, index) => (
                <Badge
                  key={index}
                  className="font-normal text-sm bg-white text-gray-700 border-[1px] border-gray-300 rounded-none px-2 py-[6px] hover:bg-white"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
