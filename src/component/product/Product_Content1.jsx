import React from 'react'
import background from "../../asset/img/Product/background.svg"
import nen from "../../asset/img/Product/nen_background.svg"

function Product_Content1() {
  return (
    <div className='relative'>
      <img className="w-full min-h-[750px] object-cover" src={background} alt="" />
      <img className='absolute top-[25%] min-w-[830px] w-[50vw] max-md:min-w-[100%] max-md:top-[35%]' src={nen} alt="" />
      <span className='absolute top-[85%] right-[10vw] min-w-[400px] text-[24px] text-[#FFFAEB] max-md:bottom-[10%] max-md:text-[21px]'>
        Mỗi món quà là một thông điệp từ trái tim.</span>
    </div>
  )
}

export default Product_Content1
