import React, { Fragment } from 'react'
import SectionHeading from './SectionHeading'
import SubHeading from './SubHeading'
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const ContactArray = [
  {

    item: "Phone No.",
    itemIcon: <IoCall />,
    itemLink: "tel:9426455118",
    itemLinkContent: "+91 9426455118",
    itemContent: "Have a Call and Discuss your project with me",
    itemColor: "text-green-500"
  },
  {

    item: "Mail",
    itemIcon: <IoMail />,
    itemLink: "mailto:adarsh.vc24@gmail.com",
    itemLinkContent: "adarsh_vc24@gmail.com",
    itemContent: "Send Me the mail for any query regarding project or Mail me your project details here.",
    itemColor: "text-orange-500"
  },
  {

    item: "Location",
    itemIcon: <IoLocation />,
    itemLink: "",
    itemLinkContent: "Reach Me Out in Person",
    itemContent: `A-28, "Shraddha" Neel's Green Avenue, University Road, Rajkot, 360005`,
    itemColor: "text-indigo-500"
  }
]




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
