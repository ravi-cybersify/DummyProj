import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-3 px-40 ">
      <div className="">
        <img src="./images/logo.png" alt="logo" className="w-40 h-18" />
      </div>
      <div className="flex items-center gap-7">
        <ul className="flex gap-7">
          <Link to={"/"}>
            <li className="text-[#397193]">HOME</li>
          </Link>
          <Link to={"/services"}>
            <li>SERVICES</li>
          </Link>
          <Link to={"/about"}>
            <li>ABOUT US</li>
          </Link>
          <Link to={"/contact"}>
            <li>CONTACT US</li>
          </Link>
          <Link to={"/login"}>
            <li>LOGIN</li>
          </Link>
        </ul>
        <button
          type="button"
          className="bg-[#397193] text-white rounded-2xl px-3 py-1 flex items-center gap-1"
        >
          SIGN UP{" "}
          <span className="bg-white rounded-full text-[#397193] p-1 ">
            <FiArrowUpRight size={14} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
