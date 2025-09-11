import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { RiLinkedinFill } from "react-icons/ri";

const contacts = [
  {
    href: "https://www.github.com/Yacoub-Gamil?tab=repositories",
    icon: <FiGithub />,
  },
  {
    href: "https://www.linkedin.com/in/yacoub-gamil",
    icon: <RiLinkedinFill />,
  },
  {
    href: "https://www.instagram.com/yacoub_gamil",
    icon: <FaInstagram />,
  },
  // {
  //   href: "https://www.facebook.com/share/1EpjfVjXxU/?mibextid=wwXlfr",
  //   icon: <ImFacebook />,
  // },
];

function BothSides() {
  useGSAP(() => {
    gsap.from("#sides", {
      opacity: 0,
      duration: 0.5,
      delay: 3.8,
    });
  }, []);
  return (
    <div id="sides" className=" hidden lg:block text-[#ccd6f6] font-light  ">
      <div className=" fixed bottom-0 -right-8 flex flex-col items-center gap-25">
        <div className="rotate-90  ">
          <a
            href="mailto:yacoub-gmil@hotmail.com"
            className=" hover:text-primary cursor-pointer hover:scale-105 transition-all duration-200 block opacity-60  hover:opacity-100 "
          >
            Yacoub-gamil@hotmail.com
          </a>
        </div>
        <span className=" w-[1px] h-[5rem] block bg-[#ccd6f6] opacity-60"></span>
      </div>

      <div className=" fixed bottom-0 left-14 duration-300 flex flex-col gap-5 items-center ">
        <div className=" flex flex-col gap-6 text-[1.4rem] ">
          {contacts.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              className=" hover:text-primary hover:scale-115 transition-all duration-200 opacity-60  hover:opacity-100"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <span className=" w-[1px] h-[5rem] bg-[#ccd6f6] block opacity-60"></span>
      </div>
    </div>
  );
}

export default BothSides;
