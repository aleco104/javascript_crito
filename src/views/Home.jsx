import React from 'react'
import Header from '../components/Header'
import Showcase from '../components/Showcase'
import Customers from '../components/Customers'
import Features from '../components/Features'
import AboutCompany from '../components/AboutCompany'
import OurServices from '../components/OurServices'
import ChooseUs from '../components/ChooseUs'
import ProjectCase from '../components/ProjectCase'
import MeetTeam from '../components/MeetTeam'
import Testimonial from '../components/Testimonial'
import Article from '../components/Article'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <main>
        <Showcase/>
        <Customers/>
        <Features/>
        <AboutCompany/>
        <OurServices/>
        <ChooseUs/>
        <ProjectCase/>
        <MeetTeam/>
        <Testimonial/>
        <Article/>
        <Newsletter/>
      </main>
      <Footer/>
    </>
  )
}

export default Home