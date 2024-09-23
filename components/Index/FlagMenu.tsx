import React, {
  useState,
  useEffect,
} from "react";
import FlagButton from "@/components/ui/flagButton";
import classNames from "classnames"; // Optional: classnames utility for combining classes

const sections = [
  "Selected projects",
  "Experience",
  "About me",
];

interface FlagMenuProps {
  className?: string; // Optional className prop to receive external classes
}

const FlagMenu: React.FC<FlagMenuProps> = ({
  className,
}) => {
  const [activeSection, setActiveSection] =
    useState<string>(sections[0]);
  const [isVisible, setIsVisible] =
    useState(true);

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
      className={classNames(
        "flex flex-col items-end gap-2 w-full pt-[-10px]", // Default classes
        className // External className prop
      )}
    >
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
  );
};

export default FlagMenu;
