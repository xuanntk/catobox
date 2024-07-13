import React from 'react'
import img1 from './../../asset/img/About/content1.jpg'
function About_content1() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="my-[250px] ml-[400px]">
        <p className="text-[25px] mb-[40px] font-bold">Mỗi món quà là một thông điệp từ trái tim.</p>
        <p className="w-[500px] text-justify mb-3 text-[20px]">Catobox được ra đời với sứ mệnh mang đến những món quà ý nghĩa, thay lời muốn nói từ trái tim bạn đến những người đặc biệt.</p>
        <p className="w-[500px] text-justify text-[20px]">Hơn cả một hộp quà, Catobox là nơi bạn gửi gắm thông điệp yêu thương, là cầu nối gắn kết những trái tim. Mỗi sản phẩm trong hộp quà đều được lựa chọn kỹ lưỡng, đảm bảo chất lượng và phù hợp với sở thích của người nhận. Catobox không chỉ mang đến niềm vui, sự bất ngờ mà còn là lời nhắn nhủ chân thành, thể hiện sự quan tâm và trân trọng của bạn dành cho họ.</p>
      </div>
      <div>
        <img className="w-[588px] h-[439px] my-[100px] mx-[200px]" src={img1} />
      </div>
    </div>
  )
}

export default About_content1
