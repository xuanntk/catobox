import React from 'react'

export default function History() {
    const api = [
     "../../asset/img/Product/history1.png",
     "../../asset/img/Product/history2.png",
     "../../asset/img/Product/history3.png",
     "../../asset/img/Product/history4.png",
    ]
  return (
    <div className='bg-[#96351E] bg'>
        <p className='text-center text-[#96351E] font-bold text-[28px] mb-[10px]'>Vừa xem gần đây</p>
      {
        api.map((item, index)=>{
          return(
            <div key={index}>
              <img src={require(`../../asset/img/Product/history${index+1}.png`)} alt="" />
            </div>
          )
        })
      }
    </div>
  )
}
