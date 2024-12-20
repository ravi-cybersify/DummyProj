import React from "react";
import CommonComp from "../../lib/CommonComp";

const SixthContact = () => {
  return (
    <CommonComp
      name="Our Promise"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          numquam omnis doloribus expedita, sit quis? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Similique voluptatibus expedita
          esse rerum aperiam aspernatur ratione? Quidem eveniet rem magnam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet
          debitis alias soluta perferendis error, quo quisquam aliquam earum
          quia."
      textClassName="leading-10"
      compClassName="flex justify-evenly items-center mx-12 my-28"
      btnName="Contact us"
      btnClassName="bg-[#00aeef] text-white text-lg font-semibold px-8 py-2 rounded-3xl tracking-wide"
      imageSrc="./images/compMan.webp"
    />
  );
};

export default SixthContact;
