import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
   window.scrollY >= 240 ? setNavBg(true) : setNavBg(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    }
  }, [])

  return (
    <div
      className={`fixed w-full flex justify-between items-center px-36  ${
        pathName !== "/" ? navBg ?"bg-white" : "bg-transparent" : "bg-white"
      } `}
    >
      <div className="">
        <img
          src={`${
            pathName === "/" ? "./images/logo.png" : "./images/logor.png"
          }`}
          alt="logo"
          className="w-40 h-18"
        />
      </div>
      <div className="flex items-center gap-7">
        <ul className="flex gap-7">
          <Link to={"/"}>
            <li>
              <button
                type="button"
                className={`${
                  pathName === "/" ? "text-blue-500" : "text-gray-400"
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
                className={`${
                  pathName === "/services" ? "text-blue-500" : "text-gray-400"
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
                className={`${
                  pathName === "/about" ? "text-blue-500" : "text-gray-400"
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
                className={`${
                  pathName === "/contact" ? "text-blue-500" : "text-gray-400"
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
                className={`${
                  pathName === "/login" ? "text-blue-500" : "text-gray-400"
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
            className={`${
              (pathName === "/register" ||
                pathName === "/login" ||
                pathName === "/") ?
              "text-white bg-[#00aeef]" : "bg-white"
            }  rounded-2xl border border-[#00aeef] px-3 py-1 flex items-center gap-1`}
          >
            SIGN UP{" "}
            <span
              className={`${
                pathName === "/about" ||
                pathName === "/contact" ||
                pathName === "/services"
                  ? "bg-[#397193] text-white rounded-full"
                  : "bg-white rounded-full text-[#397193]"
              }`}
            >
              <FiArrowUpRight size={14} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
