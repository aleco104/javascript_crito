import React from 'react'
import testimonialStars from '../assets/images/testimonial-stars.svg'

const TestimonialBox = ({ text, name, profession, image, imageAlt }) => {
  return (
    <div className="testimonial-box">
        <img src={testimonialStars} alt="five stars" />
        <p>{text}</p>
        <div className="box-person">
            <img src={image} alt={imageAlt} />
            <div className="person-info">
                <h3>{name}</h3>
                <h6>{profession}</h6>
            </div>
        </div>
    </div>
  )
}

export default TestimonialBox