import React from 'react'
import Footer from '../../shared/Footer'
import ContactForm from './ContactForm'
import ContactLocation from './ContactLocation'
import ContactTop from './ContactTop'

function ContactUs() {
  return (
  <main>
    <ContactTop/>
    <ContactForm/>
    <ContactLocation/>
    <Footer/>
  </main>
  )
}

export default ContactUs