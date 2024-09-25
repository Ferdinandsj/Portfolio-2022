import React from "react";
import classNames from "classnames";

type H3Props = {
  children: React.ReactNode;
  className?: string; // Optional className prop
};

const H3: React.FC<H3Props> = ({
  children,
  className,
}) => {
  return (
    <div
      className={classNames(
        "text-gray-700 text-xl font-semibold",
        className
      )}
    >
      {children}
    </div>
  );
};

export default H3;
