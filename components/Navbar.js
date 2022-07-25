import React, { useState } from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

//List Items
const NavItem = (props) => {
  return (
    <div>
      <li>
        <a
          href={props.href}
          className="font-barlow hover:text-black duration-400 "
        >
          {props.text}
        </a>
      </li>
    </div>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] bg-blue font-barlow text-white ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <h1 className=" ml-3 text-xl md:text-3xl cursor-pointer">sunnysid</h1>
        <div className="flex items-center justify-between space-x-10 ">
          <ul className="hidden md:flex md:items-center space-x-10">
            <NavItem href="/about" text="About" />
            <NavItem href="/services" text="Services" />
            <NavItem href="/projects" text="Projects" />
          </ul>

          <div className="hidden md:flex pr-4">
            <button className="bg-white hover:bg-white hover:text-white hover:bg-opacity-25 transition duration-400">
              CONTACT
            </button>
          </div>
        </div>

        {/* Hamburger Nav */}
        <div className="md:hidden mr-4 " onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <div className="relative ">
        <img src="/desktop/image-header.jpg" alt="notion-image" />

        <ul
          className={
            !nav
              ? "hidden"
              : "md:hidden flex flex-col justify-center items-center bg-white text-greyish px-10 py-5 space-y-2 absolute top-12 right-12 -translate-y-1/2 "
          }
        >
          <NavItem href="/about" text="About" />
          <NavItem href="/services" text="Services" />
          <NavItem href="/projects" text="Projects" />
          <button className=" bg-yellow hover:bg-white hover:text-white hover:bg-opacity-25 transition duration-400 text-sm ml-5">
            CONTACT
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
