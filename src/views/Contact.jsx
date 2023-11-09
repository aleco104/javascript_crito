import React from 'react'
import Header from '../components/Header'
import LetsConnect from '../components/LetsConnect'
import ContactUs from '../components/ContactUs'
import LeaveMessage from '../components/LeaveMessage'
import CritoMap from '../components/CritoMap'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <Header/>
      <main>
          <LetsConnect/>
          <ContactUs/>
          <LeaveMessage/>
          <CritoMap/>
      </main>
      <Footer/>
    </>
  )
}

export default Contact