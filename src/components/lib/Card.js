import React from 'react'

const Card = ({icon, name, text, cardClassName , paraClassName}) => {
  return (
    <div className={cardClassName}>
        <p className="w-12 h-12 rounded-full border border-[#00aeef] bg-gray-100 flex justify-center items-center"><span className=''>{icon}</span></p>
        <div className="">
        <p className={paraClassName}>{name}</p>
        <p className=''>{text}</p>
        </div>
    </div>
  )
}

export default Card
