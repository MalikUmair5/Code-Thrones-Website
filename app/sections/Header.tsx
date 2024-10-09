"use client";
import { useState } from "react";
import companyLogo from "../../assets/companyLogo.png";
import React from "react";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="lg:px-20 xs:px-1 md:px-10 py-2 flex justify-between items-center">
      <div className=" flex items-center">
        <Image className="w-[100px]" src={companyLogo} alt="Company Logo" placeholder="blur" />
        <p className=" text-[24px]">ADELSOCIAL</p>
      </div>
      <div>
        <div className=" lg:hidden">
          <button className=" mr-3">
            {isMenuOpen ? (
              <CloseIcon onClick={toggleMenu} />
            ) : (
              <MenuIcon className=" text-[2-" onClick={toggleMenu} />
            )}
          </button>
        </div>

        <div className=" md:hidden lg:block sm:hidden xs:hidden lg:text-white">
          <ul className=" flex gap-8 font-[400] leading-normal text-[13px]">
            <li>About</li>
            <li>
              Domain & Hosting
              <KeyboardArrowDownIcon />
            </li>
            <li>
              Services
              <KeyboardArrowDownIcon />
            </li>
            <li>Contact</li>
            <li>
              <button>
                <SearchIcon /> Search
              </button>
            </li>
          </ul>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed bg-black text-white bg-opacity-90 flex flex-col justify-center items-center z-50 inset-0">
          <button className=" absolute top-4 right-4" onClick={toggleMenu}>
            <CloseIcon />
          </button>
          <ul className="text-2xl space-y-6">
            <li>about</li>
            <li>
              Domain & Hosting
              <KeyboardArrowDownIcon />
            </li>
            <li>
              Services
              <KeyboardArrowDownIcon />
            </li>
            <li>Contact</li>
            <li>
              <button>
                <SearchIcon /> Search
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
