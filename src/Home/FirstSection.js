import React from 'react'
import Button from "../components/lib/Button";
import { FiArrowUpRight } from "react-icons/fi";

const FirstSection = () => {
  return (
       <div className="flex justify-evenly mx-40  "> 
      
      <div className=" text-left flex flex-col gap-3 mt-20">
        <h2 className="text-4xl text-[#4f4f4f]">Expert Bussiness</h2>
        <h1 className="text-7xl w-3/4 text-[#4f4f4f] ">It Services <span className="text-[#00aeef] font-bold">All in One Place</span></h1>
        <h4 className="w-3/4 text-xl mt-3">
          From cybersecurity to cloud solutions, we've got your business
          covered securely and efficiently
        </h4>
        <div className="flex gap-4 items-center my-5">
          <Button
            name="Get Started"
            navClassName="bg-[#00aeef] text-white text-lg font-semibold px-8 py-2 rounded-3xl tracking-wide"
          />
          <Button
            name="Book Demo"
            navClassName="bg-transparent flex items-center gap-2 border text-lg font-semibold px-8 py-2 rounded-3xl tracking-wide"
            icons={<FiArrowUpRight size={12}/>}
          />
        </div>
      </div>

      <div className="">
        <img src="./images/mainn.png" alt="main" className="w-[520px] h-[720px]"/>
      </div>
    
    </div>
  )
}

export default FirstSection
