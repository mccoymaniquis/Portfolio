'use client'
import React, { ReactElement, useRef, useEffect } from 'react'
import CollapsibleNavigation from '../CollapsibleNavigation'
import FacebookIcon from '../../../public/icons/facebook.svg'
import LinkedInIcon from '../../../public/icons/linkedin.svg'
import InstagramIcon from '../../../public/icons/instagram.svg'
import { header } from '../utils/header'
import SocialMedia from './SocialMedia'

interface MainLayoutProps {
  children: React.ReactNode
  setHeaderId: (id: number) => void
  headerId: number
}

const MainHeader = (props: MainLayoutProps): ReactElement => {
  const { children, setHeaderId, headerId } = props
  const sectionsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = Number(entry.target.getAttribute('data-id'))
          setHeaderId(sectionId)
        }
      })
    }, observerOptions)

    sectionsRef.current.forEach((section) => observer.observe(section))

    return () => {
      sectionsRef.current.forEach((section) => observer.unobserve(section))
    }
  }, [setHeaderId])

  const accounts = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/louis-mccoy-maniquis-327925195/',
      image: (
        <LinkedInIcon
          width={25}
          height={25}
          className='text-white cursor-pointer'
        />
      ),
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/louis-mccoy-maniquis-327925195/',
      image: (
        <FacebookIcon
          width={25}
          height={25}
          className='text-white cursor-pointer'
        />
      ),
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/louis-mccoy-maniquis-327925195/',
      image: (
        <InstagramIcon
          width={25}
          height={25}
          className='text-white cursor-pointer'
        />
      ),
    },
  ]

  return (
    <div className='h-screen flex flex-col '>
      <div className='flex flex-row justify-between fixed top-0 w-full bg-main text-white z-10'>
        <CollapsibleNavigation
          header={header}
          headerId={headerId}
          setHeaderId={setHeaderId}
        />
        <div className='flex flex-row space-x-2 pt-4 pr-4'>
          {accounts.map((account) => (
            <SocialMedia key={account.id} link={account.link}>
              {account.image}
            </SocialMedia>
          ))}
        </div>
      </div>
      <main className='flex-grow overflow-auto mt-14'>
        {React.Children.map(children, (child, index) => (
          <div
            ref={(el) => {
              if (el) {
                sectionsRef.current[index] = el
              }
            }}
            data-id={index + 1}
            key={index}
          >
            {child}
          </div>
        ))}
      </main>
    </div>
  )
}

export default MainHeader
