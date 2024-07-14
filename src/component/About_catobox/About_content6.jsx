import React from 'react'
import img4 from "./../../asset/img/About/img_content6.png"
function About_content6() {
    return (
        <div className="grid grid-cols-2 my-[200px]">
            <div className="ml-[290px]">
                <img className=" h-[415px] w-[820px]" src={img4} />
            </div>
            <div className="ml-[350px]">
                <p className="text-[30px] font-bold mb-[60px]">
                    “Catobox” luôn hướng đến
                </p>
                <p className="w-[377px] text-justify text-[20px]">
                    Đội ngũ của Catobox bao gồm 6 thành viên sáng lập với niềm đam mê và kỹ năng sáng tạo vượt trội.
                    Chúng tôi luôn tìm kiếm và áp dụng những ý tưởng mới mẻ để tạo ra các mẫu hộp quà nến thơm mang phong cách riêng biệt.
                    Catobox chú trọng đến từng chi tiết nhỏ nhất trong thiết kế, từ chất liệu đến màu sắc,
                    để mang lại sự hài lòng cao nhất cho khách hàng.
                </p>
            </div>
        </div>
    )
}

export default About_content6
