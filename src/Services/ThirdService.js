import React from 'react'
import Card from '../components/lib/Card'
import { CiLock } from 'react-icons/ci'

const ThirdService = () => {
  return (
    <div className='grid grid-cols-4 gap-5 bg-gray-100 w-full px-40 py-16 mx-auto '>
        <div className="flex items-center justify-between col-span-2 gap-5">
            <div className="">
            <p className='text-5xl'>Our Core</p>
            <p className='text-7xl font-bold'>Services</p>
            </div>
            <div className="">
                <img src="./images/ai.avif" alt="Service" className='h-64 w-60'/>
            </div>
        </div>
       
       <Card
          icon={<CiLock size={28} color="#00aeef" />}
          name="Secure Payment & Froud Detections"
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='pl-5 pr-12 py-5 bg-gray-50 shadow-md flex flex-col gap-2 items-left text-left '
        />
       <Card
          icon={<CiLock size={28} color="#00aeef" />}
          name="IT Detective Services & Scam Recovery"
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='pl-5 pr-12 py-5 bg-gray-50 shadow-md flex flex-col gap-2 items-left text-left '
        />
       <Card
          icon={<CiLock size={28} color="#00aeef" />}
          name="E-commerce Solution & Transaction Protect"
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='pl-5 pr-12 py-5 bg-gray-50 shadow-md flex flex-col gap-2 items-left text-left '
        />
       <Card
          icon={<CiLock size={28} color="#00aeef" />}
          name="Bussiness SEO & Digital Visibility"
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='pl-5 pr-12 py-5 bg-gray-50 shadow-md flex flex-col gap-2 items-left text-left '
        />
       <Card
          icon={<CiLock size={28} color="#00aeef" />}
          name="Inventory Management System"
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='pl-5 pr-12 py-5 bg-gray-50 shadow-md flex flex-col gap-2 items-left text-left '
        />
       <Card
          icon={<CiLock size={28} color="#00aeef" />}
          name="Inventory Management System"
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='pl-5 pr-12 py-5 bg-gray-50 shadow-md flex flex-col gap-2 items-left text-left '
        />
       <Card
          icon={<CiLock size={28} color="#00aeef" />}
          name="Inventory Management System"
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='pl-5 pr-12 py-5 bg-gray-50 shadow-md flex flex-col gap-2 items-left text-left '
        />
       <Card
          icon={<CiLock size={28} color="#00aeef" />}
          name="Inventory Management System"
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='pl-5 pr-12 py-5 bg-gray-50 shadow-md flex flex-col gap-2 items-left text-left '
        />
       <Card
          icon={<CiLock size={28} color="#00aeef" />}
          name="Inventory Management System"
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='pl-5 pr-12 py-5 bg-gray-50 shadow-md flex flex-col gap-2 items-left text-left '
        />
       <Card
          icon={<CiLock size={28} color="#00aeef" />}
          name="Inventory Management System"
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='pl-5 pr-12 py-5 bg-gray-50 shadow-md flex flex-col gap-2 items-left text-left '
        />
    </div>
  )
}

export default ThirdService
