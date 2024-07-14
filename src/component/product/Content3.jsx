import React from 'react'

function Content3() {
  const huongThom = [
    "Hoa cỏ",
    "Phương đông",
    "Tươi mát",
    "Gỗ"
  ]

  const productAPI = [1, 2, 3, 4, 5, 6]

  const [selectedOption, setSelectedOption] = React.useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='mx-[8vw] my-[70px]'>
      <div className='flex justify-center relative'>
        <select className='filter-tool' value={selectedOption} onChange={handleChange}>
          <option value="" disabled>Sắp xếp</option>
          <option value="low">Giá tăng dần</option>
          <option value="high">Giá giảm dần</option>
          <option value="low">Sản phẩm mới nhất</option>
        </select>
      </div>
      <div className='flex max-lg:flex-wrap gap-[4vw] mt-12'>
        <div className="border-2 border-[#ABABAB] w-fit p-8 h-fit">
          <p className='text-[33px] font-semibold text-[#96351E] mb-6'>Bộ lọc</p>
          <p className='text-[25px] font-medium text-[#96351E] my-4'>Giá</p>
          <div className="flex items-center mb-12">
            <input className='price-input' type="number" />
            <span className='mr'>VNĐ</span> <span className='mx-3'>-</span>
            <input className='price-input' type="number" />
            <span>VNĐ</span>
          </div>
          <p className='text-[25px] font-medium text-[#96351E] mb-2'>Hương Thơm</p>
          {huongThom.map((huongThom, index) => {
            return (
              <div className='flex gap-2'>
                <input className="w-[15px] bg-transparent" type="checkbox" />
                <p className='text-[17px]'>{huongThom}</p>
              </div>
            )
          })
          }
        </div>
        <div>
          <div className='flex flex-wrap gap-[2vw] justify-around'>
            {productAPI.map((productAPI, index) => {
              return (
                <div className='text-center mb-[2vw]'>
                  <img className="w-[280px] h-[383px] object-cover" src={require(`../../asset/img/Product/product${index + 1}.jpg`)} alt="" />
                  <p className='pt-3 text-[21px] font-bold'>Hộp quà catobox</p>
                  <p className='p-1 text-[18px]' >200.000 VNĐ</p>
                </div>
              )
            })
            }
          </div>
          <button className="text-[22px] italic w-[230px] h-[60px] border-2 border-[#ABABAB] block m-auto">Xem thêm</button>
        </div>
      </div>

    </div>
  )
}

export default Content3
