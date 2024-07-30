import React, { ReactElement } from 'react'

interface SocialMediaProps {
  children: React.ReactNode
  link: string
}

const SocialMedia = (props: SocialMediaProps): ReactElement => {
  const { children, link } = props
  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}

export default SocialMedia
