import React from "react";
import classNames from "classnames";

type H4Props = {
  children: React.ReactNode;
  className?: string; // Optional className prop
};

const H4: React.FC<H4Props> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "className= text-xs uppercase text-gray-500 font-medium tracking-wide",
        className
      )}
    >
      {children}
    </div>
  );
};

export default H4;
