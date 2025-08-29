import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from "./components/header/Header";
import Entrance from "./components/Entrance";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import HeroSection from "./components/HeroSection";
import BothSides from "./components/BothSides";

function App() {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(".theEntrance", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        delay: 2.8,
        ease: "power2.out",
      }).to("#theStart", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          const startEl = document.getElementById("theStart");
          if (startEl) startEl.style.display = "none";
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Full-screen splash/entrance screen */}
      <div
        id="theStart"
        className="fixed top-0 left-0 z-[9999] h-svh w-screen bg-[#020c1b] flex justify-center items-center"
      >
        <div className="theEntrance">
          <Entrance />
        </div>
      </div>

      {/* Main site content */}
      <main className="">
        {/* Email and quat  */}
        <BothSides />

        {/* Header  */}
        <div className="w-full fixed top-0 bg-[#0a192f] z-[60]">
          <Header />
        </div>

        {/* the main  */}
        <div className=" md:max-w-[70%] mx-auto mt-[6rem] p-4 ">
          <HeroSection />
        </div>
      </main>
    </>
  );
}

export default App;
