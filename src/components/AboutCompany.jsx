import React from 'react';
import aboutCompany from '../assets/images/about-company.png';
import companyFidelidutt from '../assets/images/company-fidelidutt.svg';
import { Link } from 'react-router-dom';
import Button from '../generics/Button';

const AboutCompany = () => {
  return (
    <section className="about-company">
        <div className="container">
            <div className="about-company-left">
                <img src={aboutCompany} alt="a woman walking and smiling holding a laptop" />
                <div className="left-blue-rectangle">
                    <div className="blue-rectangle-titles">
                        <h3>Samantha Brown,</h3>
                        <h6>Founder</h6>
                    </div>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>
                <img src={companyFidelidutt} className="fidelidutt" alt="fidelidutt" />
            </div>
            <div className="about-company-right">
                <div className="company-right-top">
                    <h6>About Company</h6>
                    <h2>We Are Business<br/>Consulting & Credit<br/>Repair Experts</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.<br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                </div>
                <div className="company-right-bottom">
                    <Button color="black" text="Learn More" url="/learnmore"/>
                    <Link to="/video" className="video-link">
                        <div className="video-btn"><i className="fa-sharp fa-solid fa-play"></i></div>
                        <span>Intro Video</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutCompany