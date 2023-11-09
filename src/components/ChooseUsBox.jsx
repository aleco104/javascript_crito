import React from 'react'

const ChooseUsBox = ({ title, text, image, imageAlt }) => {
  return (
    <div className="choose-us-box">
        <img src={image} alt={imageAlt} />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default ChooseUsBox