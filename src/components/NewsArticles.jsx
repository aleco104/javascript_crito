import React from 'react'
import rectangle607 from '../assets/images/Rectangle 607.svg'
import { Link } from 'react-router-dom'

const NewsArticles = () => {
  return (
    <section className="lets-connect">
            <div className="container">
                <div className="header-titles">
                    <div className="header-title-top">
                        <Link to="/">Home</Link>
                        <p>News</p>
                    </div>
                    <div className="header-title">
                        <h1>News & Articles</h1>
                    </div>
                </div>
            </div>
            <img className="background-waves" src={rectangle607} alt="" />
        </section>
  )
}

export default NewsArticles