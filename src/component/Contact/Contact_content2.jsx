import React from 'react'

function Contact_content2() {
    return (
        <div>
            <div class="container mx-auto px-7">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-[200px]">
                    <div class="flex flex-col justify-center">
                        <h1 class="text-[#96351E] text-2xl mb-4 pl-[120px]  font-bold">Nếu bạn có thắc mắc,</h1>
                        <h1 class="text-[#96351E] text-2xl mb-4 pl-[120px] font-bold"> Hãy liên hệ với chúng tôi!</h1>
                        <p class=" px-[120px] mb-6 text-[20px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                    </div>
                    <div class="p-8 ">
                        <div class="mb-4 ">
                            <input type="text" id="id" name="name" placeholder="Họ và tên" class="mt-1 p-2 w-full border-[#A1A1A1] border-b-2 bg-[#FDF6E0]" />
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 ">
                            <div>
                                <input type="text" id="phone" name="phone" placeholder="Số điện thoại" class="mt-1 p-2 w-full border-[#A1A1A1] border-b-2 bg-[#FDF6E0]" />
                            </div>
                            <div>
                                <input type="email" id="email" name="email" placeholder="Email" class="mt-1 p-2 w-full border-[#A1A1A1] border-b-2 bg-[#FDF6E0] " />
                            </div>
                        </div>
                        <div class="mb-4 pb-5 ">
                            <input type="text" id="address" name="address" placeholder="Địa chỉ" class="mt-1 p-2  w-full border-[#A1A1A1] border-b-2 bg-[#FDF6E0]" />
                        </div>
                        <div class="mb-4 ">
                            <textarea id="message" name="message" rows="4" placeholder="Tin Nhắn" class="mt-1 p-2 w-full rounded-lg border-[#A1A1A1] border-2 bg-[#FDF6E0]"></textarea>
                        </div>
                        <div class="flex justify-end">
                            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Gửi</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact_content2
