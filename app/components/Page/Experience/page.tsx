'use client'
import React, { ReactElement } from 'react'
import ExperienceLayout from './ExperienceLayout'
import { experiences } from '@/app/components/utils/experience'

interface PageProps {}

const Page = (props: PageProps): ReactElement => {
  return (
    <div className='py-12'>
      {experiences.map((experience) => {
        const { companyName, jobTitle, dateFromTo, details, id } = experience
        return (
          <ExperienceLayout
            key={id}
            companyName={companyName}
            jobTitle={jobTitle}
            dateFromTo={dateFromTo}
            details={details}
          />
        )
      })}
    </div>
  )
}

export default Page
