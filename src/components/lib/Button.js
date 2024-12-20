import React from "react";
// import { useLocation } from "react-router-dom";

const Button = ({ name, navClassName, icons }) => {
  // const location = useLocation();
  // const pathName = location.pathname;

  // const handleSubmit = () => {
  //   window.location.reload();
  // };
  return (
    <button
      type="submit"
      // onSubmit={pathName === "/login" && handleSubmit}
      className={navClassName}
    >
      {name}{" "}
      {icons && (
        <span className="bg-black text-white rounded-full text-[#397193] p-1 ">
          {icons}
        </span>
      )}
    </button>
  );
};

export default Button;
