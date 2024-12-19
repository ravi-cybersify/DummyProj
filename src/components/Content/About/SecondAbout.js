import React from "react";

import Card from "../../lib/Card";

import { GoGoal } from "react-icons/go";
import { MdHistoryEdu } from "react-icons/md";

const SecondAbout = () => {
  return (
    <div className="">
      <p className="mx-40">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a,
        tenetur laborum cum iusto nihil consequatur aliquid autem commodi
        blanditiis qui. Voluptatem doloremque dignissimos laboriosam beatae!
        Temporibus sit, voluptates, excepturi vero consequuntur minus cupiditate
        porro dicta possimus consequatur iure debitis.
      </p>

      <div className="flex justify-evenly gap-12 items-center mx-40 my-12">
      <Card
        icon={<GoGoal size={28} color="#00aeef" />}
        name="Our Vision"
        paraClassName='text-2xl py-2'
        text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
        cardClassName="pl-5 pr-12 py-10 bg-gray-50 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center text-center "
      />
      <Card
        icon={<GoGoal size={28} color="#00aeef" />}
        name="Our Mission"
        paraClassName='text-2xl py-2'
        text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
        cardClassName="pl-5 pr-12 py-10 bg-gray-50 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center text-center "
      />
      <Card
        icon={<MdHistoryEdu size={28} color="#00aeef" />}
        name="Our History"
        paraClassName='text-2xl py-2'
        text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
        cardClassName="pl-5 pr-12 py-10 bg-gray-50 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center text-center "
      />
    </div>
    </div>
  );
};

export default SecondAbout;
