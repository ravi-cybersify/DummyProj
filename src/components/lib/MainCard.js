import React from 'react'

const MainCard = ({image, name, text}) => {
  return (
    <div className='border shadow-lg bg-[#e3f0ff] my-5'>
      <div className="bg-white px-12 py-12 ">
      <img src={image} alt="" srcset="" />
      </div>
      <p className='text-lg'>{name}</p>
      <p>{text}</p>
      <div className="">

      </div>
    </div>
  )
}

export default MainCard
