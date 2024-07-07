import React from 'react';
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "../../asset/css/Product/slider.css"

import img1 from "../../asset/img/Home/content2_1.svg"
import img2 from "../../asset/img/Home/content2_2.svg"
import img3 from "../../asset/img/Home/content2_3.svg"

function Content2() {
  const api = [
    img1,
    img2,
    img3,
  ]

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200, // độ rộng 1500px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600, // dưới 1000px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ]
  };

  return (
    <div className='bg-[#96351E] p-[55px] my-[200px]'>
      <div className="slider-container">
        <Slider {...settings} >
          {
            api.map((item, index) => (
              <div key={index} className="p-2" >
                <img className="h-[270px] object-cover m-auto" src={item} alt="" />
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default Content2;
