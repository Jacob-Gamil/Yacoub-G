import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ImFacebook, ImInstagram, ImLinkedin } from "react-icons/im";

function BothSides() {
  useGSAP(() => {
    gsap.from("#sides", {
      opacity: 0,
      duration: 0.5,
      delay: 3.8,
    });
  }, []);
  return (
    <div id="sides">
      <div className=" hidden md:block fixed bottom-[10rem] right-[-3rem] cursor-pointer hover:text-primary duration-300 ">
        <a className=" rotate-90 font-light block hover:-translate-y-1.5 duration-200 opacity-60 hover:opacity-100">
          yacoub-gmil@hotmail.com
        </a>
        <span className="opacity-60 w-[1px] h-[6rem] bg-amber-50 absolute -bottom-[12rem] left-[5.5rem]"></span>
      </div>

      <div className=" hidden md:block fixed bottom-[12rem] duration-300 ">
        <div className=" flex gap-4 absolute -bottom-[7.5rem] left-7 opacity-60">
          <ImFacebook />
          <ImLinkedin />
          <ImInstagram />
        </div>
        <p className=" w-[8rem] absolute -bottom-[10rem] left-[1.5rem] opacity-60 text-xs  ">
          A lifelong-learning programmer
        </p>
        <span className="opacity-60 w-[1px] h-[2rem] bg-amber-50 absolute -bottom-[12.5rem] left-[5.5rem]"></span>
      </div>
    </div>
  );
}

export default BothSides;
