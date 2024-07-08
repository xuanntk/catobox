import React from 'react'

function Content3() {
  const huongThom = [
    "Hoa cỏ",
    "Phương đông",
    "Tươi mát",
    "Gỗ"
  ]
  return (
    <div>
      <div className="border w-[284px] h-[470px]">
        <p className='text-[30px] font-semibold text-[#96351E]'>Bộ lọc</p>
        <p className='text-[22px] font-medium text-[#96351E]'>Giá</p>

        <p className='text-[22px] font-medium text-[#96351E]'>Hương Thơm</p>
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
