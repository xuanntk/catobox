import React from 'react'
import Contact_content2 from './Contact_content2'
import Contact_content3 from './Contact_content3'
import Contact_content1 from './Contact_content1'
import Header from '../../sections/HeaderBG';

export default function Contact() {
  return (
    <div>
      <Header/>
      <Contact_content1 />
      <Contact_content2 />
      <Contact_content3 />
    </div>
  )
}