import React, { useEffect, useState } from 'react'
import ImageField from './ImageField'
import Menus from './Menus'
import logo from "../assets/logo.svg"
import { VscThreeBars } from "react-icons/vsc";
import { RiCloseLine } from "react-icons/ri";
import { FaMoon, FaSun } from "react-icons/fa";



const Navbar = () => {

  const [isToggled, setIsToggled] = useState(false)
  const [modeToggle, setModeToggle] = useState(false)
  const [scrollValue,] = useState(window.scrollY)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {

    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setScrolled(true)
      }
      else {
        setScrolled(false)
      }
    })

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 20) {
          setScrolled(true)
        }
        else {
          setScrolled(false)
        }
      })
    }
  }

  useEffect(() => {
    handleScroll();
  }, [scrollValue])

  return (
    <>
      <div className={`w-full px-3 lg:px-4 h-20  lg:h-24 flex justify-between items-center fixed top-0 left-0 overflow-x-hidden bg-lightteriaryColor  dark:bg-mainbg z-50 ${scrolled ? "shadow-lg dark:shadow-white/5 !bg-tertiaryColor dark:!bg-mainbg" : ""} `} >
        <div className='flex items-center gap-2'>
        <ImageField src={logo} alt="error-logo" className="aspect-square h-10" /> 
        <span className='text-mainbg/70 dark:text-tertiaryColor font-poppinsR text-lg'>Vatsal Chauhan</span></div>

        <div data-aos="slide-down" className='flex items-center gap-5'>
          <div className='w-20 h-8 flex items-center justify-start relative rounded-2xl border border-solid border-hrborder lg:hidden cursor-pointer' onClick={() => { document.body.classList.toggle("dark"); setModeToggle(!modeToggle) }}>
            <div className={`h-6 rounded-full bg-secondaryColor aspect-square absolute cursor-pointer ${modeToggle ? "left-12" : "left-1"}  flex items-center justify-center text-lg text-white/80`}  >
              {modeToggle ? <FaMoon className='' /> : <FaSun />}
            </div>
          </div>
          {isToggled ?
            <RiCloseLine className='text-mainbg/70 dark:text-tertiaryColor text-2xl lg:hidden cursor-pointer' onClick={() => setIsToggled(!isToggled)} /> :
            <VscThreeBars className='text-mainbg/70 dark:text-tertiaryColor text-2xl lg:hidden cursor-pointer' onClick={() => setIsToggled(!isToggled)} />
          }
        </div>
      </div>
      
      <Menus props={isToggled} setProps={setIsToggled} modeProps={modeToggle} setModeProps={setModeToggle} />
    </>
  )
}

export default Navbar
