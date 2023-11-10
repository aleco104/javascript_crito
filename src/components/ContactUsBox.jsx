import React from 'react'

const ContactUsBox = ({ title, text1, text2, image}) => {
  return (
    <div className="contact-us-box">
        <a href="#">
            <img src={image} alt="" />
        </a>
        <div className="box-text">
            <h3>{title}</h3>
            <p>{text1}<br/>{text2}</p>
        </div>
    </div>
  )
}

export default ContactUsBox