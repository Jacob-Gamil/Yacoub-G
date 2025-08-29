import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function HeroSection() {
  useGSAP(() => {
    gsap.from(".heroClass", {
      y: 10,
      opacity: 0,
      stagger: 0.2,
      delay: 3.6,
      ease: "power",
    });
  }, []);

  return (
    <div className=" w-full h-[75svh] p-5 flex flex-col justify-center items-center ">
      <div className="">
        <h1 className="heroClass text-primary text-[1rem]">Hi, my name is</h1>
        <h2 className="heroClass text-[2.5rem] md:text-5xl lg:text-6xl xl:text-7xl capitalize font-bold mt-2">
          {" "}
          yacoub gamil
        </h2>

        <p className="heroClass text-4xl md:text-5xl xl:text-6xl font-bold text-[#8892b0]">
          I build things for the web.
        </p>

        <p className="heroClass mt-5 capitalize text-[#8892b0] opacity-80 xl:text-xl lg:max-w-[60%]">
          I’m a passionate and detail-oriented Frontend Web Developer skilled in
          HTML, CSS, JavaScript, and React, Next.js. I build responsive,
          user-friendly interfaces and focus on clean, efficient code.
        </p>
        <button id="aboutMe" className="heroClass">
          <a
            href="/about"
            className="opacity-100 mt-10 block shadow-[0px_0px_4px_0px_#64ffda] rounded-[5px] cursor-pointer w-fit px-10 py-2 text-primary transition-all duration-200 hover:shadow-[0px_0px_8px_0px_#64ffda]"
          >
            About Me
          </a>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
