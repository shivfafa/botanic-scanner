import React from 'react'
import MainImageSection from '../components/MainImageSection'
import contact from "../images/contact.jpg"
import ContactUs from '../components/ContactUs';


export default function Contact() {
  const title = "Contact Us";
  const image=contact;
  const color="white";
  return (
    <>
    <MainImageSection title={title} image={image} color={color}/>
    <ContactUs/>
    </>
  )
}

