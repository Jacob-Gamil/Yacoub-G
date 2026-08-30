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
    <div
      id="home"
      className=" w-full h-[75svh] flex flex-col justify-center items-center"
    >
      <div className="">
        <h1 className="heroClass text-primary text-[1rem]">Hi, my name is</h1>

        <h2 className="heroClass text-[2.5rem] text-[#ccd6f6] md:text-5xl lg:text-6xl xl:text-[4rem] capitalize font-bold mt-2">
          {" "}
          Jacob gamil
        </h2>

        <p className="heroClass text-4xl md:text-5xl xl:text-6xl font-bold text-[#8892b0]">
          I build things for the web.
        </p>

        <p className="heroClass font-extralight mt-5 capitalize text-[#ccd6f6] xl:text-[1.1rem] lg:max-w-[60%]">
          I’m a passionate and detail-oriented Frontend Web Developer skilled in
          HTML, CSS, JavaScript, and React, Next.js. I build responsive,
          user-friendly interfaces and focus on clean, efficient code.
        </p>
        <button id="aboutMe" className="heroClass w-full">
          <a
            href="/Jacob Gamil_CV.pdf"
            target="_blank"
            className=" w-fit hover:px-3 duration-300 opacity-100 mt-10 block cursor-pointer text-primary transition-all border-b"
          >
            My Resume!
          </a>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
