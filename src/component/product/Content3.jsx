import React from 'react'

function Content3() {
  const huongThom = [
    "Hoa cỏ",
    "Phương đông",
    "Tươi mát",
    "Gỗ"
  ]
  return (
    <div className='mx-[8vw]'>
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
              <input type="checkbox" />
              <p>{huongThom}</p>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default Content3
