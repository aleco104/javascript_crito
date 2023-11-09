import React from 'react'

const LeaveMessage = () => {
  return (
    <section class="leave-message">
            <div class="container">
                <h2>Leave us a message<br/>for any information.</h2>
                <form id="leave-message-form" method="post">
                    <input type="text" id="messageName" name="messageName" title="Name" placeholder="Name*" tabindex="1" /> 
                    <input type="email" id="messageMail" name="messageMail" title="Email" placeholder="Email*" tabindex="2" />
                    <textarea id="message" name="message" placeholder="Your Message*"></textarea>
                    <button type="submit" class="btn-yellow">Send Message<i class="fa-regular fa-arrow-up-right"></i></button>
                </form>   
            </div>
        </section>
  )
}

export default LeaveMessage