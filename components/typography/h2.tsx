import React from "react";
import classNames from "classnames";

type H2Props = {
  children: React.ReactNode;
  className?: string; // Optional className prop
};

const H2: React.FC<H2Props> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "text-gray-700 text-2xl font-semibold tracking-tight", // Default classes
        className, // Optional additional classes from props
      )}
    >
      {children}
    </div>
  );
};

export default H2;
