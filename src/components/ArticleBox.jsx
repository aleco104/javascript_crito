import React from 'react'
import { Link } from 'react-router-dom'

const ArticleBox = ({ title, text, date, month, image, imageAlt, category, URL}) => {
  return (
    <>
        <Link to={URL} className="article-bottom-box">
            <div className="img-yellow-box">
                <img src={image} alt={imageAlt} />
                <div className="yellow-box">
                    <h3>{date}</h3>
                    <p>{month}</p> 
                </div>
            </div>
            <p className="article-category">{category}</p>
            <h3>{title}</h3>
            <p>{text}</p>
        </Link>
    </>
  )
}

export default ArticleBox