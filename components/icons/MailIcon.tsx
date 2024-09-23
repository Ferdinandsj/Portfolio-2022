import React from "react";
import { Button } from "@/components/ui/button"; // Adjust the import path
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

interface MailIconProps {
  mail: string;
}

const MailIcon: React.FC<MailIconProps> = ({ mail }) => {
  const { toast } = useToast(); // Get the toast function from the hook

  const handleCopy = () => {
    navigator.clipboard
      .writeText(mail)
      .then(() => {
        toast({
          description: "'Ferdinand@steen-johnsen.com' copied to clipboard.",
          variant: "default", // Adjust variant based on your design
          className: "bg-green-50",
        });
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: "Failed to copy email.",
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
      <Mail className="h-5 w-5 stroke-gray-700" />
    </Button>
  );
};

export default MailIcon;
