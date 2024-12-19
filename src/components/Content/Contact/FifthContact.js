import React from 'react'
import Card from '../../lib/Card'
import { GoGoal } from 'react-icons/go'
import { MdHistoryEdu } from 'react-icons/md'

const FifthContact = () => {
  return (
    <div className="flex flex-col gap-8 my-20">
        <h1 className='text-center text-4xl font-semibold'>Why Contact Secure365?</h1>
        <div className="flex justify-evenly gap-12 items-center mx-40 mt-3 mb-12">
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
  )
}

export default FifthContact
