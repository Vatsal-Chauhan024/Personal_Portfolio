import React from 'react'
import SectionHeading from './SectionHeading'
import SkillsArray from '../data/SkillsArray';
import IconContent from './IconContent';
import SubHeading from './SubHeading';


const Skills = () => {
    return (
        <section id="skills" className='section-class'>
            <SectionHeading headingProps="Services" />
        <SubHeading subheadingprops="What I Provide"/>
            <div className='w-full flex justify-center mt-14 px-4 md:px-0' data-aos = "fade-in">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-20 container px-2'>
                    {
                        SkillsArray.map((element, key) => (
                            <IconContent iconProp={element.iconElement} headingProps={element.iconHeading} paraProps={element.iconPara} key={key} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills
