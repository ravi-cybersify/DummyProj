import React from "react";
import MainCard from "../components/lib/MainCard";

const ThirdAbout = () => {
  return (
    <div className="flex justify-evenly items-center mx-12 my-20">
      <div className="text-center flex flex-col gap-4">
        <p className="text-4xl font-semibold">
          About Team Members Of Cyber Security
        </p>
        <p>
          The single most expensive loss due to a cybersecurity exploit was the
          ILOVEYOU or Love Bug email worm of 2000.
        </p>
        <div className="flex gap-5">
          <MainCard
            image="./images/Priya-Yadav.png"
            name="Priya Yadav"
            text="PROJECT MANAGER"
          />
          <MainCard
            image="./images/team_member_image_1.webp"
            name="Aticus Sterllin"
            text="SYSTEM ENGINEER"
          />
          <MainCard
            image="./images/team_member_image_4.webp"
            name="Orien Jasper"
            text="IT CONSULTANT"
          />
          <MainCard
            image="./images/team_member_image_5.webp"
            name="Daxton Atlas"
            text="SYSTEM ENGINEER"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdAbout;
