import React from 'react'
import ContactUsBox from './ContactUsBox'

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="container">
          <div className="contact-us-boxes">
            <ContactUsBox title="Visit us" text1="Sveavägen 31" text2="111 34 STOCKHOLM" image="src/assets/images/contact-us1.svg" />
            <ContactUsBox title="Call us" text1="+46 (8) 121 470 50" text2="+46 (8) 121 470 51" image="src/assets/images/contact-us2.svg" />
            <ContactUsBox title="Email us" text1="info@crito.com" text2="support@crito.com" image="src/assets/images/contact-us3.svg" />
          </div>
      </div>
    </section>
  )
}

export default ContactUs