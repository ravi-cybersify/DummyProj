import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="flex justify-between items-center my-3 px-40 ">
      <div className="">
        <img src="./images/logo.png" alt="logo" className="w-40 h-18" />
      </div>
      <div className="flex items-center gap-7">
        <ul className="flex gap-7">
          <Link to={"/"}>
            <li>
              <button
                type="button"
                onClick={() => setActive("home")}
                className={`${
                  active === "home" ? "text-[#397193]" : "text-gray-400"
                }`}
              >
                HOME
              </button>
            </li>
          </Link>
          <Link to={"/services"}>
            <li>
              <button
                type="button"
                onClick={() => setActive("services")}
                className={`${
                  active === "services" ? "text-[#397193]" : "text-gray-400"
                }`}
              >
                SERVICES
              </button>
            </li>
          </Link>
          <Link to={"/about"}>
            <li>
              <button
                type="button"
                onClick={() => setActive("about")}
                className={`${
                  active === "about" ? "text-[#397193]" : "text-gray-400"
                }`}
              >
                ABOUT US
              </button>
            </li>
          </Link>
          <Link to={"/contact"}>
            <li>
              <button
                type="button"
                onClick={() => setActive("contact")}
                className={`${
                  active === "contact" ? "text-[#397193]" : "text-gray-400"
                }`}
              >
                CONTACT US
              </button>
            </li>
          </Link>
          <Link to={"/login"}>
            <li>
              <button
                type="button"
                onClick={() => setActive("login")}
                className={`${
                  active === "login" ? "text-[#397193]" : "text-gray-400"
                }`}
              >
                LOGIN
              </button>
            </li>
          </Link>
        </ul>
        <Link to={"/register"}>
        <button
          type="button"
          onClick={() => setActive("register")}
          className={`${
            active === "register" ? "text-gray-400" : "text-white"
          } bg-[#397193] rounded-2xl px-3 py-1 flex items-center gap-1`}
       
        >
          SIGN UP{" "}
          <span className="bg-white rounded-full text-[#397193] p-1 ">
            <FiArrowUpRight size={14} />
          </span>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
