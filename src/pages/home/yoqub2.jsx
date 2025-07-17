import React, { useEffect, useState } from 'react'
import img1 from './Sub Container (3).svg'
import img2 from './Sub Container (4).svg'
import img3 from './Text Container (2).svg'
import img4 from './Card (2).svg'
import img5 from './Container (5).svg'
import img6 from './Sub Container (5).svg'
import { useTodoAsyncStore } from '../../service'
import { Button, Modal } from 'antd'

const Yoqub2 = () => {
	let { get, users, deleteuser, addNewUser, changeStatus, editNewUser } =
		useTodoAsyncStore()
	const [isModalOpen, setIsModalOpen] = useState(false)
	let [inpImg, setInpImg] = useState('')
	let [inpName, setInpName] = useState('')
	let [inpAge, setInpAge] = useState('')
	let [inpDes, setInpDes] = useState('')
	let [inpStatus, setInpStatus] = useState('true')
	const showModal = () => {
		setIsModalOpen(true)
	}
	const handleOk = () => {
		setIsModalOpen(false)
	}
	const handleCancel = () => {
		setIsModalOpen(false)
	}
	function addUser() {
		let newUser = {
			name: inpName,
			img: inpImg,
			age: inpAge,
			des: inpDes,
			status: inpStatus == 'true' ? true : false,
			id: Date.now().toString(),
		}
		addNewUser(newUser)
	}
	const [isEditModalOpen, setIsEditModalOpen] = useState(false)
	let [inpEditImg, setInpEditImg] = useState('')
	let [inpEditName, setInpEditName] = useState('')
	let [inpEditAge, setInpEditAge] = useState('')
	let [inpEditDes, setInpEditDes] = useState('')
	let [inpEditStatus, setInpEditStatus] = useState('')
	let [idx, setIdx] = useState(null)
	const showEditModal = () => {
		setIsEditModalOpen(true)
	}
	const handleEditOk = () => {
		setIsEditModalOpen(false)
	}
	const handleEditCancel = () => {
		setIsEditModalOpen(false)
	}
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

	useEffect(() => {
		get()
	}, [])
	return (
		<>
		<Modal title="Basic Modal" closable={{ 'aria-label': 'Custom Close Button' }} open={isEditModalOpen} onOk={updateUser} onCancel={handleEditCancel}>
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

			<section className='px-[10px] md:px-[5%] flex md:flex-row flex-col gap-[20px]'>
				<img src={img2} className='w-[100%] md:w-[68%]' alt='' />
				<img src={img1} className='w-[100%] md:w-[30%]' alt='' />
			</section>
			<section className='mx-auto w-[90%] my-[30px] flex flex-col gap-[20px] p-[20px] border-2 border-[#1F1F1F] rounded-[24px]'>
				<img src={img3} alt='' />
				<div className='flex flex-wrap gap-[20px]'>
					<img src={img4} className='w-[100%] md:w-[49%]' alt='' />
					<img src={img5} className='w-[100%] md:w-[49%]' alt='' />
					<img src={img4} className='w-[100%] md:w-[49%]' alt='' />
					<img src={img5} className='w-[100%] md:w-[49%]' alt='' />
					<img src={img4} className='w-[100%] md:w-[49%]' alt='' />
					<img src={img5} className='w-[100%] md:w-[49%]' alt='' />
				</div>
			</section>
			<section className='mx-auto w-[90%] my-[30px] flex flex-col gap-[20px] p-[20px] border-2 border-[#1F1F1F] rounded-[24px]'>
				<img src={img6} alt='' />
				<Button type="primary" onClick={showModal}>
      + Add New User
    </Button>
    <Modal title="Basic Modal" closable={{ 'aria-label': 'Custom Close Button' }} open={isModalOpen} onOk={addUser} onCancel={handleCancel}>
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
  


				<div className='flex flex-wrap gap-[10px] h-[357px]'>
					{users.map(e => {
						return (
							<div	key={e.id}	className='h-[357px] w-[32%] bg-[#1A1A1A] rounded-[14px] flex justify-between flex-col'>
								<div className='p-[30px] flex flex-col gap-[20px]'>
									<h1 className='text-[#F9EFEC] text-[22px] uppercase'>
										{e.name}
									</h1>
									<p className='text-[#B3B3B2] text-[16px] font-[400]'>
										{e.des}
									</p>
								</div>
								<div className='rounded-b-[14px] bg-[#1F1F1F] px-[30px] py-[20px] flex items-center justify-between'>
									<img src={e.img} alt='' />
									<div className='flex flex-col'>
										<h4 className='text-[#F3DFD8] leading-[18px] text-[18px]'>
											{e.name}
										</h4>
										<h4 className='text-[#81807E] leading-[16px] text-[16px]'>
											{e.age}
										</h4>
									</div>
									<button onClick={() => deleteuser(e.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg></button>
                  <button onClick={() => openDialog(e)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg></button>
                  <input onClick={() => changeStatus(e)} checked={e.status} type="checkbox" />
								</div>
							</div>
						)
					})}
				</div>
			</section>
		</>
	)
}

export default Yoqub2
