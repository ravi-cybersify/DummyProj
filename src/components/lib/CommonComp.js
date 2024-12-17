import React from 'react'
import Button from './Button'
import Image from './Image'

const CommonComp = ({name,text,textClassName,para,compClassName,btnName,btnClassName,imageSrc}) => {
  return (
    <div className={compClassName}>
      <div className="w-[570px] text-left flex flex-col gap-7">
        <p className="text-4xl font-semibold">{name}</p>
        <p className={textClassName}>
          {text}
        </p>
        <p>
          {para}
        </p>
        <div className="flex gap-5">
        <Button
          name={btnName}
          navClassName={btnClassName}
        />
        </div>
      </div>

      <div className="rounded">
        <Image
          srcName={imageSrc}
        />
      </div>
    </div>
  )
}

export default CommonComp
