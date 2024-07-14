import React from 'react'
import img1 from './../../asset/img/Contact/Group.png'
function Contact_content1() {
  return (
    <div className='relative'>
      <div>
        <img className="w-[100%] min-h-[750px] object-cover" src={img1} />
      </div>
      <div className='absolute text-[#FFFAEB] bottom-[17%] left-[8vw] text-center'>
        <p className='text-[58px] font-bold'>Liên Hệ</p>
        <p className='text-[32px] font-semibold'>với chúng tôi</p>
      </div>
    </div>
  )
}

export default Contact_content1
