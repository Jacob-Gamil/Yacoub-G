import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { TbBrandGithub } from "react-icons/tb";

function ProjectCard({
  projectImage,
  projectNumber,
  projectName,
  platform,
  description,
  frameworks,
  gitHub,
  liveDemo,
  isReversed = false,
}) {
  return (
    <div className="mt-[2rem] p-2 rounded-2xl scale-[0.9]">
      <div
        className={`relative flex flex-col md:items-start gap-6 ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Left or Right Image */}
        <a
          href={liveDemo}
          target="_blank"
          className="relative group duration-400 hover:scale-[1.02] w-full md:w-1/2 md:h-80 rounded-[0.2rem] overflow-hidden group"
        >
          <img
            className=" absolute w-full h-full object-cover hover:scale-105 duration-200"
            src={projectImage}
            alt="Project"
          />
          <span className=" group-hover:h-0 duration-300 w-full h-full bg-[#112240] block absolute z-1 opacity-30"></span>
        </a>

        {/* Right or Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div
            className={`flex flex-col ${
              isReversed
                ? "items-start md:items-start"
                : "items-end md:items-end"
            } mb-4`}
          >
            <h2 className="text-primary text-sm font-extralight">
              0.{projectNumber}
            </h2>
            <h1 className="text-xl lg:text-2xl text-[#ccd6f6] font-bold capitalize">
              {projectName}
            </h1>
          </div>

          <div
            className={`bg-[#112240] text-[#ccd6f6] z-3 p-6 rounded shadow-md absolute top-25 scale-[95%] ${
              isReversed ? "left-0" : "right-0"
            } w-[60%]`}
          >
            <h3 className="text-primary font-semibold text-lg mb-2">
              {platform}
            </h3>
            <p className="relative pl-4 text-[1rem] leading-relaxed">
              <span className="absolute z-4 left-1 top-2.5 w-1 h-1 bg-primary rounded-full" />
              {description}
              <span className="text-primary text-xs font-semibold">
                {"."}
                {frameworks}
              </span>{" "}
            </p>
          </div>

          <div
            className={`absolute md:-bottom-8 lg:bottom-0 ${
              isReversed ? "left-0" : "right-[1rem]"
            } flex gap-4 mt-6 justify-end text-xl`}
          >
            <a
              href={gitHub}
              target="_blank"
              className="text-[#ccd6f6] hover:text-primary"
            >
              <TbBrandGithub />
            </a>
            <a
              href={liveDemo}
              target="_blank"
              className="text-[#ccd6f6] hover:text-primary"
            >
              <LuSquareArrowOutUpRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
