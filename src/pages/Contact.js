import React from 'react';
import { MailOutlined  } from "@ant-design/icons"
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import '../App.css'

const Contact = () => {
  return (
    <div className='contact-box'>
      <h1 id='Ch'>Contact Me</h1>
      < p id='Chp'>
        I am here to help! Whether you have questions, need 
        support, or want to share your ideas, I’m just a message
         away. Your feedback and suggestions mean the world
          to me and help make Canvas even better.
      </p>
      <div className='All-content'>
        <div className='content'>
      {/* Email Section */}
      <button className='Email-btn'>
        <a
          href={`mailto:gshivshankar356@gmail.com?subject=${encodeURIComponent(
            "Inquiry from Canvas"
          )}&body=${encodeURIComponent(
            "Hi, I have a question about your wallpapers..."
          )}`}
          className="email-link"
        >
          <MailOutlined />
        </a>
      </button>
      <p className='Email-heading'><b>Email:-</b>  <a
                    href={`mailto:gshivshankar356@gmail.com?subject=${encodeURIComponent(
                      "Inquiry from Canvas"
                    )}&body=${encodeURIComponent(
                      "Hi, I have a question about your wallpapers..."
                    )}`}
                    className="email-link"
                  >
                    gshivshankar356@gmail.com
                  </a></p><br/>
      <p className='Email-heading1'>If you have any suggestions or face any issues, don’t hesitate to contact us at.</p>
      
      </div>
      <div className='content'>
      {/* Location Section */}
      <button className='Location-btn'>
      <a  className='Location-btn' href='https://www.google.com/maps'target="_blank" rel="noopener noreferrer" >
      <IoLocationOutline />
        </a> 
      </button>
      <p className='Location-heading'><b>Location:-</b> Indore, Madhya Pradesh</p>
      <p className='Location-description'><b>Country:-</b> India</p>
      </div>
      <div className='content'>
      {/* Social Media Section */}
      <p className='Follow'><b>Follow Me</b></p>
      <button className='insta'>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" id='insta1'>
          <FaInstagram />
        </a>
      </button>
      <button className='fb'>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" id='fb1'>
          <FaFacebookSquare />
        </a>
      </button>
      </div>
      </div>
      </div>
  );
};

export default Contact;
