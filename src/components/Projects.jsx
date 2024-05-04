import React from 'react'
import Card from './Card'
import SectionHeading from './SectionHeading'
import SubHeading from "./SubHeading"
import CardArray from '../data/ProjectArray'

const Projects = () => {

  return (
    <>
      <section id="projects" className='section-class mt-20 lg:mt-24'>
          <SectionHeading headingProps="Projects" />
          <SubHeading subheadingprops="Few Insights"/>
          <div className='w-full flex justify-center mt-14'>
            <div className='flex flex-wrap  justify-center gap-3 lg:gap-5 px-4 md:px-2'>
              {
                CardArray.map((element, key) => (
                  <Card imgProps={element.itemIcon} titleProps={element.itemTitle} contentProps={element.itemContent} linkProps={element.itemLink} key={key} />
                ))
              }
            </div>
          </div>
      </section>
    </>
  )
}

export default Projects
