import React from 'react'

const Image = ({srcName}) => {
  return (
    <div className="rounded">
        <img src={srcName} className="rounded-tr-[60px] rounded-bl-[60px] w-[550px] h-96 " />
      </div>
  )
}

export default Image
