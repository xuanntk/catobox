import React from 'react'
import logo from '../asset/img/logo.svg'
import shop from '../asset/img/shop.svg'
import find from '../asset/img/find.svg'
import menu from '../asset/img/menu.svg'

function Header() {
  return (
    <div className='flex justify-between items-center p-4'>
      <img src={logo} />
      <div className='flex gap-6'>
        <ul className='menu'>
          <li>Trang chủ</li>
          <li>Sản phẩm</li>
          <li>Về catobox</li>
          <li>Liên hệ</li>
        </ul>
        <div className='header-right'>
          <img src={shop} />
          <img src={find} />
          <img src={menu} />
        </div>
      </div>
    </div>
  )
}

export default Header
