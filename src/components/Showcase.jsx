import React from 'react'
import backgroundWaves from '../assets/images/Rectangle 607.svg'
import manShowcase from '../assets/images/man-showcase.png'
import { Link } from 'react-router-dom'

const Showcase = () => {
  return (
    <section className="showcase">
        <img className="background-waves" src={backgroundWaves} alt="" />
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <div className="buttons">
                    <Link className="btn-yellow" to="/contact">Get Consulting<i className="fa-regular fa-arrow-up-right"></i></Link>
                    <Link className="btn-transparent" to="/learnmore">Learn More<i className="fa-regular fa-arrow-up-right"></i></Link>
                </div>           
            </div>
            <img src={manShowcase} alt="image of a man in a suit with a tablet" />
        </div>
    </section>
  )
}

export default Showcase