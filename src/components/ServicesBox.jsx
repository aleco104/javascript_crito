import React from 'react'

const ServicesBox = ({heading, text}) => {
  return (
    <div className="services-box">
        <div className="box-line"></div>
        <h3>{heading}</h3>
        <p>{text}</p>
        <div className="box-arrow">
            <a href="#"><i className="fa-thin fa-arrow-right"></i></a>
        </div>
    </div>
  )
}

export default ServicesBox