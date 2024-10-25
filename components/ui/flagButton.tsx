import type React from "react";
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
      className={`font-inter text-sm font-medium shadow-none pr-6 h-2 mr-[-1px] py-1.5 text-[14px]] box-border bg-transparent hover:border-r-[1.5px] border-r-[1.5px] rounded-none h-8.5 transition-colors duration-500 ease-in-out hover:bg-transparent hover:text-gray-900 
        
        inline-flex items-center justify-center whitespace-nowrap  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50
        ${
          isActive
            ? "text-gray-900 border-gray-700 rounded-none bg-none hover:border-r-[1.5px] "
            : "text-gray-400 border-transparent hover:border-gray-800 hover: bg-transparent hover:border-r-[1.5px]"
        }`}
    >
      {label}
    </Button>
  );
};

export default FlagButton;
