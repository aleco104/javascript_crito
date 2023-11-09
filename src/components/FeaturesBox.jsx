import React from 'react'

const FeaturesBox = ({ title, text, image, imageAlt }) => {
  return (
    <div className="features-box">
        <img src={image} alt={imageAlt} />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default FeaturesBox