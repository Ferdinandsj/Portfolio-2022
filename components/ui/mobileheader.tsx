import React from "react";
import H2 from "../typography/h2";

type mobileHeaderProps = {
  children: React.ReactNode;
  className?: string; // Optional className prop
};

const MobileHeader: React.FC<mobileHeaderProps> = ({ children }) => {
  return (
    <H2 className="text-2xl font-bold tracking-normal lg:hidden lg:text-4xl max-w-md">
      {children}
    </H2>
  );
};

export default MobileHeader;
