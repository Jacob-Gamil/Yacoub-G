import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutSection() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#about", {
      scrollTrigger: {
        trigger: "#about",

        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      stagger: 0.2,
      y: 80,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.from("#expertise", {
      scrollTrigger: {
        trigger: "#expertise",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      stagger: 0.2,
      x: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.from("#card", {
      scrollTrigger: {
        trigger: "#card",
        start: "top 95%",
        toggleActions: "play none none reverse",
      },
      stagger: 0.2,
      x: 50,
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="overflow-hidden mb-[6rem]">
      <div id="about" className=" ">
        <h1 className=" text-[#8892b0] text-3xl font-semibold capitalize flex items-center">
          <span className=" w-2 h-2 rounded-full block bg-primary mx-2"></span>
          About <span className=" text-primary mx-1.5">me</span>
        </h1>
        <div className=" p-4 ">
          <p
            id="about"
            className=" mt-2 text-[#8892b0] md:text-[1.1rem] font-extralight capitalize"
          >
            I'm a budding frontend web developer with a strong passion for
            crafting visually appealing and user-friendly websites. Recently
            diving into
            <span className=" text-primary opacity-80">
              {" "}
              HTML, CSS, and JavaScript, React, Next.js,{" "}
            </span>
            I'm excited to learn more about responsive design and modern
            frameworks. I thrive on turning ideas into interactive experiences
            and enjoy solving problems through code. With a keen eye for detail
            and a desire to keep improving, I'm ready to embrace new challenges
            and collaborate on innovative projects in the web development world.
          </p>
        </div>
      </div>

      <div id="expertise" className="mt-4 w-full overflow-hidden">
        <h1 className=" text-[#8892b0] text-3xl font-semibold capitalize flex items-center">
          <span className=" w-2 h-2 rounded-full mx-2 bg-primary"></span>
          exper<span className=" text-primary lowercase">tise</span>
        </h1>
        <div id="expertise" className=" p-4">
          <p
            id="about"
            className=" mt-2 text-[#8892b0] md:text-[1.1rem] font-extralight capitalize"
          >
            I am constantly seeking to improve my skills and stay up-to-date
            with the latest technologies. I am eager to take on new challenges
            and use my expertise to contribute to successful projects.
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[95%] mx-auto mt-4 mb-2 ">
          <div id="card" className="p-4 bg-[#112240]">
            <h1 className=" font-semibold text-xl opacity-85">
              {" "}
              <span className=" text-primary">Software </span>Development
            </h1>
            <p className=" text-[#8892b0] mt-1 text-[0.9rem]">
              I'm interested in software engineering in general, I love learning
              about algorthims, data structures, and design patterns. It's my
              way to express my creativity. Some people create music, movies,
              paintings or pottery. I create software.
            </p>
          </div>

          <div id="card" className="p-4 rounded-xs bg-[#112240]">
            <h1 className=" font-semibold text-xl opacity-85">
              {" "}
              <span className=" text-primary">Frontend </span>Development
            </h1>
            <p className=" text-[#8892b0] mt-1 text-[0.9rem]">
              Proficient in developing modern frontend applications using React,
              and Next.js. Skilled in HTML, CSS, and Tailwind for building
              responsive user interfaces. Committed to delivering high-quality
              and user-friendly web experiences.
            </p>
          </div>

          <div id="card" className="p-4 rounded-xs bg-[#112240]">
            <h1 className=" font-semibold text-xl opacity-85">
              {" "}
              <span className=" text-primary">Backend </span>Development
            </h1>
            <p className=" text-[#8892b0] mt-1 text-[0.9rem]">
              Experienced in building and maintaining efficient backend systems
              using a variety of technologies such as Node.js, MySQL, Docker,
              TypeORM, TypeScript. Proficient in designing and implementing
              RESTful APIs and integrating with frontend applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
