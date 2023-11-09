import React from 'react'
import element from '../assets/images/Element.svg'
import { Link } from 'react-router-dom'

const Newsletter = () => {
  return (
    <section className="newsletter">
        <img className="background-wavy-lines" src={element} alt="" />
            <div className="container">
                <h2>Get News Updates By Signup</h2>
                <form id="newletterForm" method="post">
                    <input type="email" placeholder="username@domain.com" />
                    <div className="newsletter-subscribe">
                        <Link to="/subscribe"><button className="btn-yellow">Subscribe <i className="fa-solid fa-arrow-up-right"></i></button></Link>
                    </div>
                </form>
            </div>
    </section>
  )
}

export default Newsletter