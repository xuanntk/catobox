import React from 'react'
import logo from '../../asset/img/logo.svg'
import facebook from '../../asset/img/Contact/facebook.png'
import email from '../../asset/img/Contact/mail.png'
import instagram from '../../asset/img/Contact/instagram.svg'

function Contact_content3() {
    return (
        <div>
            <div className="w-[70vw] m-auto bg-[#A1A1A1] h-[1px] my-[10vh]"></div>
            <div className="flex justify-center p-[40px] ">
                <img className="w-[240px] h-[50px]" src={logo} />
            </div>
            <div className='flex flex-wrap justify-center gap-[15vw] my-[5vh]'>
                <div>
                    <p class="bg-gray-800 text-white text-[20px] text-center w-[230px] py-[15px] mb-[40px]">Số điện thoại</p>
                    <div className='m-auto w-fit'>
                        <div class="text-gray-700 text-justify w-[180px]">
                            <p className="text-[20px] font-bold mb-[10px]">Trường Đại học FPT Cần Thơ</p>
                            <p className="mb-[10px]">600 Nguyễn Văn Cừ Nối Dài,
                                An Bình, Ninh Kiều,Cần Thơ 900000</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="bg-gray-800 text-white text-[20px] text-center w-[230px] py-[15px] mb-[40px]">Địa chỉ</p>
                    <div className='m-auto w-fit'>
                        <div class="text-gray-700 text-justify w-[180px]">
                            <p className="text-[20px] font-bold mb-[10px]">Cty catobox </p>
                            <li className="mb-[10px]">0292 1234 567</li>
                            <li className="mb-[10px]" >0292 7303 636</li>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="bg-gray-800 text-white text-[20px] text-center w-[230px] py-[15px] mb-[40px]">Địa chỉ</p>
                    <div className='m-auto w-fit'>
                        <div class="text-gray-700 text-justify w-[180px]">
                            <div className='flex items-center justify-center mb-[10px] gap-[4px] ml-2'>
                                <img src={email} className="w-[29px]" alt="" />
                                <p>catobox.@gmail.com</p>
                            </div>

                            <a href='https://www.facebook.com/profile.php?id=61561010356508' className='flex items-center mb-[10px] gap-[4px] ml-[2px]'>
                                <img src={facebook} className="w-[29px]" alt="" />
                                <p>catobox</p>
                            </a>

                            <div className='flex items-center mb-[10px] gap-[4px]'>
                                <img src={instagram} alt="" />
                                <p >catobox</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default Contact_content3
