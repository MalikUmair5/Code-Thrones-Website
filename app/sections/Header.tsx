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
  let [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="lg:px-20 xs:px-8 md:px-20 py-2 flex justify-between items-center">
      <div className=" flex items-center">
        <Image height={89} width={100} src={companyLogo} alt="Company Logo" />
        <p className=" text-[24px]">ADELSOCIAL</p>
      </div>

      <div>
        <div className=" lg:hidden">
          <button>
            {isMenuOpen ? (
              <CloseIcon onClick={toggleMenu} />
            ) : (
              <MenuIcon onClick={toggleMenu} />
            )}
          </button>
        </div>
        <div className=" md:hidden lg:block sm:hidden xs:hidden">
          <ul className=" flex gap-8">
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
