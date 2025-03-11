import React from 'react'
import { Container } from 'react-bootstrap'
import './ContactBanner.css';
const ContactBanner = () => {
  return (
    <div className="Contact-Banner">
      <Container className="text-center text-white">
        <h1 className="banner-heading">Contact <span> Us</span></h1>
      </Container>
    </div>
  )
}

export default ContactBanner