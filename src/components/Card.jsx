import React from 'react'
import { Link } from 'react-router-dom'
import ImageField from './ImageField'
import Button from "./Button"
import { FiArrowRight } from "react-icons/fi";

const Card = ({ imgProps, titleProps, contentProps, linkProps }) => {
    return (
        <>
        <div className='max-w-full md:max-w-80 lg:max-w-md xl:max-w-sm w-full  rounded-xl  backdrop-blur-2xl bg-tertiaryColor dark:bg-tertiaryColor/5 flex flex-col gap-5 overflow-hidden shadow-customshadow' data-aos = "fade-in">
            <ImageField src={imgProps} alt="error-icon" className=" object-fill aspect-square h-72"/>
           <div className='flex px-4 pb-4 flex-col gap-4  justify-between h-1/2 '>
            <h2 className='text-mainbg/85 dark:text-tertiaryColor/80 tracking-wide capitalize text-xl font-poppinsB '>{titleProps}</h2>
            <p className='text-mainbg/60 dark:text-tertiaryColor/40 font-poppinsR text-justify text-sm md:text-base'>{contentProps}</p>
            <Link to={linkProps}><Button className="!px-6 !py-2 !bg-secondarycolor/80 !rounded-xl hover:!bg-secondaryColor/70 hover:!text-white !text-base flex items-center gap-x-1">Github <FiArrowRight/></Button></Link>
           </div>
        </div>
        </>
    )
}

export default Card
