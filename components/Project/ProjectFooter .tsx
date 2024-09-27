import { FC } from "react";
import { ProjectDetail } from "@/types";
import H2 from "../typography/h2";
import { Button } from "../ui/button";
import GetInTouch from "../Global/GetInTouch";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectFooterProps {
  project: ProjectDetail;
}

const ProjectFooter: FC<ProjectFooterProps> = ({
  project,
}) => {
  return (
    <div className="flex flex-col gap-10 w-full justify-center items-center pb-40 bg-gray-50 pt-20 border-t-[1px] border-gray-300">
      <div
        className="flex flex-col items-center gap-10 text-center w-full px-5
      sm:maw-w-[468px] md:max-w-[800px]"
      >
        <div className="flex flex-col gap-2">
          <H2 className="text-center">
            {project.footer.title}
          </H2>
          <p className="px-10">
            {project.footer.description}
          </p>
        </div>

        {project.footer.buttonText && (
          <Link href={project.footer.link || ""}>
            <Button className="w-60 flex gap-2 bg-primary font-normal text-primary-foreground hover:bg-primary/90">
              {project.footer.buttonText}
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
      {project.footer.buttonText && (
        <span>or</span>
      )}
      <GetInTouch />
    </div>
  );
};

export default ProjectFooter;
