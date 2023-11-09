import React from 'react'
import ServicesBox from './ServicesBox'
import { Link } from 'react-router-dom'

const OurServices = () => {
  return (
    <section className="our-services">
            <div className="container">
                <div className="services-titles">
                    <h6>Our Services</h6>
                    <h2>We Provide The Best<br/>Service For Consulting</h2>
                </div>
                <div className="services-bottom">
                    <ServicesBox heading="Business Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
                    <ServicesBox heading="Startup Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
                    <ServicesBox heading="Financial Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
                    <ServicesBox heading="Risk Management" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/> 
                </div>
                <div className="services-btn">
                    <Link to="/contact" className="btn-transparent">Browse Services<i className="fa-regular fa-arrow-up-right"></i></Link>
                </div>
            </div>
        </section>
  )
}

export default OurServices