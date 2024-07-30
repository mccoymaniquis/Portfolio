import React, { ReactElement } from 'react'
import AboutPage from '../../components/Page/About/page'
interface PageProps {
  headerId: number
}
const Page = (props: PageProps): ReactElement => {
  const { headerId } = props
  return (
    <section
      id='about'
      className='h-auto background-image-container lg:h-screen '
    >
      <AboutPage headerId={headerId} />
    </section>
  )
}

export default Page
