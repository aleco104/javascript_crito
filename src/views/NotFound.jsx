import React from 'react'
import imageNotFound from '../assets/images/404.jfif'
import Header from '../components/Header'
import Footer from '../components/Footer'

const NotFound = () => {
  return (
    <>
      <Header/>
      <div className="page-not-found">
        <div className="container">
          <div className="not-found-text">
            <h2>Oops! 404 page not found</h2>
            <h3>Sorry, the page you were looking for does not exist</h3>
          </div>
          <div className="image-not-found ">
            <img src={imageNotFound} />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default NotFound