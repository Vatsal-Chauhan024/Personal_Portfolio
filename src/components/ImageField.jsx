import React from 'react'

const ImageField = ({className, onClick, src, alt}) => {
  return (
    <img src={src} alt={alt} className={className} onClick={onClick}/>
  )
}

export default ImageField
