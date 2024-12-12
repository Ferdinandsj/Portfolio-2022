import React from "react";

type mobileHeaderProps = {
  children: React.ReactNode;
  className?: string; // Optional className prop
};

const MobileHeader: React.FC<
  mobileHeaderProps
> = ({ children }) => {
  return (
    <h2 className="text-2xl font-bold tracking-normal lg:hidden lg:text-4xl max-w-md">
      {children}
    </h2>
  );
};

export default MobileHeader;
