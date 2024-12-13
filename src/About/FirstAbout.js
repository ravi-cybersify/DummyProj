import React from 'react'
import Button from "../components/lib/Button";
import { IoPlaySharp } from "react-icons/io5";

const FirstAbout = () => {
  return (
    <div className="flex justify-evenly items-center mx-12 my-12">
      <div className="rounded">
        <img src="./images/security.jpg" alt="security" srcset="" className="rounded-2xl" />
      </div>
      <div className="w-[420px] text-left flex flex-col gap-7">
        <p className="text-4xl font-semibold">About Security and our company</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          numquam omnis doloribus expedita, sit quis?
        </p>
        <ul className="list-disc ml-5">
            <li style={{ "::marker": "color: red" }}> Grow your bussiness the right ways</li>
            <li style={{ "::marker": "color: red" }}>Helping you to get better</li>
            <li style={{ "::marker": "color: red" }}>Grow your bussiness the right ways</li>
        </ul>
        <div className="flex gap-5">
        <Button
            name="Get Started"
            navClassName="bg-[#00aeef] text-white text-lg font-semibold px-8 py-2 rounded-3xl tracking-wide"
          />

            <div className="flex gap-2 items-center">
                <p className="border border-2 border-black rounded-full flex items-center  "><span className="px-2 py-2"><IoPlaySharp size={20} /></span></p>
                <span>How we works</span>
            </div>

        </div>
      </div>
    </div>
  )
}

export default FirstAbout
