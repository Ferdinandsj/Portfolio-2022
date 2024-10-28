import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import { Button } from "@/components/ui/button";
import FlagMenu from "./FlagMenu";

import { Linkedin } from "lucide-react";

export default function LeftHomeSection() {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    // Trigger the animation when the component mounts
    setAnimationClass("animate-slideLeft");
  }, []);
  return (
    <div
      className="flex-col flex gap-16 items-center
    lg:h-full lg:min-h-96 lg:pb-40 lg:border-gray-300 lg:border-r-[1px] lg:w-400    "
    >
      <div className="flex md:w-[440px] gap-20 flex-col items-center">
        <FlagMenu className="hidden lg:flex" />
        <div
          id="WelcomeAndContact"
          className="h-96 flex flex-col gap-20 min-h-96 grow-0"
        >
          {/* Animation container */}
          <div className={`${animationClass}`}>
            <div className="flex w-[300px] gap-4 flex-col items-center">
              <Image
                src={"/images/home-page/portrait.png"}
                alt={"Portrait image"}
                width={148}
                height={148}
              />
              <Image
                src={"/images/home-page/hi-message.svg"}
                alt={"Portrait image"}
                width={240}
                height={38}
              />
              <p className="text-center text-gray-500 text-wrap grow-0 break-normal">
                An interaction designer with experience in UX, UI, Service
                Design and Front-End
              </p>
            </div>
            <div className="gap-3 h-40 flex flex-col justify-center items-center grow-0">
              <div className="flex flex-col justify-center gap-0">
                <h4 className="font-medium text-gray-800 text-center flex-grow">
                  Get in touch
                </h4>
                <div className="flex gap-0 justify-center items-start">
                  <PhoneIcon number="+4748085049" />
                  <MailIcon mail="ferdinand@steen-johnsen.com" />
                  <Link href="https://www.linkedin.com/in/ferdinandsj/">
                    <Button className="h-8 w-8" variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5 stroke-gray-700" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
