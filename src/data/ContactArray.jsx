import { IoCall, IoLocation, IoMail } from "react-icons/io5";

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
  
export default ContactArray  