import React from 'react'

const SubHeading = ({ subheadingprops }) => {
    return (
        <>
        <div className='w-full'>
            <div className='container px-2' data-aos = "fade-left">

            
            <h2 className='text-mainbg/85 dark:text-white font-poppinsR text-4xl tracking-wider mt-16 mb-12'>{subheadingprops}
            
            <div className='bg-hrborder/50 dark:bg-hrborder h-1 w-32 rounded-2xl relative after:content-[""] after:bg-indigo-500 after:absolute after:left-0 after:w-16 after:h-1 after:rounded-2xl'/>

            </h2>
            </div>
        </div>
        </>
    )
}

export default SubHeading
