import React from "react";
import { Button } from "@/components/ui/button"; // Adjust the import path

interface FlagButtonProps {
  label: string;
  variantType:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  isActive: boolean;
  onClick: () => void;
}

const FlagButton: React.FC<FlagButtonProps> = ({
  isActive,
  onClick,
  label,
}) => {
  return (
    <Button
      onClick={onClick}
      className={`font-inter text-sm font-medium shadow-none pr-6 h-3 mr-[-1px] py-0 text-[14px]] box-border bg-transparent hover:border-r-[1.5px] border-r-[1.5px] rounded-r-none h-8.5 transition-colors duration-500 ease-in-out hover:bg-transparent hover:text-gray-900 ${
        isActive
          ? "text-gray-900 border-gray-700 "
          : "text-gray-500 border-none hover:border-gray-800 hover: bg-transparent hover:border-r-[1.5px]"
      }`}
    >
      {label}
    </Button>
  );
};

export default FlagButton;
