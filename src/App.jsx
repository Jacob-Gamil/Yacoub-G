import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from "./components/header/Header";
import Entrance from "./components/Entrance";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Projects from "./components/projectSection/Projects";
import BothSides from "./components/BothSides";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

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
      <main id="main" className=" cursor-default ">
        {/* Email and quat  */}
        <BothSides />

        {/* Header  */}
        <div className="w-full fixed top-0 bg-[#0a192f] z-[60]">
          <Header />
        </div>

        {/* the main  */}
        <div className=" max-w-[95%] md:max-w-[98%] lg:max-w-[85%] xl:max-w-[70%] mx-auto mt-[6rem]">
          <HeroSection />
          <AboutSection />
          <Projects />
          <Contact />
        </div>
        <Toaster />
      </main>
    </>
  );
}

export default App;
