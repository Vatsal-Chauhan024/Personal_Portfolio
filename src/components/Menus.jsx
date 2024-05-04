import React from 'react'
import NavItems from '../data/NavItems'
import { FaSun, FaMoon } from "react-icons/fa";

const Menus = ({ props, setProps, modeProps, setModeProps }) => {

  const handleIndex = (key) => {

    setProps(!props)
    switch (key) {
      case 1:
        document.getElementById("skills").scrollIntoView({ behavior: "smooth", block: "start" })
        break;
      case 2:
        document.getElementById("codingskills").scrollIntoView({ behavior: "smooth", block: "start" })
        break;
      case 3:
        document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" })
        break;
      case 4:
        document.getElementById("testimonials").scrollIntoView({ behavior: "smooth", block: "start" })
        break;
      case 5:
        document.getElementById("contact").scrollIntoView({ behavior: "smooth", block: "start" })
        break;
      default:
        window.scrollTo({ top: 0, behavior: "smooth" })
        break;
    }
  }

  return (
    <div className={`z-50  dark:backdrop-blur-lg  dark:bg-black h-fit lg:backdrop-blur-none dark:lg:backdrop-blur-none dark:lg:bg-transparent w-screen fixed  ${props ? "top-0 shadow-2xl backdrop-blur-md dark:backdrop-blur-none" : "-top-full"} mt-18 lg:mt-0 lg:top-0 lg:h-24 lg:flex lg:items-center lg:justify-end  lg:pr-4 py-3 lg:py-0`} >
      <ul className='flex flex-col lg:flex-row  lg:justify-end gap-4 lg:gap-6 items-center'>
        {
          NavItems.map((element, key) => (

            <li key={key} className={`font-poppinsR hover:text-mainbg/50  dark:hover:text-tertiaryColor/80 cursor-pointer dark:text-tertiaryColor text-mainbg/85`} onClick={() => handleIndex(key)} >{element.item}</li>
          ))
        }
      <div className='w-20 h-8 hidden lg:flex items-center justify-start relative rounded-2xl border border-solid border-hrborder cursor-pointer' onClick={() => {document.body.classList.toggle("dark"); setModeProps(!modeProps)}}>
          <div className={`h-6 rounded-full bg-secondaryColor aspect-square absolute cursor-pointer ${modeProps ? "left-12": "left-1"}  flex items-center justify-center text-lg text-white/80`} >
            {modeProps?<FaMoon className=''/> : <FaSun/>}
          </div>
          </div>
      </ul>
    </div>
  )
}

export default Menus
