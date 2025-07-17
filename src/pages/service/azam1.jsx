// import React from 'react'

// const Azam1 = () => {
//   return (
//     <div>Azam1</div>
//   )
// }

// export default Azam1


import imgAzam1 from './Img/Card.png'
import imgAzam2 from './Img/Icon Container (3).png'
import imgAzam3 from './Img/Icon Container (4).png'
import imgAzam4 from './Img/Icon Container (5).png'
import imgAzam5 from './Img/Icon Container (6).png'
import imgAzam6 from './Img/Image (21).png'
import imgAzam7 from './Img/Image (22).png'


export default function Azam1() {




  return (<>

    <section className="w-[96%] flex-col lg:flex-row m-auto bg-[#1A1A1A] rounded-[10px] lg:h-[630px] flex  p-[20px] lg:p-[30px] items-center gap-[20px]">
      <aside>
        <h1 className='font-black text-[60px] text-white'>Empowering YourDigital Vision</h1>
        <p className='text-gray-500 text-[20px]'>At NexGen, we are committed to empowering your digital vision with innovative solutions tailored to your unique needs. Our team of skilled professionals, coupled with cutting-edge technologies, ensures that we deliver exceptional results that elevate your online presence.</p>
      </aside>
      <img src={imgAzam1} alt="" />
    </section>


    <section className='w-[96%] m-auto mt-[60px] flex flex-col gap-[20px]'>
      <div className='bg-[#1A1A1A] p-[20px] rounded-[10px]'>
        <h1 className='font-black text-[30px] text-white'>Key Features of Our Projects</h1>
      </div>
      <div className='flex gap-[20px] flex-col lg:flex-row'>
        <CardAzam1 img={imgAzam2} name="Strategic Planning" des="Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives." />
        <CardAzam1 img={imgAzam3} name="Strategic Planning" des="Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives." />
        <CardAzam1 img={imgAzam4} name="Strategic Planning" des="Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives." />
        <CardAzam1 img={imgAzam5} name="Strategic Planning" des="Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives." />
      </div>
    </section>

    <section className='w-[96%] m-auto mt-[60px] flex flex-col gap-[20px]'>
      <div className='bg-[#1A1A1A] p-[20px] rounded-[10px]'>
        <h1 className='font-black text-[30px] text-white'>Key Features of Our Projects</h1>
      </div>
      <div>
        <CardAzam2 img={imgAzam6} img2={imgAzam2} name="Zenith Fitness App"/>
        <CardAzam2 img={imgAzam6} img2={imgAzam2} name="Zenith Fitness App"/>
      </div>
    </section>

  </>)
}



function CardAzam1(props) {

  return (
    <div className='bg-[#1A1A1a] lg:w-[430px] lg:h-[364px] rounded-[10px] p-[20px] flex flex-col justify-around items-start' >
      <img src={props.img} alt="" />
      <div className='flex flex-col gap-[20px]'>
        <h1 className='text-white font-black text-[30px]'>{props.name}</h1>
        <p className='text-gray-500 '>{props.des}</p>
      </div>
    </div>
  )
}


function CardAzam2(props) {
  
  return(
    <div className='flex gap-[20px] items-center justify-center'>
      <div className='lg:w-[579px] bg-[#1A1A1A] rounded-[10px] lg:h-[426px] p-[20px]'>
      <div className='flex items-center gap-[20px]'>
        <img src={props.img2} alt="" />
        <h1 className='text-[30px] font-bold'>{props.name}</h1>
      </div>
      <p>{props.des1}</p>
      </div>
      <img src={props.img} alt="" />
    <div className='lg:w-[579px] bg-[#1A1A1A] rounded-[10px] lg:h-[426px]'>

      </div>
    </div>
  )
}