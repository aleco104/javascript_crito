import React from 'react'
import element from '../assets/images/Element.svg'
import Button from '../generics/Button'

const Newsletter = () => {
  return (
    <section className="newsletter">
        <img className="background-wavy-lines" src={element} alt="" />
            <div className="container">
                <h2>Get News Updates By Signup</h2>
                <form id="newletterForm" method="post">
                    <input type="email" placeholder="username@domain.com" />
                    <div className="newsletter-subscribe">
                        <Button color="yellow" text="Subscribe" url="/subscribe"/> 
                    </div>
                </form>
            </div>
    </section>
  )
}

export default Newsletter