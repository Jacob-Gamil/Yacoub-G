import { TbBrandGithub } from "react-icons/tb";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

function MobileCard({
  projectImage,
  projectNumber,
  projectName,
  platform,
  description,
  frameworks,
  gitHub,
  liveDemo,
}) {
  return (
    <div className=" mt-[3rem] max-w-[95%] mx-auto ">
      <div>
        <h1 className=" text-primary font-extralight text-[0.9rem]">
          0.{projectNumber}
        </h1>
        <h1 className=" text-xl text-[#ccd6f6] capitalize font-semibold mb-1">
          {projectName}
        </h1>
      </div>
      <div className=" relative w-full h-[20rem] rounded-[0.5rem] overflow-hidden">
        <a href={liveDemo} target="_blank">
          <img
            src={projectImage}
            alt="brightmind"
            className=" absolute z-1 h-[20rem] w-full"
          />
        </a>
        <div className="w-full h-[60%] bottom-0 bg-[#112240] absolute z-2 opacity-95 flex flex-col items-center text-center">
          <h1 className="mt-2 text-[#64ffda] font-semibold">{platform}</h1>
          <p className=" text-[#ccd6f6] text-[0.9rem] max-w-[90%]">
            {description}{" "}
            <span className=" text-xs text-primary">{frameworks}</span>
          </p>
          <div className="absolute bottom-2 flex justify-between gap-4 text-xl">
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

export default MobileCard;
