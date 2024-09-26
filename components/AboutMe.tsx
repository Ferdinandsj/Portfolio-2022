import React from "react";
import { Mail, Phone } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import MobileHeader from "./ui/mobileheader";

const AboutMe: React.FC = () => {
  return (
    <div
      id="About me"
      className="flex w-screen pt-10 h-[800px] justify-center relative border-t border-gray-300 bg-cover bg-center bg-gray-50 
      bg-[url('/images/index/footer-img-mobile.png')] 
      lg:bg-[url('/images/index/chair.jpg')] lg:items-center
     "
    >
      <div
        className="px-10 flex flex-col gap-16 max-w-[600px] text-normal text-gray-800
      lg:px-10 lg:ml-[30%] lg:max-w-[400px] xl:ml-[30%] "
      >
        <div>
          <MobileHeader className="pb-2">
            About me
          </MobileHeader>
          <p>
            Aside from design, I love cooking,
            music and photography! I am eager to
            dive deep into anything that captures
            my interest. Reach out for a coffee so
            we can get to know each other ☕
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Mail className="h-6 w-6" />
            <h4 className="text-semibold text-gray-700">
              Ferdinand@steen-johnsen.com
            </h4>
          </div>

          <div className="flex gap-2">
            <Phone className="h-6 w-6" />
            <h4 className="text-semibold text-gray-700">
              +47 480 80 549
            </h4>
          </div>
        </div>
        <a href="https://github.com/Ferdinandsj">
          <div className="flex gap-2">
            <GitHubLogoIcon className="h-6 w-6 text-gray-700" />
            <p className="text-semibold text-gray-500 hover:text-gray-700 transition duration-300">
              Portfolio made by Ferdinand with{" "}
              <span className="text-gray-700">
                React
              </span>
              ,{" "}
              <span className="text-gray-700">
                Next.js
              </span>
              ,{" "}
              <span className="text-gray-700">
                Tailwind
              </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
