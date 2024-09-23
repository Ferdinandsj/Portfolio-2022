import { GetStaticPaths, GetStaticProps } from "next";
import { projects } from "@/data/projects";
import ProjectOverview from "@/components/Project/ProjectOverview";
import ProjectProcess from "@/components/Project/ProjectProcess";
import { ProjectDetail } from "@/types";
import H2 from "@/components/typography/h2";
import H3 from "@/components/typography/h3";

interface ProjectPageProps {
  project: ProjectDetail;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  return (
    <div className="flex flex-col gap-40 pt-10 pb-20 container mx-auto max-w-[834px]">
      <ProjectOverview project={project} />
      <div className="flex flex-col gap-20">
        {project.article.map((section, index) => (
          <ProjectProcess key={index} index={index} section={section} />
        ))}
      </div>
    </div>
  );
};

// Generate paths for all projects based on slug
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug }, // Use the slug for the URL
  }));

  return {
    paths,
    fallback: false, // Means other routes will 404
  };
};

// Fetch the correct project based on the slug in the URL
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.slug === params!.slug); // Find project by slug

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
