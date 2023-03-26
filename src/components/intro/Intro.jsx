/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Intro.css'
import Photo from '../../img/photo.png'

const intro = () => {
  return (
    <div className='i'>
      <div className='i-left'>
        <div className="i-left-wrapper">
            <h2 className="i-intro">Hello Myself,</h2>
            <h1 className="i-name">Vatsal Chauhan</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">UI Desinger</div>
                </div>
            </div>
                <p className="i-desc">
                As a web developer, I have expertise in designing and developing websites and web applications using various programming languages, frameworks, and tools. My portfolio showcases my ability to create functional, responsive, and visually appealing websites that meet the unique needs of my clients.
                </p>
        </div>
      </div>
      <div className='i-right'>
        <div className="i-bg">

        </div>
        <img src={Photo} className='i-img' />
      </div>
    </div>
  )
}

export default intro
