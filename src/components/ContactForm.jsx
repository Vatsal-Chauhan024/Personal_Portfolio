import React, { useState, useRef } from 'react'
import Label from './Label'
import InputField from './InputField'
import Button from "./Button"
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactForm = () => {

  const form = useRef();

  const [inputValues, setInputValues] = useState({
    email: "",
    name: "",
    subject: "",
    message: ""
  })

  const inputArray = [
    {
      labelfor: "email",
      type: "email",
      name: "email",
      value: inputValues.email,
      placeholder: "Enter your Email"
    },
    {
      labelfor: "Your Name",
      type: "text",
      name: "name",
      value: inputValues.name,
      placeholder: "Enter your Name"
    },
    {
      labelfor: "Subject",
      type: "text",
      name: "subject",
      value: inputValues.subject,
      placeholder: "Write Your Subject"
    },
    {
      labelfor: "Your Message",
      type: "text",
      name: "message",
      value: inputValues.message,
      placeholder: "Leave Your Message"
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target


    setInputValues({
      ...inputValues, [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6trfoaf', 'template_y049i7q', form.current, 'nPK35fwFr1NciqDMp')
    .then((result) => {
       if(result){
        toast.success("Your Response has been Submitted.")
        setInputValues({
          email: "",
          name: "",
          subject: "",
          message: ""
        })
       }
       else{
        toast.error("Error Submitting your response.")
       }
    }, (error) => {
        console.log(error.text);
    });



  }


  return (
    <>
      <div className='w-full md:max-w-2xl xl:w-full min-h-96 h-full bg-tertiaryColor dark:bg-hrborder/30 backdrop-blur-md shadow-customshadow rounded-xl p-5 border border-solid dark:border-primary' data-aos = "fade-left">
        <form action="" className='' onSubmit={handleSubmit} ref={form}>

          <div className='flex flex-col gap-10'>
            {
              inputArray.map((element, key) => (
                <div className='flex flex-col gap-3 items-start *:font-poppinsR' key={key}>
                  <Label labelfor={element.labelfor} className="capitalize ">{element.labelfor}</Label>
                  <InputField type={element.type} name={element.name} value={element.value} onChange={handleChange} placeholder={element.placeholder} required={true} />
                </div>

              ))
            }
            <Button className="w-fit !px-4 !text-sm sm:!text-base !py-2 !rounded-md hover:!bg-secondaryColor/70 hover:!text-white">Submit</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm
