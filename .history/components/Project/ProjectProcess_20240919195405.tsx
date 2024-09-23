import React, { FC } from "react";
import H2 from "../typography/h2";
import H3 from "../typography/h3";
import { ArticleSection } from "@/types";

interface ArticleSectionProps {
  section: ArticleSection;
  index: number; // Add index as a prop
}

const ProjectProcess: FC<ArticleSectionProps> = ({ section, index }) => {
  switch (section.type) {
    case "image-left-text-right":
      return (
        <div className="flex flex-col">
          {index === 0 ? (
            <H2 className="mb-5 h-12">{section.title}</H2>
          ) : (
            <H3 className="text-gray-700 text-xl font-semibold mb-1">
              {section.title}
            </H3>
          )}

          {/* Assuming you're using this component */}
          <div className="grid grid-cols-1 md:grid-cols-[468px_346px] items-center justify-between">
            <img src={section.src} alt={section.alt || ""} />
            <p className="text-gray-700">{section.text}</p>
          </div>
        </div>
      );

    case "text-left-video-right":
      return (
        <div className="flex gap-5  md:flex items-center">
          <div>
            {index === 0 ? (
              <H2 className="mb-5 h-12">{section.title}</H2>
            ) : (
              <H3 className="text-gray-700 text-xl font-semibold mb-1">
                {section.title}
              </H3>
            )}
            <p className="text-gray-700 md:w-[468px]">{section.text}</p>
          </div>
          <video
            className="w-[346px] h-auto max-w-lg"
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

    case "video-left-text-right":
      return (
        <div className="flex gap-5  md:flex items-center">
          <video
            className="w-[468px] h-auto max-w-lg"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          >
            <source src={section.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            {index === 0 ? (
              <H2 className="mb-5 h-12">{section.title}</H2>
            ) : (
              <H3 className="text-gray-700 text-xl font-semibold mb-1">
                {section.title}
              </H3>
            )}
            <p className="text-gray-700">{section.text}</p>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default ProjectProcess;

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
