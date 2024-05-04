import React, { Fragment } from 'react'
import SectionHeading from './SectionHeading'
import SubHeading from './SubHeading'
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import ContactArray from '../data/ContactArray';

const Contact = () => {
  return (
    <div>
      <section id="contact" className='section-class mt-20 lg:mt-24'>
        <SectionHeading headingProps="Contact" />
        <SubHeading subheadingprops="Reach Me Out" />
        <div className='container mx-auto flex flex-col-reverse md:flex-row items-center justify-evenly gap-10 px-5'>
          <div className='flex flex-col gap-5 max-w-sm'>
            {
              ContactArray.map((element, key) => (
                <Fragment key={key}>
                  <ContactDetails props={element.item} imgProps={element.itemIcon} colorProps={element.itemColor} linkProps={element.itemLink} linkContentProps={element.itemLinkContent} itemContentProps={element.itemContent} />
                </Fragment>
              ))
            }
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default Contact
