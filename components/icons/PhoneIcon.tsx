import React from "react";
import { Button } from "@/components/ui/button"; // Adjust the import path
import { useToast } from "@/hooks/use-toast";
import { Phone } from "lucide-react";

interface PhoneIconProps {
  number: string;
}

const PhoneIcon: React.FC<PhoneIconProps> = ({ number }) => {
  const { toast } = useToast(); // Get the toast function from the hook

  const handleCopy = () => {
    navigator.clipboard
      .writeText(number)
      .then(() => {
        toast({
          description: "+47 480 85 049 copied to clipboard.",
          variant: "default", // Adjust variant based on your design
          className: "bg-green-50",
        });
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: "Failed to Phone number.",
          variant: "destructive", // Adjust variant based on your design
        });
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <Button
      className="h-8 w-8"
      onClick={handleCopy}
      variant="ghost"
      size="icon"
    >
      <Phone className="h-5 w-5 stroke-gray-700" />
    </Button>
  );
};

export default PhoneIcon;
