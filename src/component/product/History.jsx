import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function History() {
  const api = [
    "../../asset/img/Product/history1.png",
    "../../asset/img/Product/history2.png",
    "../../asset/img/Product/history3.png",
    "../../asset/img/Product/history4.png",
  ]

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1200, // độ rộng 1500px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600, // dưới 1000px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ]
  };

  return (
    <div className='slider-container bg-[#96351E] p-[55px] my-[200px]'>
      <p className='text-center text-[#FDF6E0] font-bold text-[28px] mb-[10px]'>Vừa xem gần đây</p>
      <div>
        <Slider {...settings}>
          {
            api.map((item, index) => {
              return (
                <div className="p-[1vw]">
                  <div key={index} className="border-2 p-[1vw] bg-[#CB9A8F]">
                    <img className="w-full h-full object-cover" src={require(`../../asset/img/Product/history${index + 1}.png`)} alt="" />
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}
