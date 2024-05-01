import React from 'react'
import ImageField from "./ImageField"


const TestimonialCard = ({imgProps, contentProps, nameProps, positionProps}) => {
  return (
    <>
    <div className=' bg-tertiaryColor/90 rounded-lg p-4 min-h-96 flex items-center w-11/12 xl:w-3/4  mb-2 dark:mb-0 shadow-customshadow mx-auto ' data-aos = "fade-in">
        <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-5'>
        <ImageField src={imgProps} alt="icon-testimonial-error" className="rounded-full aspect-square h-52"/>

        <div className="flex flex-col gap-y-8">
            <p className='dark:text-mainbg/60 font-poppinsR text-justify leading-6 text-sm sm:text-base'>{contentProps}</p>


        <div className='flex flex-col *:text-secondaryColor *:font-poppinsR'>
        <span className='text-lg sm:text-2xl'>{nameProps}</span>
        <strong className='text-xl sm:text-3xl'>{positionProps}</strong>
        </div>
            
        </div>
        </div>
    </div>
    </>
  )
}

export default TestimonialCard
