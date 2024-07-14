import React from 'react'
import img2 from "./../../asset/img/About/img_content1.png"
function About_content3() {
    return (
        <div className="grid grid-cols-2 ">
            <div className="w-[366px] ml-[350px] mt-[220px] ">
                <p className="text-justify mb-[50px]">
                    <p className="text-[30px] font-bold text-center mb-[30px]">Tầm Nhìn</p>
                    <p className="text-[20px]">“Catobox.” muốn mang đến cho mọi người một thương hiệu uy tín và tận tâm,
                        chu đáo trong việc giúp bạn gửi gắm những thông điệp tận trái tim cho
                        những người bạn quan tâm qua những hộp quà ý nghĩa nhất của thương hiệu.</p>
                </p>
                <p className="text-justify">
                    <p className="text-[30px] font-bold text-center mb-[30px] ">Nhiệm Vụ</p>
                    <p  className="text-[20px]">Mong muốn mọi người có thể tìm thấy cho mình những nguyên,
                        vật liệu và món đồ phù hợp về thiết kế hộp quà. Cũng như có thể có nhiều sự lựa chọn hơn
                        trong việc chọn quà tặng cho người thân yêu, những người bên cạnh.
                    </p>
                </p>
            </div>
            <div className="w-auto">
                <img className="w-auto h-[832px] ml-auto" src={img2} />
            </div>
        </div>
    )
}

export default About_content3
