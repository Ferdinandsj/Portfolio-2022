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
        <div className="flex flex-col gap-0 h-auto">
          <div
            className="flex flex-col w-full gap-5 items-start
          sm:flex-row"
          >
            <Image
              className=""
              src={section.src || "/fallback-image.jpg"}
              alt={section.alt || ""}
              width={468}
              height={336}
              unoptimized={true}
            />
            <div className="flex flex-col gap-0">
              <RenderHeading
                h2title={section.h2title}
                h3title={section.h3title}
              />
              <p className="max-w-[468px] text-gray-700">{section.text}</p>
            </div>
          </div>
        </div>
      );

    case "text-left-image-right":
      return (
        <div className="flex flex-col gap-0 h-auto">
          <div
            className="flex flex-col w-full gap-5 items-center
          sm:flex-row"
          >
            <div className="flex flex-col gap-0">
              <RenderHeading
                h2title={section.h2title}
                h3title={section.h3title}
              />
              <p className="max-w-[468px] text-gray-700">{section.text}</p>
            </div>
            <Image
              className="max-w-[468px]"
              src={section.src || "/fallback-image.jpg"}
              alt={section.alt || ""}
              width={1000}
              height={1000}
              unoptimized={true}
            />
          </div>
        </div>
      );

    case "text-left-video-right":
      return (
        <div
          className="flex flex-col-reverse w-full gap-5 justify-between   
        sm:flex-col
        md:flex-row"
        >
          <div className="w-auto max-w-[346px]">
            <RenderHeading
              h2title={section.h2title}
              h3title={section.h3title}
            />
            <p className="text-gray-700">{section.text}</p>
          </div>
          <div className="w-auto m-5">
            <video
              className="w-auto h-auto max-h-[600px] border shadow-inner b-radius rounded-md"
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
          <div className="w-full ">
            <video
              className="w-full max-w-[468px] h-auto border shadow-inner b-radius rounded-md"
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
          <div className="w-auto max-w-[346px]">
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

    case "full-img-full-text":
      return (
        <div className="flex flex-col items-center w-full gap-10">
          {/* Project Image */}
          <Image
            src={section.src || ""}
            alt="Project overview"
            className="w-full h-[400px] sm:w-auto sm:h-auto object-cover"
            width={834}
            height={336}
            unoptimized={true}
          />
          <div className="flex flex-col gap-0">
            {/* Title */}
            <RenderHeading
              h2title={section.h2title}
              h3title={section.h3title}
            />

            {/* Challenge text */}
            <p className="text-lg text-gray-700">{section.text}</p>
          </div>
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
