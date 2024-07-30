import React, { ReactElement } from 'react'
import Skills from '../../components/Page/Skills/page'
interface PageProps {
  headerId: number
}
const Page = (props: PageProps): ReactElement => {
  const { headerId } = props
  return (
    <section id='skills' className='h-auto  bg-main px-12'>
      {/* Add your Home content here */}
      <Skills headerId={headerId} />
    </section>
  )
}

export default Page
