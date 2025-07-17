import React, { useEffect, useState } from 'react'
import image1 from '../../pages/catalog/imagefahim/Image (64).png'
import image2 from '../../pages/catalog/imagefahim/Image (68).png'
import image3 from '../../pages/catalog/imagefahim/Buttons Container (1).png'
import image4 from '../../pages/catalog/imagefahim/Button (4).png'
import image5 from '../../pages/catalog/imagefahim/Button (5).png'
import image6 from '../../pages/catalog/imagefahim/Image (65).png'
import image7 from '../../pages/catalog/imagefahim/Image (66).png'
import image8 from '../../pages/catalog/imagefahim/Image (67).png'
import image9 from '../../pages/catalog/imagefahim/Button (6).png'
import { useTodoAsyncStore } from '../../service'
import { Button, Modal } from 'antd';

const Fahim1 = () => {

  let {get,users,deleteuser,addNewUser,changeStatus,editNewUser} = useTodoAsyncStore()


  useEffect(() => {
    get()
  },[])

  const [isModalOpen, setIsModalOpen] = useState(false);
  let [inpImg,setInpImg] = useState('')
  let [inpName,setInpName] = useState('')
  let [inpAge,setInpAge] = useState('')
  let [inpDes,setInpDes] = useState('')
  let [inpStatus,setInpStatus] = useState('true')

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function addUser() {
    let newUser = {
      name : inpName,
      img : inpImg,
      age : inpAge,
      des : inpDes,
      status : inpStatus == 'true' ? true : false,
      id : Date.now().toString()
    }

    addNewUser(newUser)

  }

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  let [inpEditImg,setInpEditImg] = useState('')
  let [inpEditName,setInpEditName] = useState('')
  let [inpEditAge,setInpEditAge] = useState('')
  let [inpEditDes,setInpEditDes] = useState('')
  let [inpEditStatus,setInpEditStatus] = useState('')
  let [idx,setIdx] = useState(null)

  const showEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleEditOk = () => {
    setIsEditModalOpen(false);
  };

  const handleEditCancel = () => {
    setIsEditModalOpen(false);
  };

  function openDialog(e) {
    showEditModal()
    setInpEditImg(e.img)
    setInpEditName(e.name)
    setInpEditAge(e.age)
    setInpEditDes(e.des)
    setInpEditStatus(e.status == true ? 'true' : 'false')
    setIdx(e.id)
  }


  function updateUser () {
    let edit = {
      name : inpEditName,
      age : inpEditAge,
      des : inpEditDes,
      status : inpEditStatus == 'true' ? true : false,
      img : inpEditImg,
    }

    editNewUser(idx,edit)

  }

  return (
    <div className='bg-[#0F0F0F] text-white'>


    <div className='hidden sm:block'>

  <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isEditModalOpen}
        onOk={updateUser}
        onCancel={handleEditCancel}
      >
        <div>
          <input value={inpEditImg} onChange={(e) => setInpEditImg(e.target.value)} type="text" placeholder='Image...' className='border' />
          <input value={inpEditName} onChange={(e) => setInpEditName(e.target.value)} type="text" placeholder='Name...' className='border'  />
          <input value={inpEditAge} onChange={(e) => setInpEditAge(e.target.value)} type="text" placeholder='Age....' className='border' />
          <input value={inpEditDes} onChange={(e) => setInpEditDes(e.target.value)} type="text" placeholder='Des...' className='border' />
          <select value={inpEditStatus} onChange={(e) => setInpEditStatus(e.target.value)} className='border'>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>
      </Modal>

    <div className='pt-[150px] w-[93%] m-auto flex items-center justify-between'>
      <div className='bg-[#1A1A1A] p-[45px] rounded-xl w-[800px] flex flex-col py-[100px] items-start gap-[10px]'>
        <h1 className='flex items-center font-[600] text-[40px]'>MASTERING IN THE ART <span className='flex ml-[15px] gap-[10px] text-[#CE7D63] text-[19px] items-center font-[500]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg> START A PROJECT</span> </h1>
        <h1 className=' font-[600] text-[40px]'>OF MINIMALISTIC DESIGN</h1>
      </div>

      <div className='w-[450px] flex flex-col gap-[15px] bg-[#1A1A1A] p-[20px] rounded-xl'>
      <div className='bg-[#1F1F1F] p-[20px] rounded-xl flex items-center justify-between'>
      <h2 className='text-[#B3B3B2] font-bold'>AUTHOR </h2>
      <p className='font-[500]'>SOPHIA BEST</p>
      </div>
      <div className='bg-[#1F1F1F] p-[20px] rounded-xl flex items-center justify-between'>
      <h2 className='text-[#B3B3B2] font-bold'>Published Date </h2>
      <p className='font-[500]'>25th October 2023</p>
      </div>
      <div className='bg-[#1F1F1F] p-[20px] rounded-xl flex items-center justify-between'>
      <h2 className='text-[#B3B3B2] font-bold'>Category </h2>
      <p className='font-[500]'>Design</p>
      </div>
      <div className='bg-[#1F1F1F] p-[20px] rounded-xl flex items-center justify-between'>
      <h2 className='text-[#B3B3B2] font-bold'>Read Time </h2>
      <p className='font-[500]'>5 minutes</p>
      </div>
      </div>

    </div>

    <img className='w-[95%] m-auto py-[50px]'  src={image1} alt="" />


    <div className='w-[95%] m-auto flex items-start justify-between'>
    <img src={image3} alt="" />
    <div className='bg-[#1A1A1A] p-[25px] w-[750px] flex flex-col items-start gap-[25px] rounded-xl'>
    <h2 className='font-[600] text-[24px]'>THE ESSENCE OF MINIMALISM IN DESIGN</h2>
    <p className='text-[#B3B3B2] font-[500]'>In the realm of design, the essence of minimalism lies in the deliberate choice to distill complexity and convey a powerful message through simplicity. It's an art form that celebrates the beauty of space, emphasizing the significance of each carefully chosen element. A minimalist design isn't about deprivation; rather, it's a conscious decision to focus on the core, allowing the audience to engage with a visual narrative that is both refined and impactful</p>
    <p className='text-[#B3B3B2] font-[500]'>As we explore the essence of minimalistic design, we uncover the subtle nuances that contribute to its allure. The use of negative space, a hallmark of minimalism, creates breathing room within the composition, allowing the viewer's gaze to rest and appreciate the inherent beauty of the design. The simplicity in form and color becomes a canvas for expression, where every line and shade tells a story. By embracing minimalism, designers have the opportunity to communicate more with less, fostering a connection that transcends visual aesthetics.    </p>
    <p className='text-[#B3B3B2] font-[500]'>At its core, minimalism in design challenges conventional notions, encouraging a shift from excess to essence. It invites both creators and consumers to engage in a thoughtful dialogue with the visual elements, promoting a sense of mindfulness and intentionality. The essence of minimalistic design, therefore, lies not just in its visual appeal but in the profound impact it has on the way we perceive and interact with the world of design.</p>
    <h2 className='font-[600] text-[24px]'>MINIMALISM BEYOND AESTHETICK</h2>
    <p className='text-[#B3B3B2] font-[500]'>Beyond its visually captivating exterior, minimalism is a design philosophy that permeates every aspect of the creative process, extending its influence far beyond the surface. This philosophy becomes a lens through which designers view their craft, shaping not just what is seen but how it is experienced. The minimalist approach transcends mere aesthetics; it becomes a mindset that emphasizes clarity, functionality, and a deeper connection with the audience.    </p>
    <p>Minimalism, as a philosophy, challenges the notion that complexity is synonymous with sophistication. It prompts designers to question the necessity of each element, encouraging a meticulous evaluation of form and function. This shift in perspective extends to the user experience, where the removal of unnecessary clutter allows for a seamless and intuitive interaction. Beyond creating visually pleasing designs, the minimalist philosophy becomes a guiding force for designing experiences that are inherently user-centric.    </p>
    <h2 className='font-[600] text-[24px]'>PRACTICAL TIPS FOR MASTERING MINIMALISTIC DESIGN</h2>
    <p className='text-[#B3B3B2] font-[500]'>The journey to mastering minimalistic design involves a practical exploration of principles and techniques that breathe life into the philosophy. It begins with an understanding of the psychology of color in minimalism, where the strategic use of a limited color palette contributes to the overall impact of the design. The intentional choice of typography plays a pivotal role, guiding the viewer through the visual narrative with clarity and purpose.    </p>
    <p className='text-[#B3B3B2] font-[500]'>Navigating the terrain of minimalistic design also involves a keen awareness of the power of negative space. Far from being empty, this space becomes a deliberate pause, allowing the audience to absorb and appreciate the essential elements of the composition. Striking the right balance between simplicity and sophistication is an art in itself, requiring a discerning eye and a commitment to the core principles of minimalism.    </p>
    <p className='text-[#B3B3B2] font-[500]'>Practical tips extend beyond the theoretical, delving into the day-to-day decisions that shape a minimalist design. From the selection of imagery to the judicious use of graphic elements, each choice contributes to the overall impact. Mastery in minimalistic design is not merely about adherence to a set of rules; it's about developing an intuition that guides the creative process, ensuring that every design decision serves a purpose and contributes to the cohesive whole.</p>
    </div>

    <div className='bg-[#1A1A1A] p-[22px] flex flex-col items-start gap-[25px] rounded-xl w-[350px]'>
    <div className='flex items-center gap-[20px]'>
      <img src={image2} alt="" />
      <div className='flex flex-col items-start gap-[8px]'>
        <h2 className='font-[500]'>Wade Warren</h2>
        <p className='text-[#81807E] font-bold'>Art Director</p>
      </div>
    </div>
    <p className='text-[#B3B3B2] font-[500]'>Crafting visual narratives that captivate and inspire, weaving creativity into every chapter of the design journey.</p>
      <p className='text-[#B3B3B2] font-[500]'>✉️ @wadewarren</p>
      <div className='flex items-center justify-between w-[100%]'>
        <img src={image4} alt="" />
        <p className='text-[#B3B3B2] font-[500]'>
        Liked By
        </p>
        <p className='font-[500]'>Users</p>
      </div>
      <div className='flex items-center justify-between w-[100%]'>
        <img src={image5} alt="" />
        <p className='text-[#B3B3B2] font-[500]'>
        Shared BY
        </p>
        <p className='font-[500]'>Users</p>
      </div>
    </div>

    </div>



    <div className='w-[94%] m-auto py-[150px]'>
    <div className='bg-[#1A1A1A] p-[25px] rounded-xl flex items-center justify-between'>
    <h1 className='font-[500] text-[35px]'>RELATED BLOGS</h1>
    <p className='text-[#B3B3B2] font-bold'>ALL BLOGS</p>
    </div>

    <div className='mt-[50px] flex items-center justify-between'>
      <div className='bg-[#1A1A1A] p-[15px] w-[430px] h-[565px] justify-between rounded-xl flex flex-col items-start gap-[20px]'>
      <img src={image6} alt="" />
      <h2 className='text-[#F9EFEC] font-[500] text-[20px]'>Optimizing Mobile User Experience for Higher Conversions</h2>
      <p className='text-[#B3B3B2] font-[400]'>Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...</p>
      <div className='flex items-center gap-[15px]'>
        <img src={image9} alt="" />
        <p className='text-[#B3B3B2] font-[700]'>Read Full Blog</p>
      </div>
      </div>
      <div className='bg-[#1A1A1A] p-[15px] w-[430px] h-[565px] justify-between rounded-xl flex flex-col items-start gap-[20px]'>
      <img src={image7} alt="" />
      <h2 className='text-[#F9EFEC] font-[500] text-[20px]'>Mastering the Art of Minimalistic Design</h2>
      <p className='text-[#B3B3B2] font-[400]'>Simplicity and elegance take center stage in minimalistic design. Learn the principles of minimalism, how to effectively communicate with fewer elements...</p>
      <div className='flex items-center gap-[15px]'>
        <img src={image9} alt="" />
        <p className='text-[#B3B3B2] font-[700]'>Read Full Blog</p>
      </div>
      </div>
      <div className='bg-[#1A1A1A] p-[15px] w-[430px] h-[565px] justify-between rounded-xl flex flex-col items-start gap-[20px]'>
      <img src={image8} alt="" />
      <h2 className='text-[#F9EFEC] font-[500] text-[20px]'>The Psychology of Visual Design in Branding</h2>
      <p className='text-[#B3B3B2] font-[400]'>Uncover the impact of visual elements in branding and how they influence customer perceptions and emotions. Explore color psychology, typography choices....</p>
      <div className='flex items-center gap-[15px]'>
        <img src={image9} alt="" />
        <p className='text-[#B3B3B2] font-[700]'>Read Full Blog</p>
      </div>
      </div>
    </div>

    </div>


    <div className='w-[92%] m-auto mb-[70px]'>
    <Button type="primary" onClick={showModal}>
        + Add New User
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={addUser}
        onCancel={handleCancel}
      >
        <div>
          <input value={inpImg} onChange={(e) => setInpImg(e.target.value)} type="text" placeholder='Image...' className='border' />
          <input value={inpName} onChange={(e) => setInpName(e.target.value)} type="text" placeholder='Name...' className='border'  />
          <input value={inpAge} onChange={(e) => setInpAge(e.target.value)} type="text" placeholder='Age....' className='border' />
          <input value={inpDes} onChange={(e) => setInpDes(e.target.value)} type="text" placeholder='Des...' className='border' />
          <select value={inpStatus} onChange={(e) => setInpStatus(e.target.value)} className='border'>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>
      </Modal>
    </div>

    <div className='w-[95%] m-auto pb-[100px]'>
    <div className='bg-[#1A1A1A] p-[25px] rounded-xl flex items-center justify-between'>
    <h1 className='font-[500] text-[35px]'>TESTIMONIALS</h1>
    <p className='text-[#B3B3B2] font-bold'>ALL BLOGS</p>
    </div>

    <div className='flex flex-wrap justify-between gap-[40px] mt-[35px]'>
      {users.map((e) => {
        return (
          <div className='w-[330px] p-[10px] rounded-xl bg-[#1A1A1A] flex flex-col items-center text-center gap-[15px]'>
            <img className='w-[55px] h-[55px] rounded-full' src={e.img} alt="" />
            <h1>{e.name}</h1>
            <h1>{e.age}</h1>
            <h1>{e.des}</h1>
            <h1>{e.status ? 'Active' : 'Inactive'}</h1>
            <div className='flex items-center gap-[15px]'>
              <button onClick={() =>deleteuser(e.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg></button>
              <button onClick={() => openDialog(e)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg></button>
              <input onClick={() => changeStatus(e)} checked={e.status} type="checkbox" />
            </div>
          </div>
        )
      })}
    </div>

    </div>

    </div>







    <div className='sm:hidden'>

    <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isEditModalOpen}
        onOk={updateUser}
        onCancel={handleEditCancel}
      >
        <div>
          <input value={inpEditImg} onChange={(e) => setInpEditImg(e.target.value)} type="text" placeholder='Image...' className='border' />
          <input value={inpEditName} onChange={(e) => setInpEditName(e.target.value)} type="text" placeholder='Name...' className='border'  />
          <input value={inpEditAge} onChange={(e) => setInpEditAge(e.target.value)} type="text" placeholder='Age....' className='border' />
          <input value={inpEditDes} onChange={(e) => setInpEditDes(e.target.value)} type="text" placeholder='Des...' className='border' />
          <select value={inpEditStatus} onChange={(e) => setInpEditStatus(e.target.value)} className='border'>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>
      </Modal>

    <div className='pt-[150px] w-[95%] p-[10px] m-auto flex flex-col gap-[20px] items-center justify-between'>
      <div className='bg-[#1A1A1A] p-[25px] rounded-xl w-[100%] flex flex-col py-[100px] items-start gap-[10px]'>
        <h1 className='flex items-center font-[600] text-[25px]'>MASTERING IN THE ART <span className='flex ml-[15px] gap-[10px] text-[#CE7D63] text-[19px] items-center font-[500]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg> START A PROJECT</span> </h1>
        <h1 className=' font-[600] text-[25px]'>OF MINIMALISTIC DESIGN</h1>
      </div>

      <div className='w-[100%] flex flex-col gap-[15px] bg-[#1A1A1A] p-[20px] rounded-xl'>
      <div className='bg-[#1F1F1F] p-[20px] rounded-xl flex items-center justify-between'>
      <h2 className='text-[#B3B3B2] font-bold'>AUTHOR </h2>
      <p className='font-[500]'>SOPHIA BEST</p>
      </div>
      <div className='bg-[#1F1F1F] p-[20px] rounded-xl flex items-center justify-between'>
      <h2 className='text-[#B3B3B2] font-bold'>Published Date </h2>
      <p className='font-[500]'>25th October 2023</p>
      </div>
      <div className='bg-[#1F1F1F] p-[20px] rounded-xl flex items-center justify-between'>
      <h2 className='text-[#B3B3B2] font-bold'>Category </h2>
      <p className='font-[500]'>Design</p>
      </div>
      <div className='bg-[#1F1F1F] p-[20px] rounded-xl flex items-center justify-between'>
      <h2 className='text-[#B3B3B2] font-bold'>Read Time </h2>
      <p className='font-[500]'>5 minutes</p>
      </div>
      </div>

    </div>

    <img className='w-[95%] m-auto py-[50px]'  src={image1} alt="" />


    <div className='w-[98%] p-[15px] m-auto flex flex-col gap-[20px] items-start justify-between'>
    {/* <img src={image3} alt="" /> */}
    <div className='bg-[#1A1A1A] p-[25px] w-[98%] flex flex-col items-start gap-[25px] rounded-xl'>
    <h2 className='font-[600] text-[24px]'>THE ESSENCE OF MINIMALISM IN DESIGN</h2>
    <p className='text-[#B3B3B2] font-[500]'>In the realm of design, the essence of minimalism lies in the deliberate choice to distill complexity and convey a powerful message through simplicity. It's an art form that celebrates the beauty of space, emphasizing the significance of each carefully chosen element. A minimalist design isn't about deprivation; rather, it's a conscious decision to focus on the core, allowing the audience to engage with a visual narrative that is both refined and impactful</p>
    <p className='text-[#B3B3B2] font-[500]'>As we explore the essence of minimalistic design, we uncover the subtle nuances that contribute to its allure. The use of negative space, a hallmark of minimalism, creates breathing room within the composition, allowing the viewer's gaze to rest and appreciate the inherent beauty of the design. The simplicity in form and color becomes a canvas for expression, where every line and shade tells a story. By embracing minimalism, designers have the opportunity to communicate more with less, fostering a connection that transcends visual aesthetics.    </p>
    <p className='text-[#B3B3B2] font-[500]'>At its core, minimalism in design challenges conventional notions, encouraging a shift from excess to essence. It invites both creators and consumers to engage in a thoughtful dialogue with the visual elements, promoting a sense of mindfulness and intentionality. The essence of minimalistic design, therefore, lies not just in its visual appeal but in the profound impact it has on the way we perceive and interact with the world of design.</p>
    <h2 className='font-[600] text-[24px]'>MINIMALISM BEYOND AESTHETICK</h2>
    <p className='text-[#B3B3B2] font-[500]'>Beyond its visually captivating exterior, minimalism is a design philosophy that permeates every aspect of the creative process, extending its influence far beyond the surface. This philosophy becomes a lens through which designers view their craft, shaping not just what is seen but how it is experienced. The minimalist approach transcends mere aesthetics; it becomes a mindset that emphasizes clarity, functionality, and a deeper connection with the audience.    </p>
    <p>Minimalism, as a philosophy, challenges the notion that complexity is synonymous with sophistication. It prompts designers to question the necessity of each element, encouraging a meticulous evaluation of form and function. This shift in perspective extends to the user experience, where the removal of unnecessary clutter allows for a seamless and intuitive interaction. Beyond creating visually pleasing designs, the minimalist philosophy becomes a guiding force for designing experiences that are inherently user-centric.    </p>
    <h2 className='font-[600] text-[24px]'>PRACTICAL TIPS FOR MASTERING MINIMALISTIC DESIGN</h2>
    <p className='text-[#B3B3B2] font-[500]'>The journey to mastering minimalistic design involves a practical exploration of principles and techniques that breathe life into the philosophy. It begins with an understanding of the psychology of color in minimalism, where the strategic use of a limited color palette contributes to the overall impact of the design. The intentional choice of typography plays a pivotal role, guiding the viewer through the visual narrative with clarity and purpose.    </p>
    <p className='text-[#B3B3B2] font-[500]'>Navigating the terrain of minimalistic design also involves a keen awareness of the power of negative space. Far from being empty, this space becomes a deliberate pause, allowing the audience to absorb and appreciate the essential elements of the composition. Striking the right balance between simplicity and sophistication is an art in itself, requiring a discerning eye and a commitment to the core principles of minimalism.    </p>
    <p className='text-[#B3B3B2] font-[500]'>Practical tips extend beyond the theoretical, delving into the day-to-day decisions that shape a minimalist design. From the selection of imagery to the judicious use of graphic elements, each choice contributes to the overall impact. Mastery in minimalistic design is not merely about adherence to a set of rules; it's about developing an intuition that guides the creative process, ensuring that every design decision serves a purpose and contributes to the cohesive whole.</p>
    </div>

    <div className='bg-[#1A1A1A] p-[22px] flex flex-col items-start gap-[25px] rounded-xl w-[97%]'>
    <div className='flex items-center gap-[20px]'>
      <img src={image2} alt="" />
      <div className='flex flex-col items-start gap-[8px]'>
        <h2 className='font-[500]'>Wade Warren</h2>
        <p className='text-[#81807E] font-bold'>Art Director</p>
      </div>
    </div>
    <p className='text-[#B3B3B2] font-[500]'>Crafting visual narratives that captivate and inspire, weaving creativity into every chapter of the design journey.</p>
      <p className='text-[#B3B3B2] font-[500]'>✉️ @wadewarren</p>
      <div className='flex items-center justify-between w-[100%]'>
        <img src={image4} alt="" />
        <p className='text-[#B3B3B2] font-[500]'>
        Liked By
        </p>
        <p className='font-[500]'>Users</p>
      </div>
      <div className='flex items-center justify-between w-[100%]'>
        <img src={image5} alt="" />
        <p className='text-[#B3B3B2] font-[500]'>
        Shared BY
        </p>
        <p className='font-[500]'>Users</p>
      </div>
    </div>

    </div>



    <div className='w-[98%] p-[12px] m-auto py-[150px]'>
    <div className='bg-[#1A1A1A] p-[25px] rounded-xl  items-center justify-between'>
    <h1 className='font-[500] text-[35px]'>RELATED BLOGS</h1>
    {/* <p className='text-[#B3B3B2] font-bold'>ALL BLOGS</p> */}
    </div>

    <div className='mt-[50px] flex flex-col gap-[30px] items-center justify-between'>
      <div className='bg-[#1A1A1A] p-[15px] w-[98%] h-auto justify-between rounded-xl flex flex-col items-start gap-[20px]'>
      <img src={image6} alt="" />
      <h2 className='text-[#F9EFEC] font-[500] text-[20px]'>Optimizing Mobile User Experience for Higher Conversions</h2>
      <p className='text-[#B3B3B2] font-[400]'>Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...</p>
      <div className='flex items-center gap-[15px]'>
        <img src={image9} alt="" />
        <p className='text-[#B3B3B2] font-[700]'>Read Full Blog</p>
      </div>
      </div>
      <div className='bg-[#1A1A1A] p-[15px] w-[98%] h-auto justify-between rounded-xl flex flex-col items-start gap-[20px]'>
      <img src={image7} alt="" />
      <h2 className='text-[#F9EFEC] font-[500] text-[20px]'>Mastering the Art of Minimalistic Design</h2>
      <p className='text-[#B3B3B2] font-[400]'>Simplicity and elegance take center stage in minimalistic design. Learn the principles of minimalism, how to effectively communicate with fewer elements...</p>
      <div className='flex items-center gap-[15px]'>
        <img src={image9} alt="" />
        <p className='text-[#B3B3B2] font-[700]'>Read Full Blog</p>
      </div>
      </div>
      <div className='bg-[#1A1A1A] p-[15px] w-[98%] h-auto justify-between rounded-xl flex flex-col items-start gap-[20px]'>
      <img src={image8} alt="" />
      <h2 className='text-[#F9EFEC] font-[500] text-[20px]'>The Psychology of Visual Design in Branding</h2>
      <p className='text-[#B3B3B2] font-[400]'>Uncover the impact of visual elements in branding and how they influence customer perceptions and emotions. Explore color psychology, typography choices....</p>
      <div className='flex items-center gap-[15px]'>
        <img src={image9} alt="" />
        <p className='text-[#B3B3B2] font-[700]'>Read Full Blog</p>
      </div>
      </div>
    </div>

    </div>


    <div className='w-[92%] m-auto mb-[70px]'>
    <Button type="primary" onClick={showModal}>
        + Add New User
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={addUser}
        onCancel={handleCancel}
      >
        <div>
          <input value={inpImg} onChange={(e) => setInpImg(e.target.value)} type="text" placeholder='Image...' className='border' />
          <input value={inpName} onChange={(e) => setInpName(e.target.value)} type="text" placeholder='Name...' className='border'  />
          <input value={inpAge} onChange={(e) => setInpAge(e.target.value)} type="text" placeholder='Age....' className='border' />
          <input value={inpDes} onChange={(e) => setInpDes(e.target.value)} type="text" placeholder='Des...' className='border' />
          <select value={inpStatus} onChange={(e) => setInpStatus(e.target.value)} className='border'>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>
      </Modal>
    </div>

    <div className='w-[95%] m-auto pb-[100px]'>
    <div className='bg-[#1A1A1A] p-[25px] rounded-xl flex items-center justify-between'>
    <h1 className='font-[500] text-[35px]'>TESTIMONIALS</h1>
    {/* <p className='text-[#B3B3B2] font-bold'>ALL BLOGS</p> */}
    </div>

    <div className='w-[98%] m-auto flex flex-col justify-between gap-[40px] mt-[35px]'>
      {users.map((e) => {
        return (
          <div className='w-[95%] m-auto p-[10px] rounded-xl bg-[#1A1A1A] flex flex-col items-center text-center gap-[15px]'>
            <img className='w-[55px] h-[55px] rounded-full' src={e.img} alt="" />
            <h1>{e.name}</h1>
            <h1>{e.age}</h1>
            <h1>{e.des}</h1>
            <h1>{e.status ? 'Active' : 'Inactive'}</h1>
            <div className='flex items-center gap-[15px]'>
              <button onClick={() =>deleteuser(e.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg></button>
              <button onClick={() => openDialog(e)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg></button>
              <input onClick={() => changeStatus(e)} checked={e.status} type="checkbox" />
            </div>
          </div>
        )
      })}
    </div>

    </div>

    </div>

    </div>
  )
}

export default Fahim1