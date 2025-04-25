import Image from 'next/image'

import React from 'react'

interface Props {
  bgColor: string
  imgSrc: string
  title: string
  value: number
}

function Badge({ bgColor, imgSrc, title, value }: Props) {
  return (
    <div className={`flex flex-1 justify-between overflow-hidden rounded-xl ${bgColor}`}>
      <div className='flex flex-col justify-center p-4'>
        <p className='flex-start text-start text-[64px] font-bold text-neutral-900'>{value}</p>
        <p className='text-xl text-neutral-900'>{title}</p>
      </div>
      <Image src={imgSrc} height={150} width={150} alt='pattern' className='-mr-6 opacity-80' />
    </div>
  )
}

export default Badge
