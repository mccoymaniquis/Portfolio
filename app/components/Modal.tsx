import React, { ReactElement, useState, useEffect } from 'react'
import Image from 'next/image'

interface interfaceModal {
  isOpenModal: boolean
  onCloseModal: () => void
  hasCloseButton: boolean
  modalSizeClass: string
  children: React.ReactNode
}

const Modal = (props: interfaceModal): ReactElement => {
  const {
    isOpenModal,
    onCloseModal,
    hasCloseButton,
    modalSizeClass,
    children,
  } = props
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const val = isOpenModal
    setIsOpen(val)
  }, [isOpenModal])

  const closeModal = () => {
    onCloseModal()
  }

  return (
    <>
      {isOpen && (
        <div
          className='fixed top-0 left-0 right-0 bottom-0 w-full h-full px-[12px] bg-[rgba(0,0,0,0.75)] z-50 flex justify-center items-center'
          role='dialog'
          aria-modal='true'
        >
          <div
            className={`relative w-full max-w-lg bg-white rounded-[10px] text-[#000] ${modalSizeClass}`}
          >
            <div className='absolute top-0 right-0 p-4'>
              <Image
                className='text-[#fff] cursor-pointer'
                src='/icons/closeIcon.svg'
                alt='Close Modal'
                height={25}
                width={25}
                onClick={() => closeModal()}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
