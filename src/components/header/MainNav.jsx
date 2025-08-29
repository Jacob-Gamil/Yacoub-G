import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { SlSocialGithub } from "react-icons/sl";

const links = [
  { linkName: "about", href: "/about" },
  { linkName: "expertise", href: "/expertise" },
  { linkName: "work", href: "/work" },
  { linkName: "contact", href: "/about" },
];

function MainNav() {
  const linksRef = useRef();

  useGSAP(() => {
    const items = linksRef.current?.querySelectorAll(".mainLink");

    gsap.from("#git", {
      y: -3,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "power1.inOut",
    });

    gsap.fromTo(
      items,
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        delay: 4,
        duration: 0.1,
      }
    );
  }, []);

  return (
    <div ref={linksRef} className=" flex gap-4 capitalize items-center">
      {links.map((link) => (
        <a
          key={link.linkName}
          href={link.href}
          className={`mainLink flex items-center font-light gap-1 duration-300 opacity-90 p-2 hover:text-primary`}
        >
          <span className=" w-1 h-1 block bg-primary rounded-full"></span>
          {link.linkName}
        </a>
      ))}

      <a
        id="github"
        href="https://github.com/Yacoub-Gamil?tab=repositories"
        target="_blank"
        className="mainLink  opacity-80 flex flex-col items-center text-2xl justify-center"
      >
        <SlSocialGithub id="git" className=" text-primary" />
        <span className=" w-1 h-1 bg-white block rounded-full"></span>
      </a>
    </div>
  );
}

export default MainNav;
