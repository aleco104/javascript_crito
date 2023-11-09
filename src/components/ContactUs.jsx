import React from 'react'
import contactUs1 from '../assets/images/contact-us1.svg'
import contactUs2 from '../assets/images/contact-us2.svg'
import contactUs3 from '../assets/images/contact-us3.svg'

const ContactUs = () => {
  return (
    <section className="contact-us">
            <div className="container">
                <div className="contact-us-boxes">
                    <div className="contact-us-box">
                        <a href="#">
                            <img src={contactUs1} alt="" />
                        </a>
                        <div className="box-text">
                            <h3>Visit us</h3>
                            <p>Sveavägen 31<br/>111 34 STOCKHOLM</p>
                        </div>
                    </div>
                    <div className="contact-us-box">
                        <a href="#">
                            <img src={contactUs2} alt="" />
                        </a>
                        <div className="box-text">
                            <h3>Call us</h3>
                            <p>+46 (8) 121 470 50<br/>+46 (8) 121 470 51</p>
                        </div>
                    </div>
                    <div className="contact-us-box">
                        <a href="#">
                            <img src={contactUs3} alt="" />
                        </a>
                        <div className="box-text">
                            <h3>Email us</h3>
                            <p>info@crito.com<br/>support@crito.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ContactUs