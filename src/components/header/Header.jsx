import { useGSAP } from "@gsap/react";
import Logo from "./Logo";
import MainNav from "./MainNav";
import MenuNav from "./MenuNav";

function Header() {
  useGSAP(() => {}, []);
  return (
    <div className=" max-w-[95%] lg:max-w-[90%] py-4 mx-auto flex items-center justify-between ">
      <Logo />

      <div className=" md:hidden">
        <MenuNav />
      </div>

      <div className=" hidden md:block">
        <MainNav />
      </div>
    </div>
  );
}

export default Header;
