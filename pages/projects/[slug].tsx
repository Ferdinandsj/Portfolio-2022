import { GetStaticPaths, GetStaticProps } from "next";
import { projects } from "@/data/projects";
import ProjectOverview from "@/components/Project/ProjectOverview";
import ProjectProcess from "@/components/Project/ProjectProcess";
import ProjectFooter from "@/components/Project/ProjectFooter ";
import { ProjectDetail } from "@/types";
import ProjectMenu from "@/components/Project/ProjectMenu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronsLeft } from "lucide-react";

interface ProjectPageProps {
  project: ProjectDetail;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  return (
    <div className="font-inter flex flex-col items-center justify-between w-full min-h-screen mt-10">
      <div
        className="flex flex-col gap-20 max-w-7xl w-full h-full px-0 
      sm:px-6 
      lg:px-0"
      >
        {/* Main Content */}
        <div
          className="flex flex-col lg:flex-row justify-between gap-0 lg:pb-40 
        lg:gap-0"
        >
          {/* Project Menu (Sticky on larger screens) */}
          <div
            className="hidden sticky top-10 h-screen
          lg:block lg:px-0 lg:mx-0"
          >
            <ProjectMenu />
          </div>

          {/* Home Button (Visible on small screens) */}
          <div className="flex flex-col gap-0 lg:hidden sticky top-0">
            <div className=" py-5 bg-gradient-to-t from-white to-white">
              <Link href="/">
                <Button
                  className="font-inter text-base font-medium pr-6"
                  variant={"ghost"}
                >
                  <ChevronsLeft className="mr-2 h-5 w-5" />
                  Home
                </Button>
              </Link>
            </div>
            <div className="h-4 bg-gradient-to-t from-transparent  to-white" />
          </div>
          {/* Content Section */}
          <div className="flex flex-col w-full gap-5 items-center">
            {/* Project Overview */}
            <div className="flex flex-col gap-40 max-w-[834px] justify-center w-full md:pt-10 px-5">
              <div id="Overview">
                <ProjectOverview project={project} />
              </div>

              {/* Process Section */}
              <div id="Process" className="flex flex-col gap-24">
                {project.process.map((section, index) => (
                  <ProjectProcess key={index} section={section} />
                ))}
              </div>

              {/* Result Section */}
              <div id="Result" className="flex flex-col gap-10 pb-10 sm:gap-20">
                {project.result.map((section, index) => (
                  <ProjectProcess key={index} section={section} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full">
        <ProjectFooter project={project} />
      </div>
    </div>
  );
};

// Generate paths for all projects based on slug
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false, // Means other routes will 404
  };
};

// Fetch the correct project based on the slug in the URL
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.slug === params!.slug);

  if (!project) {
    return {
      notFound: true, // If no project is found, show 404
    };
  }

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;
