import React, { ReactElement } from 'react'

interface ExperienceLayoutProps {
  companyName: string
  jobTitle: string
  dateFromTo: string
  details: string[]
}

const ExperienceLayout = (props: ExperienceLayoutProps): ReactElement => {
  const { companyName, jobTitle, dateFromTo, details } = props
  return (
    <>
      <div className='p-6 bg-sub rounded-lg shadow-md m-6'>
        {/* Header Section */}
        <div className='mb-6 flex justify-between'>
          <div>
            <span className='block text-2xl font-semibold uppercase'>
              {jobTitle}
            </span>
            <span className='block text-white'>{companyName}</span>
          </div>
          <span className='block text-white text-lg mb-1'>{dateFromTo}</span>
        </div>

        {/* Details Section */}
        <div className='space-y-4'>
          {details.map((detail, index) => {
            return (
              <div key={index} className='flex items-start'>
                <div className='w-4 h-4 bg-white rounded-full mt-1 mr-4 pl-4'></div>
                <div className='text-white'>{detail}</div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ExperienceLayout
