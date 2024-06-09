import React from 'react'
import line from "./../../asset/img/Line3.svg"
import "../../asset/css/Home/Content3.css"
import linemini from "./../../asset/img/Linemini.svg"
import content3_1 from "../../asset/img/Home/content3_1.svg"
import content3_2 from "../../asset/img/Home/content3_2.svg"
import content3_3 from "../../asset/img/Home/content3_3.svg"
import content3_4 from "../../asset/img/Home/content3_4.svg"

export default function section3() {
  const api = [
    { img: content3_1, price: "500.000 VNĐ", name: "Sản phẩm" },
    { img: content3_2, price: "500.000 VNĐ", name: "Sản phẩm" },
    { img: content3_3, price: "500.000 VNĐ", name: "Sản phẩm" },
    { img: content3_4, price: "500.000 VNĐ", name: "Sản phẩm" },
  ]
  return (
    <div className='text-center mx-[10vw]'>
      <div className='mt-[84px]'>
        <p className='text-center text-[#96351E] font-bold text-[28px] mb-[10px]'>Bộ sưu tập theo chủ đề</p>
        <img className='text-center mx-auto' src={line} alt="" />
      </div>
      <p className='text-right mt-[41px] mb-[20px]'>Xem thêm ></p>
      <div className='flex justify-between mb-[122px] gap-[20px]'>
        {api.map((item, index) => (
          <div className='content3-card w-fit'>
            <img src={item.img} alt="" />
            <div className='my-[20px] mb-[10px]'>
              <p className='10px text-[21px]' >{item.name}</p>
              <img className='m-auto' src={linemini} alt="" />
            </div>
            <p className='italic text-[15px] mb-[10px]'>Xem chi tiết</p>
            <button className=' font-bold text-[#E4E4E4] bg-[#292929]'>{item.price}</button>
          </div>
        ))
        }
      </div>

    </div>
  )
}
