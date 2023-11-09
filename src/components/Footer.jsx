import React from 'react'
import footerLogo from '../assets/images/footer-logo.svg'
import footerWaves from '../assets/images/footer-waves.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="footer-part-one">
            <div className="container"> 
                <div className="footer-presentation">
                    <img src={footerLogo} alt="crito logotype" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
                <div className="footer-top-box footer-company">
                    <h3>Company</h3>
                    <Link to="#">About</Link>
                    <Link to="#">Features</Link>
                    <Link to="#">Works</Link>
                    <Link to="#">Career</Link>
                </div>
                <div className="footer-top-box footer-help">
                    <h3>Help</h3>
                    <Link to="#">Customer Support</Link>
                    <Link to="#">Delivery Details</Link>
                    <Link to="#">Terms & Conditions</Link>
                    <Link to="#">Privacy Policy</Link>
                </div>
                <div className="footer-top-box footer-resources">
                    <h3>Resources</h3>
                    <Link to="#">Free eBooks</Link>
                    <Link to="#">Development Tutorial</Link>
                    <Link to="#">How to - Blog</Link>
                    <a href="https://youtube.com/">Youtube Playlist</a>
                </div>
                <div className="footer-top-box footer-link">
                    <h3>Link</h3>
                    <Link to="#">Free eBooks</Link>
                    <Link to="#">Development Tutorial</Link>
                    <Link to="#">How to - Blog</Link>
                    <a href="https://youtube.com/">Youtube Playlist</a>
                </div>

                <div className="footer-waves">
                    <img src={footerWaves} alt="" />
                </div>
            </div>
        </div>
        <div className="footer-part-two">
            <div className="container">
                <div className="footer-two-left">
                    <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                </div>
                <div className="footer-two-right">
                    <div className="footer-socialmedia">
                        <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer