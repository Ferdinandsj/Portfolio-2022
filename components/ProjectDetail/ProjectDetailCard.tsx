import Link from "next/link";
import Image from "next/image";
import { ProjectDetail } from "@/types";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

interface ProjectDetailCardProps {
  project: ProjectDetail;
}

export const ProjectCard: React.FC<ProjectDetailCardProps> = ({ project }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the loading time as needed
    return () => clearTimeout(timer);
  }, []);

  const src = project.indexImage;

  // Check if indexImage is a video or image
  const isVideo = (src: string) => {
    return (
      src.endsWith(".mp4") ||
      src.endsWith(".webm") ||
      src.endsWith(".ogg") ||
      src.endsWith(".mov")
    );
  };

  const renderMedia = () =>
    isVideo(project.indexImage) ? (
      <video
        height={400}
        width={400}
        className="object-cover w-full h-full"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ) : (
      <Image
        height={400}
        width={400}
        alt={project.title}
        src={src}
        priority
        style={{
          objectFit: "cover",
        }}
        onLoad={() => {
          setIsLoading(false);
          console.log("Image loaded");
        }}
      />
    );

  return (
    <div className="max-w-xs lg:max-w-[400px] flex-col space-y-2">
      {/* Link now points to the slug (based on employer name) */}
      <Link href={`/projects/${project.slug}`}>
        <div className=" lg:max-h-none relative overflow-hidden group">
          {/* Image or video wrapper with hover animation */}
          <div className="lg:w-[400px] lg:h-[400px] duration-1000 group-hover:scale-105 transform transition-transform">
            {isLoading ? (
              <Skeleton className="w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] rounded-none" />
            ) : (
              renderMedia()
            )}
          </div>
        </div>
      </Link>

      <div className="flex-col space-y-1">
        {/* Link to project details page */}
        <Link href={`/projects/${project.slug}`}>
          <div className="flex gap-x-3 text-xs uppercase text-gray-600 font-medium tracking-wide">
            <div className="flex flex-wrap mb-2">
              <span>{formatCategories(project.categories)}</span>
            </div>
            <h4 className="text-gray-300">|</h4>
            <h4>{project.employer}</h4>
            <h4 className="text-gray-300">|</h4>
            <h4>{project.date}</h4>
          </div>
        </Link>

        <Link href={`/projects/${project.slug}`}>
          <h1 className="text-wrap font-serif text-[26px]/[34px] text-gray-900 grow-0 break-normal hover:text-gray-600">
            {project.title}
          </h1>
        </Link>
      </div>
    </div>
  );
};

const formatCategories = (categories: string[]): string => {
  if (categories.length === 0) return "";
  if (categories.length === 1) return categories[0];
  if (categories.length === 2) return categories.join(" & ");

  const lastTwo = categories.slice(-2).join(" & ");
  const allButLastTwo = categories.slice(0, -2).join(", ");

  return allButLastTwo ? `${allButLastTwo}, ${lastTwo}` : lastTwo;
};

export const ProjectDetailCardMini: React.FC<ProjectDetailCardProps> = ({
  project,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the loading time as needed
    return () => clearTimeout(timer);
  }, []);

  const src = project.indexImage;

  // Check if indexImage is a video or image
  const isVideo = (src: string) => {
    return (
      src.endsWith(".mp4") ||
      src.endsWith(".webm") ||
      src.endsWith(".ogg") ||
      src.endsWith(".mov")
    );
  };

  const renderMedia = () =>
    isVideo(project.indexImage) ? (
      <video
        height={400}
        width={400}
        className="object-cover w-full h-full"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ) : (
      <Image
        height={400}
        width={400}
        alt={project.title}
        src={src}
        priority
        style={{
          objectFit: "cover",
        }}
        onLoad={() => setIsLoading(false)}
      />
    );

  return (
    <div className="flex flex-row min-w-80  max-w-96 wrap lg:flex-nowrap lg:flex-col lg:max-w-80 gap-2 ">
      {/* Link now points to the slug (based on employer name) */}
      <Link href={`/projects/${project.slug}`}>
        <div className="relative overflow-hidden group">
          {/* Image or video wrapper with hover animation */}
          <div
            className="w-40 h-40 duration-1000 group-hover:scale-105 transform transition-transform
          lg:w-80 lg:h-80"
          >
            {isLoading ? (
              <Skeleton className="w-full h-full rounded-none" />
            ) : (
              renderMedia()
            )}
          </div>
        </div>
      </Link>

      <div className="flex-col pt-4 lg:pt-0">
        {/* Link to project details page */}
        <Link href={`/projects/${project.slug}`}>
          <h1 className="text-wrap font-serif text-[20px]/[28px] lg:text-[26px]/[34px] text-gray-900 grow-0 break-normal hover:text-gray-600">
            {project.title}
          </h1>
        </Link>
      </div>
    </div>
  );
};
