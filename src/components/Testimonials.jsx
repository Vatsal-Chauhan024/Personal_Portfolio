import React, { Fragment } from 'react'
import SectionHeading from './SectionHeading'
import TestimonialCard from './TestimonialCard'
import TestimonialsArray from '../data/TestimonalsArray'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue'
import SubHeading from './SubHeading';

const Testimonials = () => {

    return (
        <>
            <section id="testimonials" className="section-class mt-20 lg:mt-24">
                <SectionHeading headingProps="Testimonials" />
                <SubHeading subheadingprops="Reviews"/>
                <div className="">
                        <Splide aria-label="My Favorite Images" options= {{
                            rewind: true,
                            autoplay: true,
                            type: 'slide',
                            interval: 5000,
                            lazyLoad: 'sequential',
                            arrows: false,                            
                        }}>
                           {
                            TestimonialsArray.map((element, key) => (
                                <Fragment key={key}>
                                    <SplideSlide>
                                        <TestimonialCard imgProps={element.itemImage} contentProps={element.itemContent} nameProps={element.itemName} positionProps={element.itemPosition}/>
                                    </SplideSlide>
                                </Fragment>
                            ))
                           }
                        </Splide>
                </div>
            </section>
        </>
    )
}

export default Testimonials
