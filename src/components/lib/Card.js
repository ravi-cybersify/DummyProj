import React from 'react'

const Card = ({icon,iconClassName, name, text, cardClassName}) => {
  return (
    <div className={cardClassName}>
        <p className={iconClassName}>{icon}</p>
        <div className="">
        <p className='text-2xl py-2'>{name}</p>
        <p>{text}</p>
        </div>
    </div>
  )
}

export default Card
