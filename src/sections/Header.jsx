import React from 'react'
import logo from '../asset/img/logo.svg'
import shop from '../asset/img/shop.svg'
import find from '../asset/img/find.svg'
import menu from '../asset/img/menu.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header flex justify-between items-center 
    pl-[112px] py-[44px] pr-[30px] '>
      <img className="max-sm:w-[45vw]" src={logo} />
      <div className='flex gap-[3vw] xl:gap-[70px] '>
        <ul className='menu'>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="product">Sản phẩm</Link></li>
          <li><Link>Về catobox</Link></li>
          <li><Link>Liên hệ</Link></li>
        </ul>
        <div className='flex gap-9 max-sm:gap-4'>
          <img src={shop} className='w-[37px] pt-2' />
          <img src={find} className='w-[28px]' />
          <img src={menu} className='w-[28px]' />
        </div>
      </div>
    </div>
  )
}

export default Header
