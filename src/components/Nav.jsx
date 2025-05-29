import React, { useEffect, useState } from "react";
import logo from "../assets/logoRender.png";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(true);  

  const toggleSidebar = () => {
    setIsOpen(true)
  }
  


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
      

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = scrolled ? "text-gray-900" : "text-white";

  return (
    <div
      className={`fixed top-0 left-0 w-full h-20 z-50 flex justify-between items-center px-6 transition-colors duration-300 ${
        scrolled ? "bg-[#f4ebd0] shadow-md" : "bg-transparent"
      }`}
    >
      <button className={`text-2xl font-bold clickable ${textColor}`} onClick={toggleSidebar}>
        <FaBars />
      </button>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} setIsOpen={setIsOpen}  />
      <div className="flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
        <span className="w-[60px] flex-shrink-0">
          <img
            src={logo}
            alt="logo"
            className={`w-full transition duration-300 ${
              scrolled ? "" : "invert"
            }`}
          />
        </span>
        <h1 className={`text-2xl font-bold flex-shrink ${textColor}`}>
          Yard Dog Workwear
        </h1>
      </div>
      <ul className={`text-sm flex items-center gap-4 font-bold ${textColor} `}>
        <li >Instagram</li>
        <li >Facebook</li>
        <li >Twitter</li>
      </ul>
    </div>
  );
};
