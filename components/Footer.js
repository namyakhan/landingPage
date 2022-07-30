import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

//List Items
const FooterItem = (props) => {
  return (
    <div>
      <li>
        <a
          href={props.href}
          className="font-barlow text-sm hover:text-white duration-400 cursor-pointer "
        >
          {props.text}
        </a>
      </li>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-[#81CACF] text-center text-green py-20">
      <h2 className="font-barlow text-2xl   font-extrabold  tracking-wide">
        sunnyside
      </h2>

      <ul className="flex items-center justify-center space-x-12 mt-5 mb-10">
        <FooterItem text="About" />
        <FooterItem text="Services" />
        <FooterItem text="Projects" />
      </ul>
      <div className="flex text-center justify-center space-x-5 ">
        <FaFacebookSquare className="hover:text-white cursor-pointer" />
        <FaInstagram className="hover:text-white cursor-pointer" />
        <FaTwitter className="hover:text-white cursor-pointer" />
        <FaPinterest className="hover:text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
