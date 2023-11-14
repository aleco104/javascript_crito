import React from 'react'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as Yup from 'yup'

const LeaveMessage = () => {
  const emailRegEx = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

  const messageForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },

    validationSchema: Yup.object( {
      name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),
      email: Yup.string()
        .required("Email is required")
        .matches(emailRegEx, "Email must be valid"),
      message: Yup.string()
        .required("Message is required")
        .min(8, "Message is too short" )
        .max(500, "Message is too long. Message can be maximum 500 characters.")
    }),

    onSubmit: async (messageFormValues) => {
      const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(messageFormValues)
      })

      switch (result.status) {
        case 200: 
          toast.success('Your message has been successfully received!',{theme: 'colored'})
          messageForm.resetForm()
          break;
        case 400:
          toast.error('Oops! Something went wrong. Please try again!', {theme: 'colored'}, {position: 'top-right'})
      }
    }
  })

  return (
    <section className="leave-message">
      <div className="container">
          <h2>Leave us a message<br/>for any information.</h2>
          <form noValidate id="leave-message-form" onSubmit={messageForm.handleSubmit}>

              <input className={messageForm.errors.name && messageForm.touched.name ? 'error' : ''} type="text" id="messageName" name="name" title="Name" placeholder="Name*" tabindex="1" value={messageForm.values.name} onChange={messageForm.handleChange} /> 
              {messageForm.errors.name && messageForm.touched.name ? <div className="error-message">{messageForm.errors.name}</div> : null}

              <input className={messageForm.errors.email && messageForm.touched.email ? 'error' : ''} type="email" id="messageMail" name="email" title="Email" placeholder="Email*" tabindex="2" value={messageForm.values.email} onChange={messageForm.handleChange} />
              {messageForm.errors.email && messageForm.touched.name ? <div className="error-message">{messageForm.errors.email}</div> : null}

              <textarea className={messageForm.errors.message && messageForm.touched.message ? 'error' : ''} id="message" name="message" placeholder="Your Message*" tabindex="3" value={messageForm.values.message} onChange={messageForm.handleChange}></textarea>
              {messageForm.errors.message && messageForm.touched.name ? <div className="error-message">{messageForm.errors.message}</div> : null}

              <button type="submit" class="btn-yellow">Send Message<i class="fa-regular fa-arrow-up-right"></i></button>
          </form>   
      </div>
    </section>
  )
}

export default LeaveMessage