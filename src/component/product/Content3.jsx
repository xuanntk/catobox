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
      <div className="">
        <p>Bộ lọc</p>
        <p>Giá</p>
        <p>Hương Thơm</p>
        {huongThom.map((huongThom, index) => {
          return (
            <div>
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
