import React from 'react'
import Card from '../../lib/Card'
import { MdHistoryEdu } from 'react-icons/md'

const ForthAbout = () => {
  return (
    <div className='bg-blue-50 py-20'>
      <h1 className='text-5xl text-center'>Why Choose <span className='font-bold text-[#00aeef]'>Secure365?</span></h1>
      <div className="grid grid-cols-2 mx-96 gap-4 mt-12">
      <Card
          icon={<MdHistoryEdu size={28} color="#00aeef" />}
          name="Real World Experience"
          paraClassName='text-2xl py-2'
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='pl-5 pr-12 py-10 bg-gray-50 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center text-center '
        />
      <Card
          icon={<MdHistoryEdu size={28} color="#00aeef" />}
          name="Comperhensive Solution"
          paraClassName='text-2xl py-2'
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='pl-5 pr-12 py-10 bg-gray-50 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center text-center '
        />
      <Card
          icon={<MdHistoryEdu size={28} color="#00aeef" />}
          name="Victim-Centric Approach"
          paraClassName='text-2xl py-2'
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='pl-5 pr-12 py-10 bg-gray-50 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center text-center '
        />
      <Card
          icon={<MdHistoryEdu size={28} color="#00aeef" />}
          name="Expert Team"
          paraClassName='text-2xl py-2'
          text="With Net Access cybersecurity solutions customers get a clearly defined cyber-strategy for their business."
          cardClassName='pl-5 pr-12 py-10 bg-gray-50 shadow-lg hover:shadow-xl flex flex-col gap-2 items-center text-center '
        />
      </div>
    </div>
  )
}

export default ForthAbout
