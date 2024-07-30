import React, { ReactElement } from 'react'
import ProgressBar from '../../ProgressBar'
import { skills1, skills2 } from '@/app/components/utils/skills'

// Define Skill type here
interface Skill {
  id: number
  name: string
  percentage: number
}

interface SkillsProps {}

const Page = ({}: SkillsProps): ReactElement => {
  return (
    <div className='flex flex-col lg:flex-row h-full font-custom py-12'>
      <div className='skills-section lg:w-1/2'>
        {skills1.map((skill: Skill) => (
          <div key={skill.id}>
            <h3>{skill.name}</h3>
            <ProgressBar percentage={skill.percentage} />
          </div>
        ))}
      </div>
      <div className='skills-section lg:w-1/2'>
        {skills2.map((skill: Skill) => (
          <div key={skill.id}>
            <h3>{skill.name}</h3>
            <ProgressBar percentage={skill.percentage} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
