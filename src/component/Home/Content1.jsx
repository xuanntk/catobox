import React from 'react'
import img1 from "./../../asset/img/content1.jpg"
import "./../../asset/css/content1.css"
import line from "./../../asset/img/Line3.svg"


function Content1() {
  return (
    <div>
      <div className="content_img">
        
          <img src={img1} />
         <div className='cover_img1'>
           
         </div>
        <div className="button1">
          <p className='text-[70px]  text-[#FDF6E0] '>thoang thoảng</p>
          <button className='border-2 border-white p-4 rounded-md py-[18px] px-[55px] ml-[25%] text-[25px] text-[#FFFFFF]'>shop now</button>
        </div>
      </div>
      <div className='mt-[84px]'>
        <p className='text-center text-[#96351E] font-bold text-[28px] mb-[10px] mt-[0px]'>Bộ sưu tập theo chủ đề</p>
        <img className='text-center mx-auto mb-[30px]' src={line} alt="" />
      </div>
      <p className='w-[858px] m-auto text-center text-[20px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
      </p>
    </div>
  )
}

export default Content1
