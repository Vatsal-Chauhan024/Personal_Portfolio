import React from 'react'
import Introduction from '../components/Introduction'
import Layout2 from '../layouts/Layout2'
import Skills from '../components/Skills'
import CodingSkills from '../components/CodingSkills'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <Introduction/>

      <Layout2>
          <Skills/>
          <CodingSkills/>
          <Projects/>
          <Testimonials/>
          <Contact/>
      </Layout2>
    </div>
    </>
  )
}

export default Home
