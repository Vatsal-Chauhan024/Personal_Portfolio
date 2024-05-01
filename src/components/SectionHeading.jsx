import React from 'react'
import Heading from './Heading'

const SectionHeading = ({ headingProps }) => {
    return (
        <>
            <div className='bg-secondaryColor/70 h-36 sm:h-56 flex items-center whitespace-nowrap' >
                <div className='container px-2'>
                    <Heading>{headingProps}</Heading>
                </div>
            </div>
        </>
    )
}

export default SectionHeading
