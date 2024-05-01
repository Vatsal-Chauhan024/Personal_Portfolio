import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const FooterArray = [
  {
    item: <FaLinkedin/>,
    itemLink: "https://www.linkedin.com/in/vatsal-chauhan024/"
  },
  {
    item : <FaXTwitter/>,
    itemLink: "https://twitter.com/Vats24__"
  }
]

const Footer = () => {
  return (
    <>
      <div className='bg-tertiaryColor dark:bg-black/50 *:text-mainbg dark:*:text-white  *:text-xs *:sm:text-lg font-poppinsR  py-4 w-full mt-4 px-4 sm:px-24 flex justify-center gap-20 items-center'>
        <span className='text-base '>Developed by &#64; <strong>Vatsal Chauhan</strong></span>
        <div className='flex items-center gap-2 *:text-lg *:sm:text-2xl '>
          {
            FooterArray.map((element, key) => (
              <Link to = {element.itemLink} className='hover:text-secondaryColor !delay-0 !ease-linear !duration-0  cursor-pointer' key={key}>{element.item}</Link>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Footer
