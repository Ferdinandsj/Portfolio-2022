import React, {
  useState,
  useEffect,
} from "react";
import FlagButton from "@/components/ui/flagButton"; // Ensure the path is correct
import { Button } from "../ui/button";
import { ChevronsLeft } from "lucide-react";
import Link from "next/link";

const sections = [
  "Overview",
  "Process",
  "Result",
];

const ProjectMenu: React.FC = () => {
  const [activeSection, setActiveSection] =
    useState<string>(sections[0]);
  const [isVisible, setIsVisible] =
    useState(true); // New state to control visibility

  // Function to handle scroll events
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    let currentSection = "";

    // Check each section to find which one is currently in view
    sections.forEach((section) => {
      const element =
        document.getElementById(section);
      if (element) {
        const rect =
          element.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = section;
        }
      }
    });

    setIsVisible(currentSection !== "About me"); // Update visibility based on section
    setActiveSection(currentSection);
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener(
      "scroll",
      handleScroll
    );
    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  // Function to handle button click
  const handleButtonClick = (section: string) => {
    document
      .getElementById(section)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Determine the classes for the visibility transition
  const welcomeClass = isVisible
    ? "opacity-100 transition-opacity duration-500 ease-in-out"
    : "opacity-0 transition-opacity duration-500 ease";

  useEffect(() => {
    const welcomeElement =
      document.getElementById(
        "WelcomeAndContact"
      );
    if (welcomeElement) {
      welcomeElement.className = welcomeClass;
    }
  }, [isVisible]);

  return (
    <div
      className="flex flex-col items-end pl-5 gap-2 border-r-[1px] w-full pt-[-10px] h-screen mb-40
    lg:pl-0"
    >
      <div className="flex flex-col items-end gap-40 pt-28 w-32">
        <Link href="/">
          <Button
            className="font-inter text-base font-medium pr-6"
            variant={"ghost"}
          >
            <ChevronsLeft className="mr-2 h-5 w-5" />
            Home
          </Button>
        </Link>
        <div className="flex flex-col gap-2 items-end ">
          {sections.map((section) => (
            <FlagButton
              variantType={"ghost"}
              key={section}
              isActive={section === activeSection}
              onClick={() =>
                handleButtonClick(section)
              }
              label={section}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectMenu;