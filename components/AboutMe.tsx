import React from "react";
import { Mail, Phone } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const AboutMe: React.FC = () => {
  return (
    <div
      id="About me"
      className="flex w-6/12 items-center h-[600px] md:h-[800px] justify-center relative border-t-1 border-gray-300"
      style={{
        width: "100%",
        backgroundImage: `url(${"./images/index/chair.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-10 md:px-0 ml-[23%] sm:ml-[30%] lg:ml-[35%] xl:ml-[30%]  flex flex-col gap-16 w-[400px] text-normal text-gray-800 ">
        <p>
          Aside from design, I love cooking, music and photography! I am eager
          to dive deep into anything that captures my interest. Reach out for a
          coffee so we can get to know each other ☕
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Mail className="h-6 w-6" />
            <h4 className="text-semibold text-gray-700">
              Ferdinand@steen-johnsen.com
            </h4>
          </div>

          <div className="flex gap-2">
            <Phone className="h-6 w-6" />
            <h4 className="text-semibold text-gray-700">+47 480 80 549</h4>
          </div>
        </div>
        <a href="https://github.com/Ferdinandsj">
          <div className="flex gap-2">
            <GitHubLogoIcon color="#43424c" className="h-6 w-6" />
            <p className="text-semibold text-gray-500 hover:text-gray-700 transition duration-300">
              Portfolio made by Ferdinand with{" "}
              <span className="text-gray-700">React</span>,{" "}
              <span className="text-gray-700">Next.js</span>,{" "}
              <span className="text-gray-700">Tailwind</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
