import React from 'react'
import Card from '../components/lib/Card'
import { MdSecurity } from 'react-icons/md'
import { CiLock } from 'react-icons/ci'
import { SiSecurityscorecard } from 'react-icons/si'

const FifthSection = () => {
  return (
    <div className="w-full  my-28 flex flex-col gap-12">
    <div className="w-[920px] mx-80 flex flex-col gap-5 text-center">
    <h1 className="text-5xl font-semibold ">Our Promise</h1>
    <p className="text-lg text-[#4f4f4f]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique
      veritatis molestias consectetur ab? Velit cum rerum earum ipsa! Iste
      corporis fuga assumenda ea inventore quos ad optio eius eveniet
    </p>
    </div>

    <div className="flex gap-5 px-40">
      <Card
        icon={<CiLock size={28} color="#00aeef" />}
        iconClassName = 'pt-3'
        name="Expert Guidance"
        text="Leverage our teams cybersecurity solutions customers get business."
        cardClassName='px-5 py-5 shadow-md flex flex-row gap-4 text-left'
      />
      <Card
        icon={<MdSecurity size={28} color="#00aeef" />}
        iconClassName = 'pt-3'
        name="Hassle-Free Management"
        text="We take care of everything solutions customers get a clearly ."
        cardClassName='px-5 py-5 shadow-md flex flex-row gap-4 text-left'
      />
      <Card
        icon={<SiSecurityscorecard size={28} color="#00aeef" />}
        iconClassName = 'pt-3'
        name="Expert Guidance"
        text="With Net Access cybersecurity solutions customers get a clearly."
        cardClassName='px-5 py-5 shadow-md flex flex-row gap-4 text-left'
      />
    
    </div>
  </div>
  )
}

export default FifthSection
