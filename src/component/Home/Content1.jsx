import React from 'react'
import img1 from "./../../asset/img/content1.jpg"
import "./../../asset/css/Home/content1.css"
import line from "./../../asset/img/Line3.svg"
function Content1() {
  return (
    <div>
      <div className="content_img">
        <img src={img1} />
        <div className='cover_img1'>
        </div>
        <div className="button1">
          <p className='text-[70px]  text-[#FDF6E0] '>thoang thoảng</p>
          <button className='border-2 border-white p-4 rounded-md py-[18px] px-[55px] ml-[25%] text-[25px] text-[#FFFFFF]'>shop now</button>
        </div>
      </div>
      <div className='mt-[84px]'>
        <p className='text-center text-[#96351E] font-bold text-[28px] mb-[10px] mt-[0px]'>Bộ sưu tập theo chủ đề</p>
        <img className='text-center mx-auto mb-[30px]' src={line} alt="" />
      </div>
      <p className='content w-[858px] m-auto text-center text-[19px] '>
        Catobox được ra đời với sứ mệnh mang đến những món quà ý nghĩa,
        thay lời muốn nói từ trái tim bạn đến những người đặc biệt.
        Hơn cả một hộp quà, Catobox là nơi bạn gửi gắm thông điệp yêu thương,
        là cầu nối gắn kết những trái tim. Mỗi sản phẩm trong hộp quà đều được lựa chọn kỹ lưỡng,
        đảm bảo chất lượng và phù hợp với sở thích của người nhận. Catobox không chỉ mang đến niềm vui,
        sự bất ngờ mà còn là lời nhắn nhủ chân thành,
        thể hiện sự quan tâm và trân trọng của bạn dành cho họ.
      </p>
    </div>
  )
}
export default Content1
