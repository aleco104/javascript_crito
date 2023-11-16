import React from 'react'
import backgroundWaves from '../assets/images/Rectangle 607.svg'
import manShowcase from '../assets/images/man-showcase.png'
import Button from '../generics/Button'

const Showcase = () => {
  return (
    <section className="showcase">
      <img className="background-waves" src={backgroundWaves} alt="" />
      <div className="container">
          <div className="content">
              <h1>We Provide The Best Business Solutions</h1>
              <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
              <div className="buttons">
                  <Button color="yellow" text="Get Consulting" url="/contact"/>
                  <Button color="transparent" text="Learn More" url="/learnmore"/>
              </div>           
          </div>
          <img src={manShowcase} alt="image of a man in a suit with a tablet" />
      </div>
    </section>
  )
}

export default Showcase