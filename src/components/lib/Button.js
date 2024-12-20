import React from "react";

const Button = ({ name, navClassName, icons }) => {
 
  return (
    <button
      type="submit"
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
