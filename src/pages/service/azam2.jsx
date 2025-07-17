// import React from 'react'

// const Azam2 = () => {
//   return (
//     <div>Azam2</div>
//   )
// }

// export default Azam2
import imgAzam7 from './Img/Sub Container (2).png'
import { useTodoAsyncStore } from '../../service'
import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react'





export default function Azam2(props) {

  let { get, users, deleteuser, addNewUser, changeStatus, editNewUser } = useTodoAsyncStore()


  useEffect(() => {
    get()
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false);
  let [inpImg, setInpImg] = useState('')
  let [inpName, setInpName] = useState('')
  let [inpAge, setInpAge] = useState('')
  let [inpDes, setInpDes] = useState('')
  let [inpStatus, setInpStatus] = useState('true')

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
      name: inpName,
      img: inpImg,
      age: inpAge,
      des: inpDes,
      status: inpStatus == 'true' ? true : false,
      id: Date.now().toString()
    }

    addNewUser(newUser)

  }

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  let [inpEditImg, setInpEditImg] = useState('')
  let [inpEditName, setInpEditName] = useState('')
  let [inpEditAge, setInpEditAge] = useState('')
  let [inpEditDes, setInpEditDes] = useState('')
  let [inpEditStatus, setInpEditStatus] = useState('')
  let [idx, setIdx] = useState(null)

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


  function updateUser() {
    let edit = {
      name: inpEditName,
      age: inpEditAge,
      des: inpEditDes,
      status: inpEditStatus == 'true' ? true : false,
      img: inpEditImg,
    }

    editNewUser(idx, edit)

  }

  return (<>


    <Modal
      title="Basic Modal"
      closable={{ 'aria-label': 'Custom Close Button' }}
      open={isEditModalOpen}
      onOk={updateUser}
      onCancel={handleEditCancel}
    >
      <div>
        <input value={inpEditImg} onChange={(e) => setInpEditImg(e.target.value)} type="text" placeholder='Image...' className='border' />
        <input value={inpEditName} onChange={(e) => setInpEditName(e.target.value)} type="text" placeholder='Name...' className='border' />
        <input value={inpEditAge} onChange={(e) => setInpEditAge(e.target.value)} type="text" placeholder='Age....' className='border' />
        <input value={inpEditDes} onChange={(e) => setInpEditDes(e.target.value)} type="text" placeholder='Des...' className='border' />
        <select value={inpEditStatus} onChange={(e) => setInpEditStatus(e.target.value)} className='border'>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      </div>
    </Modal>

    <section className="w-[96%] flex-col lg:flex-row m-auto bg-[#1A1A1A] rounded-[10px] lg:h-[630px] flex  p-[20px] lg:p-[30px] items-center gap-[20px]">
      <aside>
        <h1 className='font-black text-[50px] lg:text-[70px] text-white'>Elevating Brands in the Digital Age </h1>
        {/* <p className='text-gray-500 text-[20px]'>At NexGen, we are committed to empowering your digital vision with innovative solutions tailored to your unique needs. Our team of skilled professionals, coupled with cutting-edge technologies, ensures that we deliver exceptional results that elevate your online presence.</p> */}
      </aside>
      <div className='flex flex-wrap gap-[20px]'>

      {/* <img src={imgAzam7} alt="" /> */}
      <Clients num="200" name="Clients"/>
      <Clients num="280" name="PROJECTS"/>
      <Clients num="100" name="HAPPY CLIENTS"/>
      <Clients num="420" name="FOLLOWER"/>
      </div>
    </section>

    <Modal
      title="Basic Modal"
      closable={{ 'aria-label': 'Custom Close Button' }}
      open={isModalOpen}
      onOk={addUser}
      onCancel={handleCancel}
    >
      <div>
        <input value={inpImg} onChange={(e) => setInpImg(e.target.value)} type="text" placeholder='Image...' className='border' />
        <input value={inpName} onChange={(e) => setInpName(e.target.value)} type="text" placeholder='Name...' className='border' />
        <input value={inpAge} onChange={(e) => setInpAge(e.target.value)} type="text" placeholder='Age....' className='border' />
        <input value={inpDes} onChange={(e) => setInpDes(e.target.value)} type="text" placeholder='Des...' className='border' />
        <select value={inpStatus} onChange={(e) => setInpStatus(e.target.value)} className='border'>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      </div>
    </Modal>




    <section className='text-white mt-[20px]'>

      <div className='w-[95%] m-auto pb-[100px]'>
        <Button type="primary" onClick={showModal}> + Add New User </Button>
        <div className='bg-[#1A1A1A] p-[25px] rounded-xl flex items-center justify-between'>
          <h1 className='font-[500] text-[35px]'>Meet the brilliant minds behind NexGen</h1>
          <p className='text-[#B3B3B2] font-bold'>ALL BLOGS</p>
        </div>

        <div className='flex flex-wrap justify-between gap-[40px] mt-[35px]'>
          {users.map((e) => {
            return (
              <div key={e.id} className='w-[330px] p-[10px] rounded-xl bg-[#1A1A1A] flex flex-col items-center text-center gap-[15px]'>
                <img className='w-[55px] h-[55px] rounded-full' src={e.img} alt="" />
                <h1>{e.name}</h1>
                <h1>{e.age}</h1>
                <h1>{e.des}</h1>
                <h1>{e.status ? 'Active' : 'Inactive'}</h1>
                <div className='flex items-center gap-[15px]'>
                  <button onClick={() => deleteuser(e.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg></button>
                  <button onClick={() => openDialog(e)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg></button>
                  <input onClick={() => changeStatus(e)} checked={e.status} type="checkbox" />
                </div>
              </div>
            )
          })}
        </div>

      </div>

    </section>
    <section className='text-white'>

      <div className='w-[95%] m-auto pb-[100px]'>
        <div className='bg-[#1A1A1A] p-[25px] rounded-xl flex items-center justify-between'>
          <h1 className='font-[500] text-[35px]'>Our Achievements</h1>
          {/* <p className='text-[#B3B3B2] font-bold'>ALL BLOGS</p> */}
        </div>

        <div className='flex flex-wrap justify-between gap-[40px] mt-[35px]'>
          {users.map((e) => {
            return (
              <div key={e.id} className='w-[330px] p-[10px] rounded-xl bg-[#1A1A1A] flex flex-col items-center text-center gap-[15px]'>
                <img className='w-[55px] h-[55px] rounded-full' src={e.img} alt="" />
                <h1>{e.name}</h1>
                <h1>{e.age}</h1>
                <h1>{e.des}</h1>
                <h1>{e.status ? 'Active' : 'Inactive'}</h1>
                <div className='flex items-center gap-[15px]'>
                  <button onClick={() => deleteuser(e.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg></button>
                  <button onClick={() => openDialog(e)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg></button>
                  <input onClick={() => changeStatus(e)} checked={e.status} type="checkbox" />
                </div>
              </div>
            )
          })}
        </div>

      </div>

    </section>
    <section className='text-white'>

      <div className='w-[95%] m-auto pb-[100px]'>
        <div className='bg-[#1A1A1A] p-[25px] rounded-xl flex items-center justify-between'>
          <h1 className='font-[500] text-[35px]'>Awards & Recognitions</h1>
          {/* <p className='text-[#B3B3B2] font-bold'>ALL BLOGS</p> */}
        </div>

        <div className='flex flex-wrap justify-between gap-[40px] mt-[35px]'>
          {users.map((e) => {
            return (
              <div key={e.id} className='w-[330px] p-[10px] rounded-xl bg-[#1A1A1A] flex flex-col items-center text-center gap-[15px]'>
                <img className='w-[55px] h-[55px] rounded-full' src={e.img} alt="" />
                <h1>{e.name}</h1>
                <h1>{e.age}</h1>
                <h1>{e.des}</h1>
                <h1>{e.status ? 'Active' : 'Inactive'}</h1>
                <div className='flex items-center gap-[15px]'>
                  <button onClick={() => deleteuser(e.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg></button>
                  <button onClick={() => openDialog(e)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg></button>
                  <input onClick={() => changeStatus(e)} checked={e.status} type="checkbox" />
                </div>
              </div>
            )
          })}
        </div>

      </div>

    </section>

    <section className='text-white'>

      <div className='w-[95%] m-auto pb-[100px]'>
        <div className='bg-[#1A1A1A] p-[25px] rounded-xl flex items-center justify-between'>
          <h1 className='font-[500] text-[35px]'>Meet the brilliant minds behind NexGen</h1>
          <p className='text-[#B3B3B2] font-bold'>ALL BLOGS</p>
        </div>

        <div className='flex flex-wrap justify-between gap-[40px] mt-[35px]'>
          {users.map((e) => {
            return (
              <div key={e.id} className='w-[330px] p-[10px] rounded-xl bg-[#1A1A1A] flex flex-col items-center text-center gap-[15px]'>
                <img className='w-[55px] h-[55px] rounded-full' src={e.img} alt="" />
                <h1>{e.name}</h1>
                <h1>{e.age}</h1>
                <h1>{e.des}</h1>
                <h1>{e.status ? 'Active' : 'Inactive'}</h1>
                <div className='flex items-center gap-[15px]'>
                  <button onClick={() => deleteuser(e.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg></button>
                  <button onClick={() => openDialog(e)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg></button>
                  <input onClick={() => changeStatus(e)} checked={e.status} type="checkbox" />
                </div>
              </div>
            )
          })}
        </div>

      </div>

    </section>


  </>)
}



 function Clients(props) {
  return (
    <section className="bg-[#1F1F1F] py-24  w-[266px] h-[50px] flex justify-center items-center rounded-[30px]">
      <div className="text-center w-[266px] h-[50px]">
        <h2 className="text-gray-400 text-xl tracking-widest uppercase">{props.name}</h2>
        <p className="text-[70px] font-bold text-[#E3AFA2] leading-none">{props.num}+</p>
      </div>
    </section>
  );
}
