import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Entrance() {
  useGSAP(() => {
    gsap.to(".lineOne", {
      scaleY: 25,
      delay: 0.5,
      duration: 0.2,
      display: "block",
      transformOrigin: "top",
      ease: "power2",
    });

    gsap.to(".lineTwo", {
      opacity: 1,
      scaleY: 25.6,
      delay: 0.7,
      duration: 0.1,
      display: "block",
      transformOrigin: "top",
      ease: "power2",
    });

    gsap.to(".lineThree", {
      opacity: 1,
      scaleY: 25,
      delay: 0.8,
      duration: 0.1,
      display: "block",
      transformOrigin: "top",
      ease: "power2",
    });

    gsap.to(".lineFuor", {
      opacity: 1,
      scaleY: 25,
      delay: 0.9,
      duration: 0.1,
      display: "block",
      transformOrigin: "bottom",
      ease: "power2",
    });
    gsap.to(".lineFive", {
      opacity: 1,
      scaleY: 25,
      delay: 1,
      duration: 0.1,
      display: "block",
      transformOrigin: "bottom",
      ease: "power2",
    });
    gsap.to(".lineSix", {
      opacity: 1,
      scaleY: 25,
      delay: 1.1,
      duration: 0.1,
      display: "block",
      transformOrigin: "bottom",
      ease: "power2.in",
    });
    gsap.from(".y", {
      opacity: 0,
      delay: 1.3,
      duration: 0.4,
      ease: "power2.in",
    });
  }, []);

  return (
    <div className=" relative w-[15rem] h-[15rem] rounded-full scale-[0.5]">
      <span className="lineOne absolute top-[-0.2rem] right-1/2 hidden w-[0.6rem] h-1 bg-[#64ffda] rotate-60" />
      <span className="lineTwo top-[2.7rem] left-[1.7rem] absolute w-[0.6rem] h-1 hidden bg-[#64ffda]" />
      <span className="lineThree bottom-[5.8rem] left-[1.6rem] absolute w-[0.6rem] h-1 hidden bg-[#64ffda] -rotate-60" />
      <span className="lineFuor bottom-[3rem] right-[7.7rem] absolute w-[0.6rem] h-1 hidden bg-[#64ffda] rotate-60" />
      <span className="lineFive top-[8.8rem] right-[2.4rem] absolute w-[0.6rem] h-1 hidden bg-[#64ffda]" />
      <span className="lineSix top-[2.7rem] right-[2.3rem] absolute w-[0.6rem] h-1 hidden bg-[#64ffda] -rotate-60" />

      <h1 className="y font-semibold font-serif absolute top-[2rem] text-9xl left-[4.1rem] text-[#64ffda]">
        Y
      </h1>
    </div>
  );
}

export default Entrance;
