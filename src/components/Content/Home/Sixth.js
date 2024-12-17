import React from 'react'
import MainCard from '../../lib/MainCard'

const Sixth = () => {
  return (
    <div className='text-center'>
      <h1 className='text-4xl font-semibold text-center'>Top Skilled experts</h1>
      <div className="flex gap-4 justify-center">
        <MainCard image='./images/Priya-Yadav.png' name='Priya Yadav' text='PROJECT MANAGER' />
        <MainCard image='./images/team_member_image_1.webp' name='Aticus Sterllin' text='SYSTEM ENGINEER' />
        <MainCard image='./images/team_member_image_4.webp' name='Orien Jasper' text='IT CONSULTANT' />
        <MainCard image='./images/team_member_image_5.webp' name='Daxton Atlas' text='SYSTEM ENGINEER' />
      </div>
    </div>
  )
}

export default Sixth
