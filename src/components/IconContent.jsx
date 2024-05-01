import React from 'react'

const IconContent = ({iconProp, headingProps, paraProps, }) => {
  return (
    <>
    <div className='flex gap-x-7'>
        <span className='text-2xl text-secondaryColor mt-1'>{iconProp}</span>
        <div className='flex flex-col gap-y-2 '>
            <h3 className='text-mainbg/85 dark:text-tertiaryColor font-poppinsB text-lg'>{headingProps}</h3>
            <p className='text-mainbg/60 dark:text-tertiaryColor/50 font-poppinsR text-justify'>{paraProps}</p>
        </div>
    </div>
    </>
  )
}

export default IconContent
