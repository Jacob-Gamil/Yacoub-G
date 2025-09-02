import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  useGSAP(() => {
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

    gsap.from("#with", {
      scrollTrigger: {
        trigger: "#with",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      x: 50,
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.from("#skill", {
      scrollTrigger: {
        trigger: "#skill",
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
      stagger: 0.1,
      x: 50,
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="w-full">
      <h2
        id="work"
        className="text-2xl md:text-3xl text-center font-bold flex justify-center items-center text-[#8892b0] capitalize"
      >
        <span className="w-[10%] md:w-[20%] h-[1px] bg-primary block"></span>
        As I work smoothly
        <span className="w-[10%] md:w-[20%] h-[1px] bg-primary block"></span>
      </h2>
      <h3
        id="with"
        className="text-center text-2xl md:text-3xl font-bold text-primary w-full block"
      >
        With
      </h3>
      <div className="mt-[2rem] flex flex-col justify-center items-center">
        <div
          id="skill"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full"
        >
          {programmingLanguages.map((item, index) => (
            <div
              key={index}
              className=" shadow-[0px_0px_2px_0px_#64ffda] p-2 font-bold uppercase flex items-center justify-evenly gap-4 hover:scale-105 duration-200 lg:last:col-span-3"
            >
              {item.name}
              <span className="text-primary text-2xl">{item.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkWith;
