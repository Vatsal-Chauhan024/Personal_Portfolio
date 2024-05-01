import React from 'react'

const Label = ({labelfor, children, className}) => {
  return (
    <>
    <label htmlFor={labelfor} className={`text-mainbg/75 dark:text-white/60 text-lg sm:text-xl  ${className}`}>{children}</label>
    </>
  )
}

export default Label
