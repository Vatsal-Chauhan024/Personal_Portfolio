import React from 'react'
import Heading from './Heading'
import ImageField from './ImageField'
import ButtonArray from '../data/button'
import profile from "../assets/profile.png"
import Button from './Button'
import file from "../data/file.pdf"
import IntroductionArray from '../data/IntroductionArray'

const Introduction = () => {

    return (
        <>
            <div className='flex flex-col lg:flex-row items-center container min-h-screen px-4 md:px-2 gap-y-10 lg:gap-y-0 mt-20  xl:mt-0'>
                <div className='md::w-2/5 flex-none' data-aos = "fade-in">
                    <ImageField src={profile} alt="error-animation" className="w-full h-full"/>
                </div>
                <div className='flex flex-col gap-y-6 md:gap-y-11' data-aos = "fade-in">
                    <span className='font-poppinsR text-2xl text-mainbg/60  dark:text-tertiaryColor/50 '>Frontend Developer</span>
                    <Heading>Vatsal Chauhan</Heading>
                    <div className='flex flex-col  gap-y-10'>
                        <p className='font-poppinsR text-base tracking-wide leading-normal text-justify text-mainbg/90 dark:text-tertiaryColor'>Vatsal Chauhan, a skilled React developer with over 2 years of experience in crafting captivating user interfaces. With a strong focus on design and seamless user experiences, Vatsal excels in leveraging React's capabilities to build dynamic and responsive web applications.</p>
                        <div className='flex justify-center flex-wrap gap-x-20 gap-y-10 items-center'>
                            {IntroductionArray.map((element, key) => (
                                <div key={key} className='flex flex-col items-center gap-y-3 text-mainbg/95 dark:text-tertiaryColor font-poppinsR'>
                                <span className='text-secondaryColor text-2xl'>{element.itemIcon}</span>
                                    <p className='text-lg'>{element.itemsContent}</p>
                                    <p className='text-xl'>{element.item}</p>
                                </div>
                            ))}
                        </div>
                        <div className='flex items-center justify-center md:justify-normal gap-4'>
                            {
                                ButtonArray.map((element, key) => (
                                    <Button key={key} className={`border-2 border-solid ${element.borderbg} }`} onClick={()=>window.location.href = element.itemLink}>
                                        {key === 1 ? <a href={file} download="Vatsal Chauhan Resume">
                                            {element.item}
                                        </a> : element.item}
                                    </Button>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduction
