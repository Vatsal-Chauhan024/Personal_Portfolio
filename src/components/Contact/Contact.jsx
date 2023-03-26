import React from "react";
import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";



const Contact = () => {

  return (
    <div className="c">
      <div className="c-bg">
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's Discuss</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} className="c-icon" alt="Phone-error" />
                +91 9426455118
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Email} alt="" />
                contact@adarsh_vc24@yahoo.com
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Address} alt="" />
                A2 501 PDPU, Highrise Hostel, Gandhinagar
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What's the Query???</b> Get in Touch.
            </p>
  <form action="https://airform.io/adarsh.vc24@gmail.com" method="post">
           
              <input type="text" placeholder="Name" name ="user_name"/>
              <input type="text" placeholder="Query" name ="user_subject"/>
              <input type="text" placeholder="Email" name ="user_email"/>
              <textarea rows= "5" name="message" id="" cols="30" placeholder="Description" />
              <button>Submit</button>
           
  </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
