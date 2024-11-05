import React, { FC } from "react";
import H2 from "../typography/h2";
import H3 from "../typography/h3";
import Link from "next/link";
import { ArticleSection } from "@/types";
import Image from "next/image";
import MediaCaption from "../typography/mediaDetail";

interface ArticleSectionProps {
  section: ArticleSection;
}

const links: { [key: string]: string } = {
  Byks: "https://byks.io/",
  Hjernelæring: "https://www.hjernelaering.no/",
};

const replaceTextWithLinks = (text: string) => {
  const linkedWords = new Set<string>();

  return text.split(" ").map((word, index) => {
    if (links[word] && !linkedWords.has(word)) {
      linkedWords.add(word);
      return (
        <React.Fragment key={index}>
          <Link
            className="underline-offset-auto bg-green-200"
            href={links[word]}
          >
            {word}
          </Link>{" "}
        </React.Fragment>
      );
    }
    return <React.Fragment key={index}>{word} </React.Fragment>;
  });
};

const isVideo = (src?: string) => {
  return (
    src?.endsWith(".mp4") || src?.endsWith(".webm") || src?.endsWith(".ogg")
  );
};

const textSizeClass = {
  small: "max-w-[346px]",
  wide: "max-w-[468px]",
  full: "w-full",
};

const ProjectProcess: FC<ArticleSectionProps> = ({ section }) => {
  const renderMedia = () => {
    if (!section.src) return null;

    const mediaElement = isVideo(section.src) ? (
      <div className={`w-full h-full overflow-hidden ${section.mediaRounded}`}>
        <video
          className="w-full h-full border shadow-inner"
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
    ) : (
      <div className="w-full h-full">
        <Image
          src={section.src}
          alt={section.alt || ""}
          className="w-full h-full object-cover"
          width={1000}
          height={600}
        />
      </div>
    );

    return (
      <MediaCaption
        media={mediaElement}
        caption={section.caption}
        sourceName={section.sourceName || ""}
        link={section.src}
      />
    );
  };

  const renderHeading = () => (
    <>
      {section.h2title && <H2 className="mb-2 w-full">{section.h2title}</H2>}
      {section.h3title && <H3 className="mb-2">{section.h3title}</H3>}
    </>
  );

  switch (section.type) {
    case "image-left-text-right":
    case "video-left-text-right":
      return (
        <div
          className={`flex flex-col gap-5 items-center ${section.mediaRounded} sm:flex-row`}
        >
          {renderMedia()}
          <div
            className={`flex flex-col gap-0 ${textSizeClass[section.textSize]} text-gray-700`}
          >
            {renderHeading()}
            <p>{section.text}</p>
          </div>
        </div>
      );

    case "text-left-image-right":
    case "text-left-video-right":
      return (
        <div className="flex flex-col-reverse gap-5 sm:flex-row">
          <div
            className={`flex flex-col gap-0 ${textSizeClass[section.textSize]} text-gray-700`}
          >
            {renderHeading()}
            <p>{section.text}</p>
          </div>
          {renderMedia()}
        </div>
      );

    case "full-media":
      return (
        <div
          className={`flex flex-col items-start w-full ${section.mediaRounded} gap-5`}
        >
          {renderHeading()}
          {renderMedia()}
          {section.text && (
            <div
              className={`flex flex-col gap-0 ${textSizeClass[section.textSize]} text-gray-700`}
            >
              <p>{section.text}</p>
            </div>
          )}
        </div>
      );

    case "full-img-full-text":
      return (
        <div className="flex flex-col items-center w-full gap-4">
          <div className={`flex flex-col gap-0 ${textSizeClass.full}`}>
            {renderHeading()}
          </div>
          {renderMedia()}
          <div className={`flex flex-col gap-0 ${textSizeClass.full}`}>
            <p className="text-lg text-gray-700">
              {replaceTextWithLinks(section.text || "")}
            </p>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default ProjectProcess;
