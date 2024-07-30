'use client'
import React, { ReactElement } from 'react'
import ProgressBar from '../../ProgressBar'
import { skills1, skills2 } from '@/app/components/utils/skills'

interface PageProps {
  headerId: number
}

const Page = (props: PageProps): ReactElement => {
  const { headerId } = props

  return (
    <div className='flex flex-col lg:flex-row h-full font-custom py-12'>
      <div className='skills-section lg:w-1/2'>
        {skills1.map((skill) => (
          <div key={skill.id}>
            <h3>{skill.name}</h3>
            <ProgressBar percentage={skill.percentage} headerId={headerId} />
          </div>
        ))}
      </div>
      <div className='skills-section lg:w-1/2'>
        {skills2.map((skill) => (
          <div key={skill.id}>
            <h3>{skill.name}</h3>
            <ProgressBar percentage={skill.percentage} headerId={headerId} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
