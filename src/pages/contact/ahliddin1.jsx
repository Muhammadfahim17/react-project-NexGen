import React, { useEffect, useState } from 'react'
import { useTodoStore } from './store'

const Ahliddin1 = () => {
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
      <section className='w-[95%] m-auto pt-20 p-[10px] flex flex-col gap-[20px] md:pt-30 md:flex-row'>
        <aside className='bg-[#1A1A1A] py-[30px] p-[25px] rounded-2xl md:w-[70%] md:flex md:items-center md:gap-[50px]'>
          <h1 className='text-[30px] md:text-[60px]'>Unlock Your Potential <br /> in the Digital World</h1>
          <div className='flex items-center gap-[10px] md:mt-[-60px]'>
            <button className='p-[15px] bg-[#CE7D63] text-black rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></button>
            <p className='text-[#CE7D63] text-[25px]'>Start a Project</p>
          </div>
        </aside>
        <aside className='bg-[#1A1A1A] py-[30px] p-[25px] rounded-2xl flex flex-col gap-[20px] md:w-[30%]'>
          <h1 className='text-[25px]'>At NexGen</h1>
          <p className='text-[16px] text-[#B3B3B2]'>We believe in fostering a dynamic and collaborative work environment that empowers our team members to excel in their respective fields. Join us to be part of a passionate and innovative team dedicated to crafting exceptional digital solutions for clients across the globe. We are committed to nurturing talent, encouraging professional growth, and creating a workplace where creativity thrives.</p>
          <div className='flex items-center gap-[10px]'>
            <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg></button>
            <p className='text-[25px] text-[#B3B3B2]'>Know More</p>
          </div>
        </aside>
      </section>
      <div className='bg-[#1A1A1A] w-[90%] m-auto flex items-center justify-between py-[40px] border border-[#0F0F0F] px-[25px] rounded-xl'>
        <h1 className='text-[35px] font-[600] text-[#F9EFEC]'>Join Our Team at NexGen</h1>
      </div>
      <section className='w-[90%] m-auto p-[10px] flex flex-col gap-[20px] md:flex-row flex-wrap'>
        <aside className='w-[100%] md:w-[49%] bg-[#1A1A1A] p-[50px] flex flex-col gap-[20px] rounded-2xl'>
          <div className='flex flex-col justify-between md:flex-row'>
            <div className='flex items-center gap-[10px]'>
              <button className='p-[15px] border border-[#333333] text-[#CE7D63] rounded-3xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9" /></svg></button>
              <p className='text-[25px]'>Web Designer</p>
            </div>
            <div className='flex items-center gap-[10px]'>
              <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg></button>
              <p className='text-[25px] text-[#B3B3B2]'>View Details</p>
            </div>
          </div>
          <div className='flex gap-[20px] flex-col md:flex-row'>
            <p className='bg-[#1F1F1F] p-[15px] rounded-[50px]'>Salary $45,000 - $60,000 per year</p>
            <p className='bg-[#1F1F1F] p-[15px] rounded-[50px]'>Experience 1+ year</p>
            <p className='bg-[#1F1F1F] p-[15px] rounded-[50px]'>Deadline 30/09/2025</p>
          </div>
          <div>
            <p className='text-[25px]'>Skills</p>
            <p className='text-[16px] text-[#B3B3B2]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
          </div>
          <button className='text-[20px] text-black py-[18px] rounded-2xl bg-[#CE7D63]'>Apply NoW</button>
        </aside>
        <aside className='w-[100%] md:w-[49%] bg-[#1A1A1A] p-[50px] flex flex-col gap-[20px] rounded-2xl'>
          <div className='flex flex-col justify-between md:flex-row'>
            <div className='flex items-center gap-[10px]'>
              <button className='p-[15px] border border-[#333333] text-[#CE7D63] rounded-3xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9" /></svg></button>
              <p className='text-[25px]'>Web Designer</p>
            </div>
            <div className='flex items-center gap-[10px]'>
              <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg></button>
              <p className='text-[25px] text-[#B3B3B2]'>View Details</p>
            </div>
          </div>
          <div className='flex gap-[20px] flex-col md:flex-row'>
            <p className='bg-[#1F1F1F] p-[15px] rounded-[50px]'>Salary $45,000 - $60,000 per year</p>
            <p className='bg-[#1F1F1F] p-[15px] rounded-[50px]'>Experience 1+ year</p>
            <p className='bg-[#1F1F1F] p-[15px] rounded-[50px]'>Deadline 30/09/2025</p>
          </div>
          <div>
            <p className='text-[25px]'>Skills</p>
            <p className='text-[16px] text-[#B3B3B2]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
          </div>
          <button className='text-[20px] text-black py-[18px] rounded-2xl bg-[#CE7D63]'>Apply NoW</button>
        </aside>
        <aside className='w-[100%] md:w-[49%] bg-[#1A1A1A] p-[50px] flex flex-col gap-[20px] rounded-2xl'>
          <div className='flex flex-col justify-between md:flex-row'>
            <div className='flex items-center gap-[10px]'>
              <button className='p-[15px] border border-[#333333] text-[#CE7D63] rounded-3xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9" /></svg></button>
              <p className='text-[25px]'>Web Designer</p>
            </div>
            <div className='flex items-center gap-[10px]'>
              <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg></button>
              <p className='text-[25px] text-[#B3B3B2]'>View Details</p>
            </div>
          </div>
          <div className='flex gap-[20px] flex-col md:flex-row'>
            <p className='bg-[#1F1F1F] p-[15px] rounded-[50px]'>Salary $45,000 - $60,000 per year</p>
            <p className='bg-[#1F1F1F] p-[15px] rounded-[50px]'>Experience 1+ year</p>
            <p className='bg-[#1F1F1F] p-[15px] rounded-[50px]'>Deadline 30/09/2025</p>
          </div>
          <div>
            <p className='text-[25px]'>Skills</p>
            <p className='text-[16px] text-[#B3B3B2]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
          </div>
          <button className='text-[20px] text-black py-[18px] rounded-2xl bg-[#CE7D63]'>Apply NoW</button>
        </aside>
        <aside className='w-[100%] md:w-[49%] bg-[#1A1A1A] p-[50px] flex flex-col gap-[20px] rounded-2xl'>
          <div className='flex flex-col justify-between md:flex-row'>
            <div className='flex items-center gap-[10px]'>
              <button className='p-[15px] border border-[#333333] text-[#CE7D63] rounded-3xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9" /></svg></button>
              <p className='text-[25px]'>Web Designer</p>
            </div>
            <div className='flex items-center gap-[10px]'>
              <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg></button>
              <p className='text-[25px] text-[#B3B3B2]'>View Details</p>
            </div>
          </div>
          <div className='flex gap-[20px] flex-col md:flex-row'>
            <p className='bg-[#1F1F1F] p-[15px] rounded-[50px]'>Salary $45,000 - $60,000 per year</p>
            <p className='bg-[#1F1F1F] p-[15px] rounded-[50px]'>Experience 1+ year</p>
            <p className='bg-[#1F1F1F] p-[15px] rounded-[50px]'>Deadline 30/09/2025</p>
          </div>
          <div>
            <p className='text-[25px]'>Skills</p>
            <p className='text-[16px] text-[#B3B3B2]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
          </div>
          <button className='text-[20px] text-black py-[18px] rounded-2xl bg-[#CE7D63]'>Apply NoW</button>
        </aside>
      </section>
      <div className='bg-[#1A1A1A] w-[90%] m-auto flex items-center justify-between py-[40px] border border-[#0F0F0F] px-[25px] rounded-xl'>
        <h1 className='text-[35px] font-[600] text-[#F9EFEC]'>How to Apply</h1>
      </div>
      <section className='w-[90%] m-auto p-[10px] flex flex-col gap-[20px] md:flex-row flex-wrap'>
        <aside className='bg-[#1A1A1A] w-[100%] md:w-[24%] p-[20px] flex flex-col gap-[20px]'>
          <p className='text-[#81807E] text-[25px]'>Step 01</p>
          <h2 className='text-[30px] bg-[#1F1F1F] p-[30px]'>Explore Job Listings</h2>
          <p className='text-[#B3B3B2] text-[20px]'>Visit our website's "Careers" page to explore the current job listings. Review the various roles available and select the position that aligns with your skills, experience, and career aspirations.</p>
          <div className='flex items-center gap-[10px]'>
            <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg></button>
            <p className='text-[25px] text-[#B3B3B2]'>Know More</p>
          </div>
        </aside>
        <aside className='bg-[#1A1A1A] w-[100%] md:w-[24%] p-[20px] flex flex-col gap-[20px]'>
          <p className='text-[#81807E] text-[25px]'>Step 01</p>
          <h2 className='text-[30px] bg-[#1F1F1F] p-[30px]'>Explore Job Listings</h2>
          <p className='text-[#B3B3B2] text-[20px]'>Visit our website's "Careers" page to explore the current job listings. Review the various roles available and select the position that aligns with your skills, experience, and career aspirations.</p>
          <div className='flex items-center gap-[10px]'>
            <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg></button>
            <p className='text-[25px] text-[#B3B3B2]'>Know More</p>
          </div>
        </aside>
        <aside className='bg-[#1A1A1A] w-[100%] md:w-[24%] p-[20px] flex flex-col gap-[20px]'>
          <p className='text-[#81807E] text-[25px]'>Step 01</p>
          <h2 className='text-[30px] bg-[#1F1F1F] p-[30px]'>Explore Job Listings</h2>
          <p className='text-[#B3B3B2] text-[20px]'>Visit our website's "Careers" page to explore the current job listings. Review the various roles available and select the position that aligns with your skills, experience, and career aspirations.</p>
          <div className='flex items-center gap-[10px]'>
            <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg></button>
            <p className='text-[25px] text-[#B3B3B2]'>Know More</p>
          </div>
        </aside>
        <aside className='bg-[#1A1A1A] w-[100%] md:w-[24%] p-[20px] flex flex-col gap-[20px]'>
          <p className='text-[#81807E] text-[25px]'>Step 01</p>
          <h2 className='text-[30px] bg-[#1F1F1F] p-[30px]'>Explore Job Listings</h2>
          <p className='text-[#B3B3B2] text-[20px]'>Visit our website's "Careers" page to explore the current job listings. Review the various roles available and select the position that aligns with your skills, experience, and career aspirations.</p>
          <div className='flex items-center gap-[10px]'>
            <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg></button>
            <p className='text-[25px] text-[#B3B3B2]'>Know More</p>
          </div>
        </aside>
        <aside className='bg-[#1A1A1A] w-[100%] md:w-[24%] p-[20px] flex flex-col gap-[20px]'>
          <p className='text-[#81807E] text-[25px]'>Step 01</p>
          <h2 className='text-[30px] bg-[#1F1F1F] p-[30px]'>Explore Job Listings</h2>
          <p className='text-[#B3B3B2] text-[20px]'>Visit our website's "Careers" page to explore the current job listings. Review the various roles available and select the position that aligns with your skills, experience, and career aspirations.</p>
          <div className='flex items-center gap-[10px]'>
            <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg></button>
            <p className='text-[25px] text-[#B3B3B2]'>Know More</p>
          </div>
        </aside>
        <aside className='bg-[#1A1A1A] w-[100%] md:w-[24%] p-[20px] flex flex-col gap-[20px]'>
          <p className='text-[#81807E] text-[25px]'>Step 01</p>
          <h2 className='text-[30px] bg-[#1F1F1F] p-[30px]'>Explore Job Listings</h2>
          <p className='text-[#B3B3B2] text-[20px]'>Visit our website's "Careers" page to explore the current job listings. Review the various roles available and select the position that aligns with your skills, experience, and career aspirations.</p>
          <div className='flex items-center gap-[10px]'>
            <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg></button>
            <p className='text-[25px] text-[#B3B3B2]'>Know More</p>
          </div>
        </aside>
        <aside className='bg-[#1A1A1A] w-[100%] md:w-[24%] p-[20px] flex flex-col gap-[20px]'>
          <p className='text-[#81807E] text-[25px]'>Step 01</p>
          <h2 className='text-[30px] bg-[#1F1F1F] p-[30px]'>Explore Job Listings</h2>
          <p className='text-[#B3B3B2] text-[20px]'>Visit our website's "Careers" page to explore the current job listings. Review the various roles available and select the position that aligns with your skills, experience, and career aspirations.</p>
          <div className='flex items-center gap-[10px]'>
            <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg></button>
            <p className='text-[25px] text-[#B3B3B2]'>Know More</p>
          </div>
        </aside>
        <aside className='bg-[#1A1A1A] w-[100%] md:w-[24%] p-[20px] flex flex-col gap-[20px]'>
          <p className='text-[#81807E] text-[25px]'>Step 01</p>
          <h2 className='text-[30px] bg-[#1F1F1F] p-[30px]'>Explore Job Listings</h2>
          <p className='text-[#B3B3B2] text-[20px]'>Visit our website's "Careers" page to explore the current job listings. Review the various roles available and select the position that aligns with your skills, experience, and career aspirations.</p>
          <div className='flex items-center gap-[10px]'>
            <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg></button>
            <p className='text-[25px] text-[#B3B3B2]'>Know More</p>
          </div>
        </aside>
      </section>
      <div className='bg-[#1A1A1A] w-[90%] m-auto flex items-center justify-between py-[40px] border border-[#0F0F0F] px-[25px] rounded-xl'>
        <h1 className='text-[35px] font-[600] text-[#F9EFEC]'>Testimonials</h1>
        <div className='md:flex items-center gap-[10px] hidden'>
          <button className='p-[15px] border border-[#333333] rounded-[50px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg></button>
          <p className='text-[25px] text-[#B3B3B2]'>ALL Testimonials</p>
        </div>
      </div>
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

export default Ahliddin1