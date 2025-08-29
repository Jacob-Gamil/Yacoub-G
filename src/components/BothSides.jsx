function BothSides() {
  return (
    <div>
      <div className=" hidden md:block fixed bottom-[10rem] right-0 cursor-pointer hover:text-primary duration-300 ">
        <a className=" rotate-90 text-xs font-light block hover:-translate-y-1.5 duration-200 opacity-60 hover:opacity-100">
          yacoub-gmil@hotmail.com
        </a>
        <span className="opacity-60 w-[1px] h-[6rem] bg-amber-50 absolute -bottom-[11rem] left-[4.2rem]"></span>
      </div>

      <div className=" hidden md:block fixed bottom-[12rem] cursor-pointer duration-300 ">
        <p className=" w-[8rem] absolute -bottom-[10rem] left-5 opacity-60 text-xs  ">
          A lifelong-learning programmer
        </p>
        <span className="opacity-60 w-[1px] h-[2rem] bg-amber-50 absolute -bottom-[12.5rem] left-[5.5rem]"></span>
      </div>
    </div>
  );
}

export default BothSides;
