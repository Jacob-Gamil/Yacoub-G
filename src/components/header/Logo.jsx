import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Logo() {
  useGSAP(() => {
    gsap.from(".logo", {
      opacity: 0,
      duration: 0.5,
      scale: 0.8,
      delay: 3.5,
      ease: "power1.in",
    });
  }, []);

  return (
    <a href="/" className="logo z-13">
      <img src="/logo.png" alt="logo" className=" w-[5rem]" />
    </a>
  );
}

export default Logo;
