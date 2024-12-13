import React from 'react'
import MainCard from '../components/lib/MainCard'

const Sixth = () => {
  return (
    <div className=''>
      <h1 className='text-4xl font-semibold'>Top Skilled experts</h1>
      <div className="flex gap-4">
        <MainCard image='./images/man.png' name='Daxton Atlas' text='Project Manager' />
        <MainCard image='./images/man.png' name='Daxton Atlas' text='Project Manager' />
        <MainCard image='./images/man.png' name='Daxton Atlas' text='Project Manager' />
        <MainCard image='./images/man.png' name='Daxton Atlas' text='Project Manager' />
      </div>
    </div>
  )
}

export default Sixth
