import React from 'react'
import logo from '../../asset/img/logo.svg'
function Contact_content3() {
    return (
        <div>
            <div className="flex justify-center p-[40px] ">
                <img className="w-[240px] h-[50px]" src={logo} />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto my-[40px]">
                <div class="text-center ml-[300px] ">
                    <div class="bg-gray-800 text-white px-[45px] py-2  inline-block mb-4 w-[216px] h-[60px] text-[20px] ">Địa chỉ</div>
                    <div className="mx-[110px] p-3">
                        <p class="text-gray-700 my-[10px] min-w-[min-content] text-left ">
                            <p className="text-[20px] font-bold mb-[10px]">Trường Đại học FPT Cần Thơ</p>
                            <p className="mb-[10px]">600 Nguyễn Văn Cừ Nối Dài,
                                An Bình, Ninh Kiều,Cần Thơ 900000</p>
                        </p>
                    </div>

                </div>
                <div class="text-center  ">
                    <div class="bg-gray-800 text-white px-[45px] py-2 inline-block mb-4  w-[216px]  h-[60px] text-[20px] ">Số điện thoại</div>
                    <div className="mx-[110px]  ">
                        <p class="text-gray-700 my-[10px] min-w-[min-content]">
                            <p className="text-[20px] font-bold mb-[10px]">Cty catobox</p>
                            <p className="mb-[10px]">• 0292 1234 567</p>
                            <p className="mb-[10px]">• 0292 7303 636</p>
                        </p>
                    </div>
                </div>
                <div class="text-center mr-[150px] ">
                    <div class="bg-gray-800 text-white px-[45px] py-2  inline-block mb-4 w-[216px] h-[60px] text-[20px]">Khác</div>
                    <div className="">
                        <p class="text-gray-700 my-[10px]">
                            <p className="mb-[10px]">Catobox@gmail.com</p>
                            <p className="mb-[10px]">Catobox.</p>
                            <p className="mb-[10px]">Catobox.</p>
                        </p>
                    </div>

                </div>
            </div>



        </div>

    )
}

export default Contact_content3
