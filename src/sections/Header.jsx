import React from 'react'
import logo from '../asset/img/logo.svg'
import shop from '../asset/img/shop.svg'
import find from '../asset/img/find.svg'
import menu from '../asset/img/menu.svg'

function Header() {
  return (
    <div className='header flex justify-between items-center px-[112px] py-[44px]'>
      <img src={logo} />
      <div className='flex gap-[90px]'>
        <ul className='menu'>
          <li>Trang chủ</li>
          <li>Sản phẩm</li>
          <li>Về catobox</li>
          <li>Liên hệ</li>
        </ul>
        <div className='flex gap-9'>
          <img src={shop} className='w-[37px] pt-2'/>
          <img src={find} className='w-[28px]'/>
          <img src={menu} className='w-[28px]'/>
        </div>
      </div>
    </div>
  )
}

export default Header
