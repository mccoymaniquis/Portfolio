import { useState } from 'react'
import { scrollToSection } from './ScrollToSection'
import ToggleMenuIcon from '../../public/icons/toggle-menu.svg'

interface NavigationItem {
  id: number
  description: string
  title: string
}

interface CollapsibleNavigationProps {
  header: NavigationItem[]
  headerId: number
  setHeaderId: (id: number) => void
}

const CollapsibleNavigation: React.FC<CollapsibleNavigationProps> = ({
  header,
  headerId,
  setHeaderId,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className=' text-[#a5a9a7] '>
      <div className='container'>
        <div className={`w-[150px] p-4 flex rounded-sm lg:bg-main `}>
          <button
            onClick={toggleMenu}
            className=' lg:hidden px-3 py-2 border rounded text-white z-50'
          >
            <ToggleMenuIcon height={25} width={25} className='text-white' />
          </button>
          <ul
            className={`lg:flex lg:space-x-20 ${
              isOpen ? 'block pt-16' : 'hidden '
            } absolute lg:static top-0 left-0 right-0 lg:top-auto lg:left-auto lg:right-auto lg:bg-transparent w-[150px] bg-sub rounded-md h-fit `}
          >
            {header.map((detail) => {
              const { id, description, title } = detail
              return (
                <li
                  key={id}
                  className={`hover:text-white font-custom ${
                    headerId === id ? 'text-white' : ''
                  }`}
                >
                  <button
                    onClick={() => {
                      scrollToSection(title)
                      setHeaderId(id)
                      setIsOpen(false)
                    }}
                    className='px-4 py-2'
                  >
                    {description.toLocaleUpperCase()}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default CollapsibleNavigation
