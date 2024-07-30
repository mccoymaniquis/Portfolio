'use client'
import React, { ReactElement } from 'react'
import Image from 'next/image'
import { person } from '../../utils/about'

const Page = (): ReactElement => {
  return (
    <div className='flex flex-col lg:flex-row h-full font-custom content lg:px-12 py-12'>
      <div className='flex flex-col justify-center space-y-4 pt-8 lg:w-2/3 '>
        <span className='text-[16px] text-shadow-xl'>Hello I am</span>
        <div className='flex flex-col items-center'>
          <span className='text-[30px] whitespace-normal md:whitespace-nowrap lg: md:text-[40px] lg:text-[35px] xl:text-[50px]  font-custom text-typewriter text-shadow-xl '>
            {person.name.toLocaleUpperCase()}
          </span>
        </div>
        <span className='text-[14px] font-sans text-shadow-xl'>
          {person.title}
        </span>
        <span className='text-[16px] text-shadow-xl'>{person.description}</span>
      </div>
      <div className='flex justify-center items-center pt-4 lg:w-1/3'>
        <Image
          src='/home_image.jpg'
          alt='My Photo'
          height={350}
          width={350}
          className='rounded-full '
        />
      </div>
    </div>
  )
}

export default Page
