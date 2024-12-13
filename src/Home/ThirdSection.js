import React from "react";
import Card from "../components/lib/Card";
import { CiLock } from "react-icons/ci";
import { SiSecurityscorecard } from "react-icons/si";
import { MdSecurity } from "react-icons/md";

const ThirdSection = () => {
  return (
    <div className="w-full  my-28 flex flex-col gap-12">
      <div className="w-[920px] mx-80 flex flex-col gap-5">
      <h1 className="text-5xl font-semibold ">Key Services</h1>
      <p className="text-lg text-[#4f4f4f]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique
        veritatis molestias consectetur ab? Velit cum rerum earum ipsa! Iste
        corporis fuga assumenda ea inventore quos ad optio eius eveniet
        provident atque tempore aliquid, quia modi laboriosam maxime a mollitia?
      </p>
      </div>
      <div className="flex gap-5 px-40">
        <Card
          icon={<CiLock size={28} color="#00aeef" />}
          name="CyberScurity Solution"
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='px-5 py-5 shadow-md flex flex-col gap-2 items-center'
        />
        <Card
          icon={<MdSecurity size={28} color="#00aeef" />}
          name="CyberScurity Solution"
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='px-5 py-5 shadow-md flex flex-col gap-2 items-center'
        />
        <Card
          icon={<SiSecurityscorecard size={28} color="#00aeef" />}
          name="CyberScurity Solution"
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='px-5 py-5 shadow-md flex flex-col gap-2 items-center'
        />
        <Card
          icon={<MdSecurity size={28} color="#00aeef"/>}
          name="CyberScurity Solution"
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='px-5 py-5 shadow-md flex flex-col gap-2 items-center'
        />
      </div>
    </div>
  );
};

export default ThirdSection;
