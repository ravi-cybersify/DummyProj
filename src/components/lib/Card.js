import React from 'react'

const Card = ({icon, name, text, cardClassName}) => {
  return (
    <div className={cardClassName}>
        <p className="w-12 px-2 py-2 rounded-full bg-gray-100">{icon}</p>
        <div className="">
        <p className='text-2xl py-2'>{name}</p>
        <p className=''>{text}</p>
        </div>
    </div>
  )
}

export default Card
