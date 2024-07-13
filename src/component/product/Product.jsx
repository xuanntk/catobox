import React from 'react'
import History from "./History"
import Content2 from "./Product_Content2"
import Content1 from "./Product_Content1"
import Content3 from "./Content3"
import HeaderBG from "../../sections/HeaderBG"
import "../../asset/css/Product/product.css"

export default function Product() {
  return (
    <div >
      <HeaderBG />
      <Content1 />
      <Content2 />
      <Content3/>
      <History />
    </div>
  )
}
