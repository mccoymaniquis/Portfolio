import React, { ReactElement } from 'react'
import AboutPage from '../../components/Page/About/page'

const Page = (): ReactElement => {
  return (
    <section
      id='about'
      className='h-auto background-image-container lg:h-screen '
    >
      <AboutPage />
    </section>
  )
}

export default Page
