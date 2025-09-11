import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkWith from "./WorkWith";
import { useRef } from "react";

function AboutSection() {
  gsap.registerPlugin(ScrollTrigger);
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.from("#about", {
      scrollTrigger: {
        trigger: "#about",

        start: "top 65%",
        toggleActions: "play none none reverse",
      },
      stagger: 0.2,
      y: 80,
      filter: "blur(20px)",
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.fromTo(
      imgRef.current,
      {
        opacity: 0,
        filter: "blur(20px)",
        scale: 1.02,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className=" max-w-[90%] mx-auto flex mt-[2rem] overflow-hidden">
      <div id="about" className="">
        <h1 className=" text-[#ccd6f6] text-[1.5rem] font-semibold capitalize flex items-center">
          <span className=" w-1 h-1 rounded-full block bg-primary mx-2"></span>
          about <span className=" text-primary mx-1.5">me</span>
          <span className=" w-[20%] h-[0.1px] mx-4 md:w-[20%] block opacity-40 bg-[#ccd6f6]"></span>
        </h1>

        <div className="grid md:grid-cols-2 ">
          <div className="">
            <div className=" ">
              <p
                id="about"
                className="text-[#ccd6f6] md:text-[1.1rem] font-extralight capitalize"
              >
                I'm a budding frontend web developer with a strong passion for
                crafting visually appealing and user-friendly websites. Recently
                diving into
                <span className=" text-primary ">
                  {" "}
                  HTML, CSS, and JavaScript, React, Next.js,{" "}
                </span>
                I'm excited to learn more about responsive design and modern
                frameworks. I thrive on turning ideas into interactive
                experiences and enjoy solving problems through code. With a keen
                eye for detail and a desire to keep improving, I'm ready to
                embrace new challenges and collaborate on innovative projects in
                the web development world.
              </p>
            </div>
            <div>
              <WorkWith />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              ref={imgRef}
              src="/hero.png"
              alt="jacob"
              className="  md:-mt-10 w-[26rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
