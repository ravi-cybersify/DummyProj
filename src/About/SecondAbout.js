import React from 'react'
import Button from "../components/lib/Button";
import { IoPlaySharp } from "react-icons/io5";
import Card from '../components/lib/Card';
import { CiLock } from 'react-icons/ci';
import { GoGoal } from "react-icons/go";
import { MdHistoryEdu } from "react-icons/md";

const SecondAbout = () => {
  return (
    <div className="flex justify-evenly gap-12 items-center mx-40 my-12">
       <Card
          icon={<GoGoal size={28} color="#00aeef" />}
          name="Our Vision"
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='pl-5 pr-12 py-5 bg-gray-50 shadow-md flex flex-col gap-2 items-center text-center '
        />
       <Card
          icon={<GoGoal size={28} color="#00aeef" />}
          name="Our Mission"
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='pl-5 pr-12 py-5 bg-gray-50 shadow-md flex flex-col gap-2 items-center text-center '
        />
       <Card
          icon={<MdHistoryEdu size={28} color="#00aeef" />}
          name="Our History"
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='pl-5 pr-12 py-5 bg-gray-50 shadow-md flex flex-col gap-2 items-center text-center '
        />
      
    </div>
  )
}

export default SecondAbout
