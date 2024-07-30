'use client'
import React, { useState, useEffect } from 'react'
import Page from './components/Page'
import AboutPage from './pages/about/page'
import SkillsPage from './pages/skills/page'
import ProjectsPage from './pages/projects/page'
import ExperiencePage from './pages/experience/page'
import ContactPage from './pages/contact/page'

const Home: React.FC = () => {
  const [headerId, setHeaderId] = useState(1)

  return (
    <>
      <Page setHeaderId={setHeaderId} headerId={headerId}>
        <AboutPage headerId={headerId} />
        <SkillsPage headerId={headerId} />
        <ProjectsPage />
        <ExperiencePage />
        <ContactPage />
      </Page>
    </>
  )
}

export default Home
