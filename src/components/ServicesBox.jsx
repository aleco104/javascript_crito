import React from 'react'
import { Link } from 'react-router-dom'

const ServicesBox = ({heading, text}) => {
  return (
    <div className="services-box">
        <div className="box-line"></div>
        <h3>{heading}</h3>
        <p>{text}</p>
        <div className="box-arrow">
            <Link to="#"><i className="fa-thin fa-arrow-right"></i></Link>
        </div>
    </div>
  )
}

export default ServicesBox