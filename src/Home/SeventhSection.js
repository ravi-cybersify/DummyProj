import React from "react";
import Button from "../components/lib/Button";

const SeventhSection = () => {
  return (
    <div className="flex justify-evenly items-center mx-12 my-28">
      <div className="w-[570px] text-left flex flex-col gap-7">
        <p className="text-4xl font-semibold">What Makes Us Different?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          numquam omnis doloribus expedita, sit quis? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Similique voluptatibus expedita
          esse rerum aperiam aspernatur ratione? Quidem eveniet rem magnam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet
          debitis alias soluta perferendis error, quo quisquam aliquam earum
          quia.
        </p>
        <div className="flex gap-5">
          <Button
            name="Get Started"
            navClassName="bg-[#00aeef] text-white text-lg font-semibold px-8 py-2 rounded-3xl tracking-wide"
          />
        </div>
      </div>

      <div className="rounded">
        <img
          src="./images/compMan.webp"
          alt="security"
          srcSet=""
          className="rounded-2xl w-[500px] h-80"
        />
      </div>
    </div>
  );
};

export default SeventhSection;
