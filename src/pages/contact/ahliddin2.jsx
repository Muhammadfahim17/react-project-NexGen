import React, { useEffect, useState } from 'react'
import comp1 from "./ahliddinsImages/img1.png"
import plata from "./ahliddinsImages/plata.png"
import { useTodoStore } from './store'

const Ahliddin2 = () => {
    let { data, get, deleteUser, addUser, editUser } = useTodoStore()
    useEffect(()=>{get()}, [])
    let [addName, setAddName] = useState("")
    let [addText, setAddText] = useState("")
    let [addDesc, setAddDesc] = useState("")
    let [addJob, setAddJob] = useState("")
    let [addImg, setAddImg] = useState(1)
    function addNewUser() {
      let newUser = {
        text: addText,
        desc: addDesc,
        img: `./src/pages/contact/ahliddinsImages/user${addImg}.png`,
        name: addName,
        job: addJob
      }
      addUser(newUser)
    }
    let [editName, setEditName] = useState("")
    let [editText, setEditText] = useState("")
    let [editDesc, setEditDesc] = useState("")
    let [editJob, setEditJob] = useState("")
    let [editImg, setEditImg] = useState("")
    let [idx, setIdx] = useState(null)
    function update() {
      let updateUser = {
        text: editText,
        desc: editDesc,
        img: editImg,
        name: editName,
        job: editJob,
        id: idx
      }
      editUser(updateUser, idx)
    }
  return (
    <>
      <section className='w-[97%] m-auto border p-[10px] rounded-[15px] border-[#1F1F1F] pt-[100px]'>
        <h1 className='text-[30px] lg:text-[50px] bg-[#1A1A1A] rounded-[15px] px-[25px] py-[20px] w-[100%]'><b>Our Blogs</b></h1>
        <div className='mt-[25px] flex justify-around items-center flex-wrap gap-[25px]'>
          <img src={comp1} alt="" className='lg:w-[32%]'/>
          <div className='lg:w-[65%] bg-[#1A1A1A] p-[25px] rounded-[15px]'>
            <h3 className='text-[22px]'>Web Design Trends Shaping 2024</h3>
            <br/><br/>
            <div className='flex items-center flex-wrap gap-[25px]'>
              <button className='bg-[#1F1F1F] px-[15px] py-[5px] rounded-[10px]'>Category</button>
              <button className='bg-[#1F1F1F] px-[15px] py-[5px] rounded-[10px]'>Category</button>
              <button className='bg-[#1F1F1F] px-[15px] py-[5px] rounded-[10px]'>Category</button>
            </div>
            <br/><br/>
            <p>Stay ahead of the design curve with insights into the latest web design trends. From immersive user experiences to bold color choices, explore the design elements that will dominate the digital landscape in 2023 and beyond.</p>
            <br/><br/>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-[15px]'>
                <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg></button>
                <p className='text-[22px]'>Read Full Blog</p>
              </div>
              <p className='text-[#B3B3B2]'>Published Date <span className='text-[20px] text-white'>7th February 2023</span></p>
            </div>
          </div>
          <div className='lg:w-[32%] bg-[#1A1A1A] p-[25px] rounded-[15px]'>
            <img src={plata} alt="" />
            <br/>
            <p className='text-[20px]'>Optimizing Mobile User Experience for Higher Conversions</p>
            <br/>
            <p className='text-[#B3B3B2]'>Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...</p>
            <br/>
            <div className='flex items-center gap-[15px]'>
              <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg></button>
              <p className='text-[#B3B3B2] text-[20px]'>Read Full Blog</p>
            </div>
          </div>
          <div className='lg:w-[32%] bg-[#1A1A1A] p-[25px] rounded-[15px]'>
            <img src={plata} alt="" />
            <br/>
            <p className='text-[20px]'>Optimizing Mobile User Experience for Higher Conversions</p>
            <br/>
            <p className='text-[#B3B3B2]'>Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...</p>
            <br/>
            <div className='flex items-center gap-[15px]'>
              <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg></button>
              <p className='text-[#B3B3B2] text-[20px]'>Read Full Blog</p>
            </div>
          </div>
          <div className='lg:w-[32%] bg-[#1A1A1A] p-[25px] rounded-[15px]'>
            <img src={plata} alt="" />
            <br/>
            <p className='text-[20px]'>Optimizing Mobile User Experience for Higher Conversions</p>
            <br/>
            <p className='text-[#B3B3B2]'>Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...</p>
            <br/>
            <div className='flex items-center gap-[15px]'>
              <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg></button>
              <p className='text-[#B3B3B2] text-[20px]'>Read Full Blog</p>
            </div>
          </div>
        </div>
      </section>
      <div className='bg-[#1A1A1A] w-[90%] m-auto flex items-center justify-between py-[40px] border border-[#0F0F0F] px-[25px] rounded-xl flex-wrap gap-[20px]'>
        <input type="text" className='border border-[#262626] text-[20px] rounded-4xl py-[10px] px-[30px]' value={addText} onChange={(e)=>setAddText(e.target.value)} placeholder='Add Text' />
        <input type="text" className='border border-[#262626] text-[20px] rounded-4xl py-[10px] px-[30px]' value={addDesc} onChange={(e)=>setAddDesc(e.target.value)} placeholder='Add Description' />
        <input type="text" className='border border-[#262626] text-[20px] rounded-4xl py-[10px] px-[30px]' value={addName} onChange={(e)=>setAddName(e.target.value)} placeholder='Add Name' />
        <input type="text" className='border border-[#262626] text-[20px] rounded-4xl py-[10px] px-[30px]' value={addJob} onChange={(e)=>setAddJob(e.target.value)} placeholder='Add Job' />
        <input type="number" className='border border-[#262626] text-[20px] rounded-4xl py-[10px] px-[30px]' value={addImg} onChange={(e)=>setAddImg(e.target.value)} placeholder='Add Img' />
        <button className='p-[15px] border border-[#333333] rounded-[50px]' onClick={addNewUser}>Save</button>
      </div>
      <div className='bg-[#1A1A1A] w-[90%] m-auto flex items-center justify-between py-[40px] border border-[#0F0F0F] px-[25px] rounded-xl flex-wrap gap-[20px]'>
        <input type="text" className='border border-[#262626] text-[20px] rounded-4xl py-[10px] px-[30px]' value={editText} onChange={(e)=>setEditText(e.target.value)} placeholder='edit Text' />
        <input type="text" className='border border-[#262626] text-[20px] rounded-4xl py-[10px] px-[30px]' value={editDesc} onChange={(e)=>setEditDesc(e.target.value)} placeholder='edit Description' />
        <input type="text" className='border border-[#262626] text-[20px] rounded-4xl py-[10px] px-[30px]' value={editName} onChange={(e)=>setEditName(e.target.value)} placeholder='edit Name' />
        <input type="text" className='border border-[#262626] text-[20px] rounded-4xl py-[10px] px-[30px]' value={editJob} onChange={(e)=>setEditJob(e.target.value)} placeholder='edit Job' />
        <button className='p-[15px] border border-[#333333] rounded-[50px]' onClick={update}>Save edits</button>
      </div>
      <section className=' pt-[100px]'>
          <div className='bg-[#1A1A1A] w-[90%] m-auto flex items-center justify-between py-[40px] border border-[#0F0F0F] px-[25px] rounded-xl'>
          <h1 className='text-[35px] font-[600] text-[#F9EFEC]'>Testimonials</h1>
          <div className='md:flex items-center gap-[10px] hidden'>
            <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg></button>
            <p className='text-[25px] text-[#B3B3B2]'>ALL Testimonials</p>
          </div>
        </div>
      </section>
      <section className='w-[90%] m-auto p-[10px] flex flex-col gap-[20px] md:flex-row flex-wrap'>
        {data.map((el) => {
          return <aside className='w-[100%] md:w-[24%] bg-[#1A1A1A] pt-[20px] justify-between flex flex-col gap-[20px] rounded-2xl' key={el.id}>
            <h2 className='mx-[40px] text-[30px]'>{el.text}</h2>
            <span className='mx-[40px] text-[#B3B3B2] text-[16px] text-[]'>{el.desc}</span>
            <div className='flex gap-[20px] mx-[40px]'>
              <button className='p-[15px] border border-[#333333] rounded-[50px]' onClick={()=>deleteUser(el.id)}>Delete</button>
              <button className='p-[15px] border border-[#333333] rounded-[50px]' onClick={()=>{
                setEditText(el.text)
                setEditDesc(el.desc)
                setEditImg(el.img)
                setEditName(el.name)
                setEditJob(el.job)
                setIdx(el.id)
              }}>Edit</button>
            </div>
            <div className='flex gap-[20px] bg-[#1F1F1F] w-[100%] px-[40px] py-[30px] rounded-b-2xl'>
              <img src={el.img} alt="" />
              <div>
                <h3>{el.name}</h3>
                <p>{el.job}</p>
              </div>
              <button className='p-[15px] border border-[#333333] rounded-[50px] hidden md:block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></button>
            </div>
          </aside>
        })}
      </section>
    </>
  )
}

export default Ahliddin2