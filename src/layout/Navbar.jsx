/* eslint-disable no-unused-vars */
import DropDown from "../components/ui/DropDown";
import NavButton from "../components/Nav/NavButton";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`pt-5 ${
        isSticky
          ? "fixed top-0 left-50 w-full z-50 bg-white shadow-md max-w-[1220px] mx-auto"
          : ""
      }`}
      id=""
    >
      <div>
        {/* Main Navbar */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo Section */}
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <img
              src="https://www.sleepingpillsuk.com/images/sleepingpils_05.png"
              alt="logo"
              className="h-12"
            />
          </div>

          {/* Middle Section - Hidden on Small Screens */}
          <div className="hidden md:block">
            <img
              src="https://www.sleepingpillsuk.com/images/head_btc.png"
              alt=""
              className="h-12"
            />
          </div>

          {/* Last Section - Moves Below Logo on Small Screens */}
          <div className="w-full md:w-auto flex items-center justify-center gap-2 mt-4 md:mt-0">
            <button className="p-3 bg-black text-white hover:bg-white hover:text-black border-1 border-black text-xs font-bold">
              (0) My Cart
            </button>
            <div className="bg-[#057793] border-none text-white text-xs">
              <DropDown />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <NavButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
