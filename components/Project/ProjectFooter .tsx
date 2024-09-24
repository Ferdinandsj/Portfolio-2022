import { FC } from "react";
import { ProjectDetail } from "@/types";
import H2 from "../typography/h2";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import GetInTouch from "../Global/GetInTouch";

interface ProjectFooterProps {
  project: ProjectDetail;
}

const ProjectFooter: FC<ProjectFooterProps> = ({ project }) => {
  return (
    <div className="flex flex-col gap-10 w-full justify-center items-center pb-40 bg-gray-50 pt-40 border-t-[1px] border-gray-300">
      <div
        className="flex flex-col items-center gap-10 text-center w-full px-10
      sm:w-[468px]"
      >
        <div className="flex flex-col gap-2">
          <H2 className="text-center">{project.footer.title}</H2>
          <p className="px-10">{project.footer.description}</p>
        </div>
        <Button className="w-60 flex gap-2 bg-primary font-normal text-primary-foreground hover:bg-primary/90">
          {project.footer.buttonText}
          <ExternalLink className="mr-2 h-4 w-4" />
        </Button>
      </div>
      <span>or</span>
      <GetInTouch />
    </div>
  );
};

export default ProjectFooter;
