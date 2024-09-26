import React from "react";
import classNames from "classnames";
import H3 from "../typography/h3";

type mobileHeaderProps = {
  children: React.ReactNode;
  className?: string; // Optional className prop
};

const MobileHeader: React.FC<
  mobileHeaderProps
> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "w-full max-w-xs  text-gray-300 md:max-w-full text-xl font-semibold lg:hidden",
        className
      )}
    >
      <H3>{children}</H3>
    </div>
  );
};

export default MobileHeader;
