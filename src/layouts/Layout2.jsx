import React from 'react'

const Layout2 = ({ children }) => {
    return (
        <>
            <div className='flex flex-col w-full gap-x-10  mt-20 lg:mt-24'>
                {children}
            </div>
        </>
    )
}

export default Layout2
