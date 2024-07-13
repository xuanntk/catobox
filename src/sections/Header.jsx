import React, { useState } from 'react'
import logo from '../asset/img/logo.svg'
import shop from '../asset/img/shop.svg'
import find from '../asset/img/find.svg'
import menu from '../asset/img/menu.svg'
import { Link } from 'react-router-dom'

function Header() {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <div className='header max-sm:relative flex justify-between items-center 
    pl-[112px] py-[44px] pr-[30px] z-[999]'>
      <img className="max-sm:w-[45vw]" src={logo} />
      <div className='flex gap-[3vw] xl:gap-[70px] '>
        <ul className='menu'>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/Product">Sản phẩm</Link></li>
          <li><Link to="/About">Về catobox</Link></li>
          <li><Link to="/Contact">Liên hệ</Link></li>
        </ul>
        <div className='icon-header sm:relative flex gap-9 max-sm:gap-4'>
          <img src={shop} className='w-[37px] pt-2' />
          <img src={find} className='w-[28px]' />
          <div className='m-auto'>
            <img src={menu} className='menu-icon w-[28px] min-w-[28px]' onClick={()=>setIsOpenMenu(open => !open)}/>
            {isOpenMenu && 
            <ul className='menu-mobie'>
              <li onClick={()=>setIsOpenMenu(open => !open)} ><Link to="/">Trang chủ</Link></li>
              <li onClick={()=>setIsOpenMenu(open => !open)} ><Link to="/Product">Sản phẩm</Link></li>
              <li onClick={()=>setIsOpenMenu(open => !open)} ><Link to="/About">Về catobox</Link></li>
              <li onClick={()=>setIsOpenMenu(open => !open)} ><Link to="/Contact">Liên hệ</Link></li>
            </ul>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
