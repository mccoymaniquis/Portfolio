// src/components/ProgressBar.tsx
import React, { useEffect, useState, useRef, ReactElement } from 'react'

interface ProgressBarProps {
  percentage: number
  headerId: number
}

const ProgressBar = (props: ProgressBarProps): ReactElement => {
  const { percentage, headerId } = props
  const [currentPercentage, setCurrentPercentage] = useState(0)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (headerId === 2) {
      // Start or continue animation when headerId is 2
      const animate = () => {
        setCurrentPercentage((prev) => {
          if (prev < percentage) {
            return prev + 1 // Increment percentage
          }
          cancelAnimationFrame(animationRef.current as number) // Stop animation
          return prev
        })
        animationRef.current = requestAnimationFrame(animate)
      }

      animate()

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current) // Clean up animation frame
        }
      }
    } else {
      // Reset progress bar to 0% when headerId is not 2
      setCurrentPercentage(0)
    }
  }, [headerId, percentage])

  return (
    <div className='progress-bar-container'>
      <div
        className='progress-bar bg-progress'
        style={{ width: `${currentPercentage}%` }}
      >
        <span className='progress-bar-text pl-12'>{currentPercentage}%</span>
      </div>
    </div>
  )
}

export default ProgressBar
