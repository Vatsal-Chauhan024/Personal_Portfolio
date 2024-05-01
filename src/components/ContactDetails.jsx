import React from 'react'
import { Link } from 'react-router-dom'

const ContactDetails = ({ props, imgProps, colorProps, linkProps, linkContentProps, itemContentProps }) => {
    return (
        <>
            <div className='flex items-start gap-5' data-aos= "fade-right">
                <div className={`${colorProps} text-lg sm:text-2xl mt-1`}>{imgProps}</div>

                <div className='flex flex-col *:font-poppinsR gap-0.5 items-start *:text-sm lg:*:text-base'>
                    <h4 className='font-bold text-mainbg/85 dark:text-tertiaryColor text-base sm:!text-lg'>{props}</h4>
                    <Link to={linkProps} className='text-mainbg/75 dark:text-tertiaryColor/70'>{linkContentProps}</Link>
                    <p className='text-mainbg/60 dark:text-tertiaryColor/30'>{itemContentProps}</p>
                </div>
            </div>
        </>
    )
}

export default ContactDetails
