import React, { useEffect, useState } from 'react'
import { useTodoAsyncStore } from '../../service'
import { Button, Modal } from 'antd';

const Fahim2 = () => {

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

    let [search,setSearch] = useState('')
    let [status,setStatus] = useState('')

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
      <div className='bg-[#1A1A1A] p-[45px] rounded-xl w-[750px] flex flex-col py-[100px] items-start gap-[20px]'>
        <h1 className='flex items-center font-[600] text-[40px]'>GET IN TOUCH <span className='flex ml-[15px] gap-[10px] text-[#CE7D63] text-[19px] items-center font-[500]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg> START A PROJECT</span> </h1>
        <h1 className=' font-[600] text-[40px]'>WITH US TODAY</h1>
        <p className='text-[#676665] font-[500]'>At NexGen, we value your inquiries, feedback, and collaborations. Whether you are interested in our digital services, have questions about our projects, or want to explore potential partnerships, we encourage you to reach out to our dedicated team.</p>
      </div>

      <div className='w-[500px] flex flex-wrap gap-[15px]  bg-[#1A1A1A] p-[20px] rounded-xl'>
      <div className='bg-[#1F1F1F] p-[15px] rounded-xl w-[220px] flex flex-col items-center gap-[10px]'>
      <h2 className='text-[#B3B3B2] font-[500]'>CLIENTS</h2>
      <p className='text-[#DA9E8B] font-bold text-[50px]'>200+</p>
      </div>
      <div className='bg-[#1F1F1F] p-[15px] rounded-xl w-[220px] flex flex-col items-center gap-[10px]'>
      <h2 className='text-[#B3B3B2] font-[500]'>PROJECTS</h2>
      <p className='text-[#DA9E8B] font-bold text-[50px]'>280+</p>
      </div>
      <div className='bg-[#1F1F1F] p-[15px] rounded-xl w-[220px] flex flex-col items-center gap-[10px]'>
      <h2 className='text-[#B3B3B2] font-[500]'>HAPPY CLIENTS</h2>
      <p className='text-[#DA9E8B] font-bold text-[50px]'>100%</p>
      </div>
      <div className='bg-[#1F1F1F] p-[15px] rounded-xl w-[220px] flex flex-col items-center gap-[10px]'>
      <h2 className='text-[#B3B3B2] font-[500]'>FOLOWER</h2>
      <p className='text-[#DA9E8B] font-bold text-[50px]'>420K</p>
      </div>
      <div className='bg-[#1F1F1F] p-[15px] rounded-xl w-[220px] flex flex-col items-center gap-[10px]'>
      <h2 className='text-[#B3B3B2] font-[500]'>Years Of Experience</h2>
      <p className='text-[#DA9E8B] font-bold text-[50px]'>10+</p>
      </div>
      <div className='bg-[#1F1F1F] p-[15px] rounded-xl w-[220px] flex flex-col items-center gap-[10px]'>
      <h2 className='text-[#B3B3B2] font-[500]'>Reach Us</h2>
      <p className='text-[#DA9E8B] font-bold text-[50px]'>200+</p>
      </div>
      </div>

    </div>



    <div className='w-[95%] m-auto mt-[50px] flex items-start justify-between'>

    <div className='bg-[#1A1A1A] p-[20px] rounded-xl w-[550px] flex flex-col gap-[50px]'>
    <div className='flex items-center justify-around'>
      <button className='bg-[#1F1F1F] text-[#B3B3B2] font-[500] px-[20px] py-[8px] rounded-xl'>Phone Number</button>
      <button className='bg-[#CE7D63] text-[#0F0F0F] font-[500] px-[30px] py-[7px] rounded-xl'>Emails</button>
      <button className='bg-[#1F1F1F] text-[#B3B3B2] font-[500] px-[20px] py-[8px] rounded-xl'>Office Locations</button>
    </div>

    <div className='flex flex-col items-start gap-[25px]'>
      <label className='text-[#81807E] font-[500]'>General Inquiries</label>
      <input type="text" placeholder='info@NexGen.com' className='border bg-[#1F1F1F] border-[#1F1F1F] text-white font-bol w-[90%] py-[9px] rounded-full px-[15px]' />
      <label className='text-[#81807E] font-[500]'>Business Collaborations</label>
      <input type="text" placeholder='partnerships@NexGen.com' className='border bg-[#1F1F1F] border-[#1F1F1F] text-white font-bol w-[90%] py-[9px] rounded-full px-[15px]' />
      <label className='text-[#81807E] font-[500]'>Job Opportunities</label>
      <input type="text" placeholder='careers@NexGen.com' className='border bg-[#1F1F1F] border-[#1F1F1F] text-white font-bol w-[90%] py-[9px] rounded-full px-[15px]' />
    </div>

    </div>


    <div className='bg-[#1A1A1A] p-[15px] w-[700px] rounded-xl flex flex-col gap-[30px]'>
    <div className='flex items-center justify-between'>
      <div className='flex flex-col items-start gap-[10px]'>
        <h2 className='text-[#F3DFD8] font-[500]'>First Name</h2>
        <input type="text" placeholder='Enter First Name' className='bg-[#333333] font-bold px-[30px] py-[9px] rounded-xl' />
      </div>
      <div className='flex flex-col items-start gap-[10px]'>
        <h2 className='text-[#F3DFD8] font-[500]'>Last Name</h2>
        <input type="text" placeholder='Enter Last Name' className='bg-[#333333] font-bold px-[30px] py-[9px] rounded-xl' />
      </div>
    </div>
    <div className='flex items-center justify-between'>
      <div className='flex flex-col items-start gap-[10px]'>
        <h2 className='text-[#F3DFD8] font-[500]'>First Name</h2>
        <input type="text" placeholder='Enter First Name' className='bg-[#333333] font-bold px-[30px] py-[9px] rounded-xl' />
      </div>
      <div className='flex flex-col items-start gap-[10px]'>
        <h2 className='text-[#F3DFD8] font-[500]'>Last Name</h2>
        <input type="text" placeholder='Enter Last Name' className='bg-[#333333] font-bold px-[30px] py-[9px] rounded-xl' />
      </div>
    </div>
    <div className='flex flex-col gap-[10px]'>
    <h2 className='text-[#F3DFD8] font-[500]'>Message</h2>
    <input type="text" placeholder='Enter your Message' className='bg-[#333333] font-bold w-[98%] m-auto px-[25px] py-[45px] rounded-xl' />
    </div>
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-[10px]'>
        <input type="checkbox" />
        <p className='text-[#B3B3B2]'>I agree with Terms of Use and Privacy Policy</p>
      </div>
      <button className='bg-[#CE7D63] font-[500] text-[#0F0F0F] px-[25px] py-[10px] rounded-xl'>Send Your Message</button>
    </div>
    </div>

    </div>

        <div className='w-[92%] m-auto mb-[70px] mt-[100px] flex items-center justify-between'>
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

        <div className='flex items-center gap-[25px]'>
          <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search...' className='border px-[80px] py-[8px] rounded-xl' />

        <select value={status} onChange={(e) => setStatus(e.target.value)}  className='border text-[#6e6e6e] px-[20px] py-[9px] rounded-xl'>
          <option value="">All</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>

        </div>

        </div>


    
    <div className='w-[95%] m-auto pb-[100px]'>
    <div className='bg-[#1A1A1A] p-[25px] rounded-xl flex items-center justify-between'>
    <h1 className='font-[500] text-[35px]'>TESTIMONIALS</h1>
    <p className='text-[#B3B3B2] font-bold'>ALL BLOGS</p>
    </div>

    <div className='flex flex-wrap justify-between gap-[40px] mt-[35px]'>
      {users.filter((e) => e.status.toString().includes(status)).filter((e) => e.name.toLowerCase().includes(search.toLowerCase())).map((e) => {
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

      
    <div className='pt-[150px] w-[98%] p-[15px] m-auto flex flex-col gap-[50px] items-center justify-between'>
      <div className='bg-[#1A1A1A] p-[45px] rounded-xl w-[100%] flex flex-col py-[100px] items-start gap-[20px]'>
        <h1 className='flex items-center font-[600] text-[30px]'>GET IN TOUCH <span className='flex ml-[15px] gap-[10px] text-[#CE7D63] text-[19px] items-center font-[500]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg> START A PROJECT</span> </h1>
        <h1 className=' font-[600] text-[30px]'>WITH US TODAY</h1>
        <p className='text-[#676665] font-[500]'>At NexGen, we value your inquiries, feedback, and collaborations. Whether you are interested in our digital services, have questions about our projects, or want to explore potential partnerships, we encourage you to reach out to our dedicated team.</p>
      </div>

      <div className='w-[100%] flex flex-col gap-[25px]  bg-[#1A1A1A] p-[20px] rounded-xl'>
      <div className='bg-[#1F1F1F] p-[15px] rounded-xl w-[100%] flex flex-col items-center gap-[20px]'>
      <h2 className='text-[#B3B3B2] font-[500]'>CLIENTS</h2>
      <p className='text-[#DA9E8B] font-bold text-[50px]'>200+</p>
      </div>
      <div className='bg-[#1F1F1F] p-[15px] rounded-xl w-[100%] flex flex-col items-center gap-[10px]'>
      <h2 className='text-[#B3B3B2] font-[500]'>PROJECTS</h2>
      <p className='text-[#DA9E8B] font-bold text-[50px]'>280+</p>
      </div>
      <div className='bg-[#1F1F1F] p-[15px] rounded-xl w-[100%] flex flex-col items-center gap-[10px]'>
      <h2 className='text-[#B3B3B2] font-[500]'>HAPPY CLIENTS</h2>
      <p className='text-[#DA9E8B] font-bold text-[50px]'>100%</p>
      </div>
      <div className='bg-[#1F1F1F] p-[15px] rounded-xl w-[100%] flex flex-col items-center gap-[10px]'>
      <h2 className='text-[#B3B3B2] font-[500]'>FOLOWER</h2>
      <p className='text-[#DA9E8B] font-bold text-[50px]'>420K</p>
      </div>
      <div className='bg-[#1F1F1F] p-[15px] rounded-xl w-[100%] flex flex-col items-center gap-[10px]'>
      <h2 className='text-[#B3B3B2] font-[500]'>Years Of Experience</h2>
      <p className='text-[#DA9E8B] font-bold text-[50px]'>10+</p>
      </div>
      <div className='bg-[#1F1F1F] p-[15px] rounded-xl w-[100%] flex flex-col items-center gap-[10px]'>
      <h2 className='text-[#B3B3B2] font-[500]'>Reach Us</h2>
      <p className='text-[#DA9E8B] font-bold text-[50px]'>200+</p>
      </div>
      </div>

    </div>



    <div className='w-[98%] p-[15px] m-auto mt-[50px] flex flex-col items-start justify-between'>

    <div className='bg-[#1A1A1A] p-[20px] rounded-xl w-[98%] flex flex-col gap-[50px]'>
    <div className='flex items-center justify-around'>
      {/* <button className='bg-[#1F1F1F] text-[#B3B3B2] font-[500] px-[20px] py-[8px] rounded-xl'>Phone Number</button> */}
      <button className='bg-[#CE7D63] text-[#0F0F0F] font-[500] px-[30px] py-[7px] rounded-xl'>Emails</button>
      <button className='bg-[#1F1F1F] text-[#B3B3B2] font-[500] px-[20px] py-[8px] rounded-xl'>Office Locations</button>
    </div>

    <div className='flex flex-col items-start  gap-[25px]'>
      <label className='text-[#81807E] font-[500]'>General Inquiries</label>
      <input type="text" placeholder='info@NexGen.com' className='border bg-[#1F1F1F] border-[#1F1F1F] text-white font-bol w-[90%] py-[9px] rounded-full px-[15px]' />
      <label className='text-[#81807E] font-[500]'>Business Collaborations</label>
      <input type="text" placeholder='partnerships@NexGen.com' className='border bg-[#1F1F1F] border-[#1F1F1F] text-white font-bol w-[90%] py-[9px] rounded-full px-[15px]' />
      <label className='text-[#81807E] font-[500]'>Job Opportunities</label>
      <input type="text" placeholder='careers@NexGen.com' className='border bg-[#1F1F1F] border-[#1F1F1F] text-white font-bol w-[90%] py-[9px] rounded-full px-[15px]' />
    </div>

    </div>


    <div className='bg-[#1A1A1A] p-[15px] w-[100%] rounded-xl flex mt-[35px] flex-col gap-[30px]'>
    <div className='flex flex-col gap-[25px] items-center justify-between'>
      <div className='flex flex-col items-start gap-[10px]'>
        <h2 className='text-[#F3DFD8] font-[500]'>First Name</h2>
        <input type="text" placeholder='Enter First Name' className='bg-[#333333] font-bold px-[30px] py-[9px] rounded-xl' />
      </div>
      <div className='flex flex-col  items-start gap-[10px]'>
        <h2 className='text-[#F3DFD8] font-[500]'>Last Name</h2>
        <input type="text" placeholder='Enter Last Name' className='bg-[#333333] font-bold px-[30px] py-[9px] rounded-xl' />
      </div>
    </div>
    <div className='flex flex-col gap-[25px] items-center justify-between'>
      <div className='flex flex-col items-start gap-[10px]'>
        <h2 className='text-[#F3DFD8] font-[500]'>First Name</h2>
        <input type="text" placeholder='Enter First Name' className='bg-[#333333] font-bold px-[30px] py-[9px] rounded-xl' />
      </div>
      <div className='flex flex-col items-start gap-[10px]'>
        <h2 className='text-[#F3DFD8] font-[500]'>Last Name</h2>
        <input type="text" placeholder='Enter Last Name' className='bg-[#333333] font-bold px-[30px] py-[9px] rounded-xl' />
      </div>
    </div>
    <div className='flex flex-col gap-[10px]'>
    <h2 className='text-[#F3DFD8] font-[500]'>Message</h2>
    <input type="text" placeholder='Enter your Message' className='bg-[#333333] font-bold w-[98%] m-auto px-[25px] py-[45px] rounded-xl' />
    </div>
    <div className='flex flex-col gap-[20px] items-center justify-between'>
      <div className='flex items-center gap-[10px]'>
        <input type="checkbox" />
        <p className='text-[#B3B3B2]'>I agree with Terms of Use and Privacy Policy</p>
      </div>
      <button className='bg-[#CE7D63] font-[500] text-[#0F0F0F] px-[25px] py-[10px] rounded-xl'>Send Your Message</button>
    </div>
    </div>

    </div>

        <div className='w-[98%] p-[10px] m-auto mb-[70px] mt-[100px] flex flex-col items-center justify-between'>
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

        <div className='flex flex-col mt-[25px] w-[100%] gap-[25px]'>
          <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search...' className='border w-[85%] px-[15px] m-auto py-[8px] rounded-xl' />

        <select value={status} onChange={(e) => setStatus(e.target.value)}  className='border text-[#6e6e6e] px-[20px] w-[35%] m-auto py-[9px] rounded-xl'>
          <option value="">All</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>

        </div>

        </div>


    
    <div className='w-[95%] m-auto pb-[100px]'>
    <div className='bg-[#1A1A1A] p-[25px] rounded-xl flex items-center justify-between'>
    <h1 className='font-[500] text-[35px]'>TESTIMONIALS</h1>
    {/* <p className='text-[#B3B3B2] font-bold'>ALL BLOGS</p> */}
    </div>

    <div className='w-[98%] m-auto flex flex-col justify-between gap-[40px] mt-[35px]'>
      {users.filter((e) => e.status.toString().includes(status)).filter((e) => e.name.toLowerCase().includes(search.toLowerCase())).map((e) => {
        return (
          <div className='w-[98%] m-auto p-[10px] rounded-xl bg-[#1A1A1A] flex flex-col items-center text-center gap-[15px]'>
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

export default Fahim2