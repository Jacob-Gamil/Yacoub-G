import { useRef } from "react";
import { projects } from "../../data/projecs";
import ProjectCard from "./ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MobileCard from "./MobileCard";
import ScrollTrigger from "gsap/ScrollTrigger";

function Projects() {
  const projectRef = useRef(null);
  const projectMobileRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const project = projectRef.current.querySelectorAll(".project");
    const projectMobile =
      projectMobileRef.current.querySelectorAll(".projectMobile");
    gsap.fromTo(
      "#projectSection",
      {
        x: -50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#projectSection",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power",
      }
    );

    project.forEach((el) => {
      gsap.fromTo(
        el,
        {
          scale: 0.8,
          y: 60,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    projectMobile.forEach((el) => {
      gsap.fromTo(
        el,
        {
          scale: 0.8,
          y: 60,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power",
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div id="projects" className="mt-[8rem]">
      <h1
        id="projectSection"
        className=" text-[#ccd6f6] text-[1rem] mx-8 md:text-xl font-semibold capitalize flex items-center"
      >
        <span className=" w-1 h-1 rounded-full block bg-primary mx-2"></span>
        Some Things <span className=" text-primary mx-1.5">I’ve Built</span>
        <span className=" w-[20%] h-[0.5px] mx-4 md:w-[30%] block bg-[#ccd6f6]"></span>
      </h1>
      <div className="">
        <div ref={projectMobileRef} className=" md:hidden">
          {projects.map((project, i) => (
            <div className="projectMobile" key={project.projectName}>
              <MobileCard
                isReversed={project.isReversed}
                projectImage={project.projectImage}
                projectNumber={i + 1}
                projectName={project.projectName}
                platform={project.platform}
                description={project.description}
                frameworks={project.frameworks}
                gitHub={project.gitHub}
                liveDemo={project.liveDemo}
              />
            </div>
          ))}
        </div>

        <div ref={projectRef} className=" hidden md:block w-full mx-auto">
          {projects.map((project, i) => (
            <div className=" project" key={project.projectName}>
              <ProjectCard
                isReversed={project.isReversed}
                projectImage={project.projectImage}
                projectNumber={i + 1}
                projectName={project.projectName}
                platform={project.platform}
                description={project.description}
                frameworks={project.frameworks}
                gitHub={project.gitHub}
                liveDemo={project.liveDemo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
