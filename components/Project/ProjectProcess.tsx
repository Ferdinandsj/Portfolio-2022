import React, { FC } from "react";
import H2 from "../typography/h2";
import H3 from "../typography/h3";
import { ArticleSection } from "@/types";
import Image from "next/image";

interface ArticleSectionProps {
  section: ArticleSection;
}

const ProjectProcess: FC<ArticleSectionProps> = ({ section }) => {
  switch (section.type) {
    case "image-left-text-right":
      return (
        <div className="flex flex-col gap-0">
          <RenderHeading h2title={section.h2title} h3title={section.h3title} />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_1fr] items-center">
            <Image
              src={section.src || "/fallback-image.jpg"}
              alt={section.alt || ""}
              className="w-full h-auto"
            />
            <p className="text-gray-700">{section.text}</p>
          </div>
        </div>
      );

    case "text-left-video-right":
      return (
        <div
          className="flex flex-col-reverse md:flex-row gap-5 items-center
        sm:flex-col"
        >
          <div className="md:w-1/2 ">
            <RenderHeading
              h2title={section.h2title}
              h3title={section.h3title}
            />
            <p className="text-gray-700">{section.text}</p>
          </div>
          <div className="w-auto md:w-1/2">
            <video
              className="w-full h-auto border shadow-inner b-radius rounded-md"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            >
              <source src={section.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );

    case "video-left-text-right":
      return (
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <div className="w-full md:w-1/2">
            <video
              className="w-full h-auto border shadow-inner b-radius rounded-md"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            >
              <source src={section.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="md:w-1/2">
            <RenderHeading
              h2title={section.h2title}
              h3title={section.h3title}
            />
            <p className="text-gray-700">{section.text}</p>
          </div>
        </div>
      );

    case "full-video":
      return (
        <div className="flex flex-col items-center w-full gap-5">
          <div className="w-full">
            <RenderHeading
              h2title={section.h2title}
              h3title={section.h3title}
            />
          </div>
          <video
            className="w-full h-auto border shadow-inner b-radius rounded-md"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          >
            <source src={section.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );

    default:
      return null;
  }
};

export default ProjectProcess;

interface HeadingProps {
  h2title?: string; // Optional string value for H2 title
  h3title?: string; // Optional string value for H3 title
}

const RenderHeading: React.FC<HeadingProps> = ({ h2title, h3title }) => {
  if (h2title) {
    return <H2 className="mb-2">{h2title}</H2>; // If there's an h2title, render the H2 tag
  }

  if (h3title) {
    return <H3 className="mb-2">{h3title}</H3>; // If there's an h3title, render the H3 tag
  }

  return null; // If neither h2title nor h3title exist, render nothing
};

/* 
const renderArticleSection = (section: ArticleSection, index: number) => {
  switch (section.type) {
    case "text":
      return (
        <p key={index} className="mb-4">
          {section.content}
        </p>
      );
    case "image":
      return (
        <Image
          key={index}
          src={section.content}
          alt={section.alt || ""}
          width={600}
          height={400}
          className="w-full mb-4"
        />
      );
    case "video":
      return (
        <video key={index} controls className="w-full mb-4">
          <source src={section.content} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    default:
      return null;
  }
}; */
