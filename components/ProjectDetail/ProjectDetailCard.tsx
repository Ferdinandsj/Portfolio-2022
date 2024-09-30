import Link from "next/link";
import Image from "next/image";
import { ProjectDetail } from "@/types";
import { Skeleton } from "../ui/skeleton";

interface ProjectDetailCardProps {
  project: ProjectDetail;
}

const ProjectDetailCard: React.FC<ProjectDetailCardProps> = ({ project }) => {
  // Check if indexImage is a video or image
  const isVideo = (src: string) => {
    return (
      src.endsWith(".mp4") ||
      src.endsWith(".webm") ||
      src.endsWith(".ogg") ||
      src.endsWith(".mov")
    );
  };

  return (
    <div className="max-w-xs lg:max-w-sm flex-col space-y-2">
      <Skeleton className=" rounded-none" />
      {/* Link now points to the slug (based on employer name) */}
      <Link href={`/projects/${project.slug}`}>
        <div className="relative overflow-hidden group">
          {/* Image or video wrapper with hover animation */}
          <div className="duration-1000 group-hover:scale-105 transform transition-transform">
            {isVideo(project.indexImage) ? (
              <video
                height={403}
                width={403}
                className="object-cover w-full h-full"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
              >
                <source src={project.indexImage} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                height={403}
                width={403}
                alt={project.title}
                src={project.indexImage}
                priority
                className="object-cover w-full h-full"
              />
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

export default ProjectDetailCard;
