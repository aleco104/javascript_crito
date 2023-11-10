import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ color, text, url}) => {
  return (
    <>
        <Link to={url} className={`btn-${color}`}>{text}<i className="fa-regular fa-arrow-up-right"></i></Link>  
    </>
  )
}

export default Button