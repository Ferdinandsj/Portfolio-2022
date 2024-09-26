import { ExperienceDetail } from "../../types";
import H4 from "../typography/h4";

interface ExperienceCardProps {
  experience: ExperienceDetail;
}

const ExperienceCard: React.FC<
  ExperienceCardProps
> = ({ experience }) => {
  return (
    <div className="w-full sm:max-w-[460px] flex flex-col flex-grow gap-2">
      <div className="flex">
        <div className="flex-grow flex flex-col gap-0">
          <H4>{experience.position}</H4>
          <h1 className="text-wrap font-serif text-[28px] mt-[-2px] text-gray-900 break-normal">
            {experience.employer}
          </h1>
        </div>
        <div>
          <H4 className="pr-1.5 border-r-[2px]  text-gray-700">
            {experience.startDate}
          </H4>
          <H4 className="pr-1.5 border-r-[2px] text-gray-400 ">
            {experience.endDate}
          </H4>
        </div>
      </div>
      <ul className="space-y-2 list-disc list-outside pl-0">
        {experience.summary.map(
          (summary, index) => (
            <li
              className="ml-[2px] text-base text-gray-600  before:absolute before:left-0 before:top-0"
              key={index}
            >
              {summary}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ExperienceCard;
