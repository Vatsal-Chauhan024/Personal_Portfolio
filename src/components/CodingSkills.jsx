import React, { useRef } from 'react'
import SubHeading from './SubHeading'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui, SiMongodb, SiExpress } from "react-icons/si";
import SectionHeading from './SectionHeading';
import { useInView } from "framer-motion"

const SkillsArray = [
  {
    itemIcon: <FaHtml5 />,
    itemName: "HTML5",
    itemValue: "100%",
    bgIcon: "#FFA500"
  },
  {
    itemIcon: <FaJs />,
    itemName: "JS",
    itemValue: "80%",
    bgIcon: "#FFFF00"
  },
  {
    itemIcon: <FaCss3Alt />,
    itemName: "CSS3",
    itemValue: "85%",
    bgIcon: "#007CED"
  },
  {
    itemIcon: <SiTailwindcss />,
    itemName: "Tailwind CSS",
    itemValue: "90%",
    bgIcon: "#007CED"
  },
  {
    itemIcon: <SiDaisyui />,
    itemName: "Daisy UI",
    itemValue: "85%",
    bgIcon: "#0FF0FC"
  },
  {
    itemIcon: <FaNodeJs />,
    itemName: "Node",
    itemValue: "60%",
    bgIcon: "#008000"
  },
  {
    itemIcon: <FaReact />,
    itemName: "React",
    itemValue: "80%",
    bgIcon: "#007CED"
  },
  {
    itemIcon: <SiExpress />,
    itemName: "Express JS",
    itemValue: "70%",
    bgIcon: "#C0C0C0"
  },
  {
    itemIcon: <SiMongodb />,
    itemName: "Mongo DB",
    itemValue: "75%",
    bgIcon: "#1FD655"
  },
]


const CodingSkills = () => {

  const ref = useRef(null)
  const inView = useInView(ref)





  return (
    <>
      <section id='codingskills' className='section-class mt-20 lg:mt-24'>

        <SectionHeading headingProps="Coding Skills" />

        <SubHeading subheadingprops="Skills" />

        <div className='w-full flex justify-center px-4 md:px-0' ref={ref} data-aos = "fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20 container px-2">
            {SkillsArray.map((element, key) => (
              <div key={key} className='flex gap-x-3'>

                <div className='flex flex-col gap-y-3 text-mainbg/75 dark:text-tertiaryColor text-lg tracking-wide font-poppinsR w-full relative'>
                  <div className='flex gap-2'>
                    <span className={`text-3xl`} style={{ color: `${element.bgIcon}` }}>{element.itemIcon}</span>

                    <h2>{element.itemName}</h2>
                  </div>
                  <div className='outline outline-2 outline-offset-2 outline-hrborder/50 dark:outline-hrborder w-full rounded-2xl h-[6px] '>
                    <div className={` h-full rounded-2xl !duration-500`} style={{ width: inView ? `${element.itemValue}`: "0px", background: `${element.bgIcon}` }} />
                  </div>
                  <span className='absolute right-0 top-0 dark:text-tertiaryColor/90'>{element.itemValue}</span>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CodingSkills
