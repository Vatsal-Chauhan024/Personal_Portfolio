import React from 'react'

const Button = ({children, className, onClick, download}) => {
  return (
    <>
    <button className={`px-5 sm:px-6 py-3 sm:py-5  sm:mx-0 rounded-30 bg-secondaryColor text-white hover:text-black hover:dark:text-white  dark:text-tertiaryColor font-poppinsR text-xl hover:bg-transparent dark:hover:bg-mainbg/50 ${className}`} onClick={onClick} download>{children}</button>
    </>
  )
}

export default Button
