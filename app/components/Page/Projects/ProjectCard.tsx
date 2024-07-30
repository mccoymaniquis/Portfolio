import React, { ReactElement } from 'react'
import CodeIcon from '@/public/icons/code.svg'

interface ProjectCardProps {
  title: string
  imageUrl: string
  sourceCodeUrl: string
}

const ProjectCard = (props: ProjectCardProps): ReactElement => {
  const { title, imageUrl, sourceCodeUrl } = props
  return (
    <div className='border p-4 flex flex-col w-full rounded-md'>
      {/* First child div: 25% height */}
      <div className='flex-shrink-0 h-[25%] flex items-start'>
        <span className='text-[16px] lg:text-[18px]'>{title}</span>
      </div>
      {/* Second child div: 50% height */}
      <div className='flex-grow h-[50%] flex justify-center items-center'>
        <img
          src={imageUrl}
          alt='My Photo'
          className='h-full w-full object-contain rounded-md'
        />
      </div>
      {/* Third child div: 25% height */}
      <div className='flex-shrink-0 h-[25%] flex items-end'>
        <a
          className='flex flex-row space-x-2 pt-2 cursor-pointer'
          href={sourceCodeUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <CodeIcon height={25} width={25} className='text-white border' />
          <span>Source Code</span>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
