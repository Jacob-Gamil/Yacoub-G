import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-scroll";

const links = [
  { linkName: "home", href: "home" },
  { linkName: "about", href: "about" },
  { linkName: "projects", href: "projects" },
  { linkName: "contact", href: "contact" },
];

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const linkRef = useRef();

  useGSAP(() => {
    const items = linkRef.current?.querySelectorAll(".menuLink");

    if (isOpen) {
      gsap.to("#menuOne", { width: "70vw", duration: 0.5 });
      gsap.to("#menuTwo", { width: "30vw", duration: 0.5 });

      gsap.fromTo(
        items,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          delay: 0.2,
          ease: "power2.out",
          duration: 0.5,
        }
      );
    } else {
      gsap.to("#menuOne", { width: 0, delay: 0.2, duration: 0.5 });
      gsap.to("#menuTwo", { width: 0, duration: 0.5 });
    }
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={() => setIsOpen((open) => !open)}
        className="absolute right-[2rem] top-[2.4rem] z-11 text-primary text-3xl cursor-pointer"
        aria-label="Toggle menu"
      >
        {!isOpen ? <CiMenuBurger /> : <MdOutlineClose />}
      </button>

      <div
        id="menuOne"
        className="absolute z-10 w-0 right-0 top-0 h-screen flex justify-center bg-[#102240] overflow-hidden"
      >
        <div
          ref={linkRef}
          className="flex flex-col justify-center font-light  gap-6 h-full"
        >
          {links.map((link, index) => (
            <Link
              key={index}
              smooth={true}
              duration={200}
              offset={-180}
              onClick={() => setIsOpen((open) => !open)}
              className="menuLink text-white text-2xl capitalize hover:text-primary flex items-center gap-2"
              to={link.href}
            >
              <span className=" w-1 h-1 bg-primary block"></span>
              {link.linkName}
            </Link>
          ))}
        </div>
      </div>

      <div
        id="menuTwo"
        className="absolute w-0 left-0 top-0 h-screen bg-[#102240] blur-3xl"
      />
    </div>
  );
}

export default MainNav;
