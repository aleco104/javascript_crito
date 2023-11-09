import React from 'react';
import logotype from '../assets/images/Logo.svg';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="logo">
                <a href="/">
                    <img src={logotype} alt="crito logotype"/>
                </a>
            </div>
            <div className="content">
                <div className="content-top">
                    <div className="contacts">
                        <div className="contact-box">
                            <div><i className="fa-regular fa-phone-volume"></i>+46 (8) 121 470 50</div>
                        </div>
                        <div className="contact-box-last">
                            <div><i className="fa-regular fa-envelope"></i>info@crito.com</div>
                        </div>
                        <div className="contact-box-last">
                            <div><i className="fa-regular fa-location-dot"></i>Sveavägen 31, 111 34 STOCKHOLM</div>
                        </div>
                    </div>
                    <div className="socialmedia">
                        <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="content-bottom">
                    <div className="menu">
                        <nav>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/services">Service</NavLink>
                            <NavLink to="/news">News</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </nav>
                    </div>
                    <div className="login" >
                        <Link to="/login" className="btn-yellow">Login<i className="fa-regular fa-arrow-up-right"></i></Link>    
                    </div>
                </div>
            </div>
            <button className="bar">
                <Link to="#"><i className="fa-regular fa-bars"></i></Link>    
            </button>
        </div>
    </header>
  )
}

export default Header