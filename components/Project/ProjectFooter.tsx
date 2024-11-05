import { FC } from "react";
import { ProjectDetail } from "@/types";
import H2 from "../typography/h2";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Subtle from "../typography/subtle";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectDetailCardMini } from "../ProjectDetail/ProjectDetailCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectFooterProps {
  project: ProjectDetail;
}

interface FooterLinkProps {
  icon: boolean;
  href: string;
  children: React.ReactNode;
}

const FooterLink: FC<FooterLinkProps> = ({ icon, href, children }) => {
  return (
    <Link
      className="inline-flex gap-1 text-gray-700 text-lg font-medium "
      href={href}
    >
      <div className="flex items-center hover:bg-green-300 hover:cursor-pointer p-1">
        {children}
        {icon ? <ArrowUpRight /> : <></>}
      </div>
    </Link>
  );
};

export const ProjectFooter: FC<ProjectFooterProps> = ({ project }) => {
  // Filter out the current project
  const otherProjects = projects.filter((p) => p.id !== project.id);

  // Shuffle the other projects to get a random selection
  const shuffledProjects = otherProjects.sort(() => 0.5 - Math.random());

  // Select two projects from the shuffled list
  const projectsToShow = shuffledProjects.slice(0, 2);

  return (
    <div className="flex flex-col gap-40 w-full h-[900px] justify-between px-40 pt-20 border-t-[1px] border-gray-300">
      {/* Other projects section */}
      <div className="flex flex-col gap-10">
        <H2 className="text-2xl font-bold tracking-normal lg:text-4xl max-w-md">
          Explore other projects
        </H2>
        <div className="flex flex-row gap-10 lg:gap-10">
          {projectsToShow.map((project, index) => (
            <ProjectDetailCardMini key={index} project={project} />
          ))}
        </div>
        {/* <div className="w-full grow flex items-start justify-start">
          <Button>
            All Projects
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Button>
        </div> */}
      </div>
      {/* Get in touch + Navigation menu */}
      <div className="flex flex-col gap-20 pb-10">
        <div className="flex flex-col justify-between gap-5 items-end">
          <div className="flex flex-row w-full items-end justify-between">
            <div className="flex flex-col gap-5">
              <H2 className="text-lg font-bold tracking-normal lg:text-3xl max-w-md">
                Get in Touch
              </H2>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col ">
                  <FooterLink
                    icon={true}
                    href="mailto:ferdinand@steen-johnsen.com"
                  >
                    <section>Ferdinand@steen-johnsen.com</section>
                  </FooterLink>
                  <FooterLink icon={true} href="tel:+47 480 85 049">
                    +47 480 85 049
                  </FooterLink>
                  <FooterLink
                    icon={true}
                    href="https://www.linkedin.com/in/ferdinandsj/"
                  >
                    LinkedIn
                  </FooterLink>
                </div>
              </div>
            </div>
            {/* bottom Right footer section */}
            <div className="flex flex-col">
              <FooterLink icon={false} href="testytest">
                Home
              </FooterLink>
              <FooterLink icon={false} href="testytest">
                All Projects
              </FooterLink>
              <FooterLink icon={false} href="testytest">
                To the Top
              </FooterLink>
            </div>
          </div>
        </div>
        <Subtle className="w-full text-right px-1">
          Made by Ferdinand S-J © 2024
        </Subtle>
      </div>
    </div>
  );
};

export const ProjectCTA: FC<ProjectFooterProps> = ({ project }) => {
  return (
    <Card className="max-w-xs">
      <CardHeader>
        <CardTitle>
          <H2>{project.footer.title}</H2>
        </CardTitle>
        <CardDescription>{project.footer.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {project.footer.link ? (
          <Link href={project.footer.link || ""}>
            <Button className="w-60 flex gap-2 bg-primary font-normal text-primary-foreground hover:bg-primary/90">
              {project.footer.buttonText}
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        ) : null}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
