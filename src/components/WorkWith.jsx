import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import { FaBootstrap, FaGitAlt, FaNodeJs, FaPython } from "react-icons/fa";
import {
  FaCss3,
  FaHtml5,
  FaJava,
  FaReact,
  FaSquareGithub,
} from "react-icons/fa6";
import { MdArrowRight } from "react-icons/md";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
  RiVercelLine,
} from "react-icons/ri";
import { SiExpress, SiNetlify } from "react-icons/si";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Icons for Auth.js and NextAuth are not in react-icons, use a fallback or custom SVG if available
const programmingLanguages = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "JavaScript", icon: <RiJavascriptFill /> },
  { name: "TypeScript", icon: <BiLogoTypescript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <RiNextjsFill /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Auth.js", icon: <BsFillShieldLockFill /> }, // Placeholder
  { name: "Supabase", icon: <RiSupabaseFill /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaSquareGithub /> },
  { name: "MongoDB", icon: <DiMongodb /> },
  { name: "Netlify", icon: <SiNetlify /> },
  { name: "Vercel", icon: <RiVercelLine /> },
];

function WorkWith() {
  gsap.registerPlugin(_ScrollTrigger);
  const skillRef = useRef();
  useGSAP(() => {
    const items = skillRef.current?.querySelectorAll(".skill");

    gsap.from("#work", {
      scrollTrigger: {
        trigger: "#work",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      x: 50,
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.fromTo(
      items,
      {
        y: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: items,
          start: "top 100%",
          toggleActions: "play none none reverse",
        },
        stagger: 0.05,
        delay: 0,
        y: 0,
        opacity: 1,
        ease: "back.inOut",
      }
    );
  }, []);

  return (
    <div className="w-full mt-4">
      <h1
        id="work"
        className=" mb-2 text-[#ccd6f6] text-[1rem] font-semibold capitalize flex items-center"
      >
        <span className=" w-1 h-1 rounded-full block bg-primary mx-2"></span>
        I’ve been working{" "}
        <span className=" text-primary mx-1.5">with recently:</span>
      </h1>

      <div ref={skillRef} className=" grid grid-cols-3 md:grid-cols-4">
        {programmingLanguages.map((item) => (
          <div key={item.name} className="skill relative mt-1">
            <span className=" absolute top-1  flex items-center">
              <MdArrowRight className=" text-primary" />
            </span>
            <h1 className=" text-[1rem] opacity-80 flex flex-col items-center">
              <span className=" font-extralight text-[#ccd6f6]">
                {item.name}
              </span>
              {/* <span>{item.icon}</span> */}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkWith;
