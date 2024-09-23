import React from "react";
import classNames from "classnames";

type SubtleProps = {
  children: React.ReactNode;
  className?: string; // Optional className prop
};

const Subtle: React.FC<SubtleProps> = ({ children, className }) => {
  return (
    <div className={classNames("className= text-sm text-gray-500", className)}>
      {children}
    </div>
  );
};

export default Subtle;
