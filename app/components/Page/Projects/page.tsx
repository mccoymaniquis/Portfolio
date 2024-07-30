import React, { ReactElement } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '@/app/components/utils/projects'

interface PageProps {}

const Page = (props: PageProps): ReactElement => {
  return (
    <div className='py-12 grid grid-cols-2 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-4 lg:gap-4'>
      {projects.map((project) => {
        const { title, imageUrl, sourceCodeUrl, id } = project
        return (
          <ProjectCard
            key={id}
            title={title}
            imageUrl={imageUrl}
            sourceCodeUrl={sourceCodeUrl}
          />
        )
      })}
    </div>
  )
}

export default Page
