import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from '../generics/Button';

const HeaderBar = () => {

  return (
    <div className="header-bar">
        <nav className="bar-menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Service</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="bar-contacts">
            <div className="bar-contact-title">Contact</div>
            <div className="bar-contact-box">
                <div><i className="fa-regular fa-phone-volume"></i>+46 (8) 121 470 50</div>
            </div>
            <div className="bar-contact-box"> 
                <div><i className="fa-regular fa-envelope"></i>info@crito.com</div>
            </div>
            <div className="bar-contact-box-last">
                <div><i className="fa-regular fa-location-dot"></i>Sveavägen 31, 111 34 STOCKHOLM</div>
            </div>
            <div className="socialmedia">
                <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <div className="login">
                <Button color="yellow" text="Login" url="/login"/>
            </div>
        </div>
    </div>
  )
}

export default HeaderBar