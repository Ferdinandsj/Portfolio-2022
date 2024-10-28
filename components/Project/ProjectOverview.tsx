import { FC, useEffect, useState } from "react";
import type { ProjectDetail } from "@/types";
import H3 from "../typography/h3";
import { Badge } from "../ui/badge";
import Subtle from "../typography/subtle";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import MediaDetail from "../typography/mediaDetail";

interface ProjectHeaderProps {
  project: ProjectDetail;
}

const ProjectOverview: FC<ProjectHeaderProps> = ({ project }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the loading time as needed
    return () => clearTimeout(timer);
  }, []);

  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    // Trigger the animation when the component mounts
    setAnimationClass("animate-slideUp");
  }, []);

  const videoPlayer = (
    <video
      className="w-full lg:max-h-full lg:w-auto"
      autoPlay
      loop
      muted
      playsInline
      controls={false}
      onCanPlayThrough={() => {
        setIsLoading(false);
        console.log("Video loaded");
      }}
    >
      <source src={project.overview.heroImage.image1} type="video/mp4" />
    </video>
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
    } else if (
      project.overview.heroImage.image1 &&
      project.overview.heroImage.image2
    ) {
      return (
        <div className="flex flex-row gap-5 h-[500px] overflow-hidden max-h-[500px]">
          <Image
            style={{
              objectFit: "cover",
            }}
            placeholder="empty"
            width={300}
            height={500}
            src={project.overview.heroImage.image1}
            alt="Primary Hero Image"
          />
          <Image
            style={{
              objectFit: "cover",
            }}
            placeholder="empty"
            width={1000}
            height={500}
            src={project.overview.heroImage.image2}
            alt="Secondary Hero Image"
          />
        </div>
      );
    } else {
      <Image
        className="w-full lg:max-h-[336px] lg:w-auto"
        width={834}
        height={336}
        src={project.overview.heroImage.image1}
        alt="Primary Hero Image"
        onLoad={() => setIsLoading(false)}
      />;
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
