import React from 'react'
import SectionHeading from './SectionHeading'
import { SiAntdesign } from "react-icons/si";
import IconContent from './IconContent';
import SubHeading from './SubHeading';

const SkillsArray = [
    {
        iconElement: <SiAntdesign />,
        iconHeading: "UI Designs Implementation / Responsive Figma Design Implementation",
        iconPara: "Developed responsive web layouts based on Figma designs, ensuring pixel-perfect rendering across devices. Utilized HTML, CSS, and JavaScript to translate designs into interactive interfaces, focusing on user experience and accessibility."
    },
    {
        iconElement: <SiAntdesign />,
        iconHeading: "React JS Development",
        iconPara: "Created dynamic web applications with React JS, leveraging its component-based architecture and state management capabilities. Implemented reusable UI components for efficient development and seamless user interactions, while optimizing performance for enhanced user experience."
    },
    {
        iconElement: <SiAntdesign />,
        iconHeading: "Tailwind Framework Integration",
        iconPara: "Employed Tailwind CSS framework to streamline UI development, utilizing its utility-first approach for rapid prototyping. Customized styles with ease, ensuring consistent design patterns and responsive layouts across various viewport sizes, thereby enhancing maintainability and scalability."
    },
    {
        iconElement: <SiAntdesign />,
        iconHeading: "DaisyUI Framework Utilization",
        iconPara: " Integrated DaisyUI Framework to expedite frontend development, leveraging its collection of pre-designed components and themes. Achieved consistent and visually appealing UI designs, while reducing development time and ensuring code maintainability through modular components."
    },
    {
        iconElement: <SiAntdesign />,
        iconHeading: "Lottie Animations Implementation",
        iconPara: "Incorporated Lottie animations to enrich web interfaces with engaging motion graphics. Utilized JSON-based animations for smooth transitions and interactive visual elements, enhancing user engagement and creating memorable user experiences."
    },
]



const Skills = () => {
    return (
        <section id="skills" className='section-class'>
            <SectionHeading headingProps="Services" />

        <SubHeading subheadingprops="What I Provide"/>

            <div className='w-full flex justify-center mt-14 px-4 md:px-0' data-aos = "slide-up">
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
