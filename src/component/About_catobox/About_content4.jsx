import React from 'react'
import img3 from "./../../asset/img/About/content3.png"
import thuyan from "./../../asset/img/About/thuyan.jpg"
import locan from "./../../asset/img/About/locan.jpg"
import thuan from "./../../asset/img/About/thuan.jpg"
import xuan from "./../../asset/img/About/xuan.jpg"
import thanh from "./../../asset/img/About/thanh.jpg"
import tien from "./../../asset/img/About/tien.jpg"

function About_content4() {
  return (
    <div className="relative">
      <img className=" h-[700px] w-[2200px]" src={img3} />
      <div className="absolute top-4 text-center w-full">
        <div className="broder-[20px] w-[850px] bg-black h-[3px] mx-auto my-[70px]"></div>
        <p className="text-[30px] text-center mb-[100px] font-bold">Nhóm của chúng tôi</p>
        <div className="flex justify-center w-full">
          <img className=" h-[220px] w-[200px] px-[6px]  object-cover " src={thanh} />
          <img className=" h-[220px] w-[200px] px-[6px]  object-cover " src={xuan} />
          <img className=" h-[220px] w-[200px] px-[6px] object-cover " src={thuyan} />
          <img className=" h-[220px] w-[200px] px-[6px] object-cover " src={locan} />
          <img className=" h-[220px] w-[200px] px-[6px] object-cover " src={thuan} />
          <img className=" h-[220px] w-[200px] px-[6px] object-cover " src={tien} />
        </div>
      </div>
    </div>
  )
}

export default About_content4
