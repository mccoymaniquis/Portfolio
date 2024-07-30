'use client'
import React, { ReactElement } from 'react'

interface ProgressBarProps {
  percentage: number
}

const ProgressBar = ({ percentage }: ProgressBarProps): ReactElement => {
  return (
    <div className='progress-bar-container'>
      <div
        className='progress-bar bg-progress'
        style={{ width: `${percentage}%` }}
      >
        <span className='progress-bar-text pl-12'>{percentage}%</span>
      </div>
    </div>
  )
}

export default ProgressBar
