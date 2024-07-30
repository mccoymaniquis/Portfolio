import React, { ReactElement } from 'react'
import Skills from '../../components/Page/Skills/page'

interface PageProps {}

const Page = (props: PageProps): ReactElement => {
  const {} = props
  return (
    <section id='skills' className='h-auto bg-main px-12'>
      <Skills />
    </section>
  )
}

export default Page
