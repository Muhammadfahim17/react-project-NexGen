import React from 'react'
import img1 from './Container.svg'
import img2 from './Container (1).svg'
import img3 from './Sub Container.svg'
import img4 from './Text Container.svg'
import img5 from './Card.svg'
import img6 from './Text Container (1).svg'
import img7 from './Card (1).svg'
import img8 from './Sub Container (1).svg'
import img9 from './Container (2).svg'
import img9md from './Container (3).svg'
import img10 from './Sub Container (2).svg'

const Yoqub1 = () => {
  return (
    <div className='bg-black'>
      <br />
      <br />
      <br />
      <section className='px-[10%] py-[30px] w-[100%] flex flex-col gap-[20px]'>
        <div className='flex flex-col md:flex-row w-[100%] gap-[20px]'>
          <img src={img1} className='md:w-[67%]' alt="" />
          <img src={img2} className='md:w-[33%]' alt="" />
        </div>
          <img src={img3} alt="" />
      </section>
      <section className='px-[10%] py-[30px] p-[20px] w-[100%] gap-[20px] flex flex-col'>
        <img src={img4} alt="" />
        <div className='flex flex-col md:flex-row gap-[20px]'>
          <img src={img5} className='w-[100%] md:w-[24%]' alt="" />
          <img src={img5} className='w-[100%] md:w-[24%]' alt="" />
          <img src={img5} className='w-[100%] md:w-[24%]' alt="" />
          <img src={img5} className='w-[100%] md:w-[24%]' alt="" />
        </div>
      </section>
      <section className='px-[10%] py-[30px] p-[20px] w-[100%] gap-[20px] flex flex-col'>
        <img src={img6} alt="" />
        <div className='flex flex-wrap gap-[20px]'>
          <img src={img7} className='w-[100%] md:w-[49%]' alt="" />
          <img src={img7} className='w-[100%] md:w-[49%]' alt="" />
          <img src={img7} className='w-[100%] md:w-[49%]' alt="" />
          <img src={img7} className='w-[100%] md:w-[49%]' alt="" />
        </div>
      </section>
      <section className='px-[10%] py-[30px] p-[20px] w-[100%] gap-[20px] flex flex-col'>
        <img src={img8} alt="" />
        <div className='flex flex-wrap gap-[20px]'>
          <img src={img9} className='w-[100%] md:block hidden' alt="" />
          <img src={img9} className='w-[100%] md:block hidden' alt="" />
          <img src={img9md} className='w-[100%] md:hidden' alt="" />
          <img src={img9md} className='w-[100%] md:hidden' alt="" />
        </div>
      </section>
    </div>
  )
}

export default Yoqub1