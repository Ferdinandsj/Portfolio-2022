import React from "react";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";
import Link from "next/link";
import { Button } from "../ui/button";
import { Linkedin } from "lucide-react";

interface GetInTouchProps {}

const GetInTouch: React.FC<
  GetInTouchProps
> = ({}) => {
  return (
    <div className="gap-3 flex flex-col justify-center items-center grow-0">
      <div className="flex flex-col justify-center gap-0">
        <h4 className="font-medium text-gray-800 text-center flex-grow">
          Get in touch
        </h4>
        <div className="flex gap-0 justify-center items-start">
          <PhoneIcon number="+4748085049" />
          <MailIcon mail="ferdinand@steen-johnsen.com" />
          <Link href="https://www.linkedin.com/in/ferdinandsj/">
            <Button
              className="h-8 w-8"
              variant="ghost"
              size="icon"
            >
              <Linkedin className="h-5 w-5 stroke-gray-700" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
