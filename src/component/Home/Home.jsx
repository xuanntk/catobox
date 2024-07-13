import React from 'react'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'
import Header from '../../sections/Header';

export default function Home() {
  return (
    <div>  
      <Header /> 
      <Content1/>
      <Content2/>
      <Content3/>
    </div>
  )
}
