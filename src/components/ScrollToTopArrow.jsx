import React from 'react'

const ScrollToTopArrow = ({arrowProps}) => {
    return (
        <>
            <div className='bg-lightmainbg  dark:bg-mainbg hover:shadow-customshadow dark:hover:bg-mainbg/95  border border-solid dark:border-tertiaryColor/50 dark:text-tertiaryColor text-lg sm:text-xl h-10 flex items-center justify-center aspect-square rounded-full fixed bottom-16 right-4 cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} data-aos="fade-in"><span className='dark:text-tertiaryColor text-mainbg'>{arrowProps}</span>
            </div>
        </>
    )
}

export default ScrollToTopArrow
