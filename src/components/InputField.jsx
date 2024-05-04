import React from 'react'

const InputField = ({ className, name, type, onChange, value, placeholder, disabled, readonly, required }) => {
  return (
    <>
      {name !== "message" ? <input type={type} name={name} onChange={onChange} placeholder={placeholder} disabled={disabled} readOnly={readonly} value={value} className={`border-none bg-mainbg/5 dark:bg-tertiaryColor outline outline-1 outline-mainbg/50 dark:outline-hrborder  text-gray-700 text-sm sm:text-base w-full rounded-md h-10 px-10 placeholder:text-gray-700  ${className}`} required={required} /> :
        <textarea className={`border-none bg-mainbg/5 dark:bg-tertiaryColor outline outline-1 outline-mainbg/50 dark:outline-hrborder  text-gray-700 text-sm sm:text-base appearance-none w-full min-h-32 rounded-md resize-none p-5 placeholder:text-gray-700  ${className}`} required={required} name={name} onChange={onChange} placeholder={placeholder} disabled={disabled} readOnly={readonly} value={value}></textarea>}
    </>
  )
}

export default InputField
