import React, { ReactElement } from 'react'
import { scrollToSection } from './ScrollToSection'

interface HeaderItem {
  id: number
  description: string
  title: string
}

interface NavigationHeaderProps {
  header: HeaderItem[]
  headerId: number
  setHeaderId: (id: number) => void
}

const NavigationHeader = (props: NavigationHeaderProps): ReactElement => {
  const { header, headerId, setHeaderId } = props

  return (
    <>
      <nav>
        <ul className='flex space-x-20'>
          {header.map((detail) => {
            const { id, description, title } = detail
            return (
              <li
                key={id}
                className={`hover:text-[#a5a9a7] ${
                  headerId === id ? 'text-[#a5a9a7]' : ''
                }`}
              >
                <button
                  onClick={() => {
                    scrollToSection(title)
                    setHeaderId(id)
                  }}
                >
                  {description}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default NavigationHeader
