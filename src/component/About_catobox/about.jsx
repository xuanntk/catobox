import React from 'react'
import About_content1 from "./About_content1"
import About_content2 from "./About_content2"
import About_content3  from './About_content3'
import Header from '../../sections/Header'

function about() {
  return (
    <div className="">
      <Header/>
      <About_content1/>
      <About_content2/>
      <About_content3/>
    </div>
  )
}

export default about
