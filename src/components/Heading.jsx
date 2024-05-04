import React from 'react'

const Heading = ({children}) => {
  return (
    <h1 className='font-poppinsB text-4xl sm:text-5xl md:text-6xl text-mainbg/95 dark:text-tertiaryColor first-letter:capitalize flex ' data-aos = "fade-in">{children}</h1>
  )
}

export default Heading
