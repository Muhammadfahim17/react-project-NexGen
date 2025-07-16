import React from 'react'
import { Link, Outlet } from 'react-router'
import image1 from '../catalog/imagefahim/Logo (13).svg'
import image2 from '../catalog/imagefahim/Button (6).png'
import image3 from '../catalog/imagefahim/Sub Container (3).svg'
import image4 from '../catalog/imagefahim/Icon Container (7).png'
import image5 from '../catalog/imagefahim/Icon Container (8).png'
import image6 from '../catalog/imagefahim/Icon Container (9).png'
import image7 from '../catalog/imagefahim/Icon Container (10).png'


const Layout = () => {
  return (
    <div>

    <header>

        <div className='hidden sm:block'>
        <div className='w-[90%] m-auto flex items-center justify-between p-[25px] bg-[#1C1C21] text-white rounded-xl absolute left-[5%]'>
            <img src={image1} alt="" />
            <div className='flex items-center gap-[40px]'>
            <details>
                <summary>Home</summary>
                <ul>
                    <Link to={'/'}>
                    <li>Yoqub 1</li>
                    </Link>
                    <Link to={'yoqub2'}>
                    <li>Yoqub 2</li>
                    </Link>
                </ul>
            </details>
            <details>
                <summary>Service</summary>
                <ul>
                    <Link to={'azam1'}>
                    <li>Azam 1</li>
                    </Link>
                    <Link to={'azam2'}>
                    <li>Azam 2</li>
                    </Link>
                </ul>
            </details>
            <details>
                <summary>Contact</summary>
                <ul>
                    <Link to={'ahliddin1'}>
                    <li>Ahliddin 1</li>
                    </Link>
                    <Link to={'ahliddin2'}>
                    <li>Ahliddin 2</li>
                    </Link>
                </ul>
            </details>
            <details>
                <summary>Catalog</summary>
                <ul>
                    <Link to={'fahim1'}>
                    <li>Fahim 1</li>
                    </Link>
                    <Link to={'fahim2'}>
                    <li>Fahim 2</li>
                    </Link>
                </ul>
            </details>
            <button className='bg-[#CE7D63] text-[#0F0F0F] font-bold px-[30px] py-[8px] rounded-xl'>Contact Us</button>
            </div>
        </div>
        </div>


        <div className='sm:hidden'>
        <div className='w-[90%] m-auto flex items-center justify-between p-[25px] bg-[#1C1C21] text-white rounded-xl'>
            <img src={image1} alt="" />
            <div className='flex items-center gap-[40px]'>
            <details>
                <summary>Menu 1</summary>
                <Link to={'/'}>
                    <li>Yoqub 1</li>
                    </Link>
                    <Link to={'yoqub2'}>
                    <li>Yoqub 2</li>
                    </Link>
                    <ul>
                    <Link to={'azam1'}>
                    <li>Azam 1</li>
                    </Link>
                    <Link to={'azam2'}>
                    <li>Azam 2</li>
                    </Link>
                </ul>
            </details>
            <details>
                <summary>Menu 2</summary>
                <ul>
                    <Link to={'ahliddin1'}>
                    <li>Ahliddin 1</li>
                    </Link>
                    <Link to={'ahliddin2'}>
                    <li>Ahliddin 2</li>
                    </Link>
                    <Link to={'fahim1'}>
                    <li>Fahim 1</li>
                    </Link>
                    <Link to={'fahim2'}>
                    <li>Fahim 2</li>
                    </Link>
                </ul>
            </details>
            </div>
        </div>
        </div>

    </header>
    <main>
        <Outlet/>
    </main>
    <footer className='bg-[#0F0F0F] text-white pt-[60px]'>



    <div className='hidden sm:block'>
    <div className='bg-[#0F0F0F] '>

    <div className='w-[92%] m-auto  mb-[100px]'>
    <div className='bg-[#1A1A1A] w-[100%] m-auto flex items-center justify-between py-[40px] border border-[#0F0F0F] px-[25px] rounded-xl'>
        <h1 className='text-[35px] font-[600] text-[#F9EFEC]'>Frequently Asked Questions</h1>
        <div className='flex items-center gap-[20px] '>
            <img src={image2} alt="" />
            <p className='text-[#B3B3B2] font-[500]'>View All</p>
        </div>
    </div>

    <div className='flex items-start justify-between mt-[40px] '>
        <div className='w-[750px] flex flex-col gap-[15px]'>
        <div className='bg-[#1A1A1A] flex items-start justify-between p-[25px] rounded-xl'>
            <div className='w-[630px] flex flex-col items-start gap-[15px]'>
                <h2 className='text-[#F9EFEC] text-[18px] font-[700] border-b-2  border-[#262626] pb-[25px]'>How long does it take to complete a web development project?</h2>
                <p className='text-[#B3B3B2] font-[500]'>The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.</p>
            </div>
            <button className='text-[#E7BEB1] font-bold bg-[#333333] w-[40px] h-[40px] rounded-full text-[25px]'>-</button>
        </div>
        <div className='bg-[#1A1A1A] flex items-start justify-between p-[25px] rounded-xl'>
            <div className='w-[630px] flex flex-col items-start gap-[15px]'>
                <h2 className='text-[#F9EFEC] text-[18px] font-[700] '>Can you handle large-scale mobile app development projects?</h2>
            </div>
            <button className='text-[#E7BEB1] font-bold bg-[#333333] w-[40px] h-[40px] rounded-full text-[25px]'>+</button>
        </div>
        <div className='bg-[#1A1A1A] flex items-start justify-between p-[25px] rounded-xl'>
            <div className='w-[630px] flex flex-col items-start gap-[15px]'>
                <h2 className='text-[#F9EFEC] text-[18px] font-[700] '>Can you integrate third-party APIs into our mobile app?</h2>
            </div>
            <button className='text-[#E7BEB1] font-bold bg-[#333333] w-[40px] h-[40px] rounded-full text-[25px]'>+</button>
        </div>
        <div className='bg-[#1A1A1A] flex items-start justify-between p-[25px] rounded-xl'>
            <div className='w-[630px] flex flex-col items-start gap-[15px]'>
                <h2 className='text-[#F9EFEC] text-[18px] font-[700] '>How do you ensure cross-platform compatibility for mobile apps?</h2>
            </div>
            <button className='text-[#E7BEB1] font-bold bg-[#333333] w-[40px] h-[40px] rounded-full text-[25px]'>+</button>
        </div>
        <div className='bg-[#1A1A1A] flex items-start justify-between p-[25px] rounded-xl'>
            <div className='w-[630px] flex flex-col items-start gap-[15px]'>
                <h2 className='text-[#F9EFEC] text-[18px] font-[700] '>What is your approach to user experience (UX) design?</h2>
            </div>
            <button className='text-[#E7BEB1] font-bold bg-[#333333] w-[40px] h-[40px] rounded-full text-[25px]'>+</button>
        </div>
        </div>

        <div className='w-[500px] bg-[#1A1A1A] p-[30px] rounded-xl flex flex-col items-start gap-[25px]'>
            <h1 className='text-[#F9EFEC] font-[500] text-[22px]'>Ask your question</h1>
            <div className='flex flex-col items-start gap-[15px] border-t-2 border-[#262626] w-[95%] pt-[20px]'>
                <label className='text-[#F3DFD8] font-bold'>Name</label>
                <input type="text" placeholder='Enter your name' className='bg-[#0F0F0F] text-[#676665] w-[95%] font-bold py-[8px] rounded-xl px-[15px]' />
                <label className='text-[#F3DFD8] font-bold'>Email</label>
                <input type="text" placeholder='Enter your email' className='bg-[#0F0F0F] text-[#676665] w-[95%] font-bold py-[8px] rounded-xl px-[15px]' />
                <label className='text-[#F3DFD8] font-bold'>Your Question</label>
                <input type="text" placeholder='Enter Your Question Here .....' className='bg-[#0F0F0F] text-[#676665] w-[95%] font-bold py-[40px] rounded-xl px-[15px]' />
                <button className='bg-[#CE7D63] text-[#0F0F0F] font-bold m-auto w-[98%] py-[10px] rounded-xl'>Send Your Message</button>
            </div>
        </div>

    </div>

    </div>

    <div className='bg-[#CE7D63] p-[40px] w-[95%] m-auto rounded-xl'>
    <div className='w-[95%] m-auto text-[#0F0F0F] flex items-center justify-between'>
    <div className='w-[900px] flex flex-col items-start gap-[20px]'>
        <h1 className='text-[40px] font-[500]'>Ready to Transform Your Digital Presence?</h1>
        <p className='text-[#262626] font-[500]'>Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.</p>
    </div>
    <button className='bg-[#0F0F0F] text-white font-[500] px-[25px] py-[9px] rounded-xl'>Get in Touch</button>
    </div>
    </div>
    <img src={image3} className='m-auto my-[25px]' alt="" />


    <div className='w-[94%] m-auto flex items-start justify-between gap-[20px]'>

    <div className='w-[650px] flex flex-wrap justify-between gap-[20px]'>
    <div className='bg-[#1A1A1A] p-[20px] rounded-xl w-[280px] flex flex-col gap-[30px]'>
        <div className='flex justify-between items-center'>
        <img src={image4} alt="" />
        <img src={image2    } alt="" />
        </div>
        <h1 className='text-[#F9EFEC] font-[600] text-[22px]'>INSTAGRAM</h1>
        <p className='text-[#B3B3B2] font-[500]'>Share visually appealing snippets of our projects.</p>
    </div>
    <div className='bg-[#1A1A1A] p-[20px] rounded-xl w-[280px] flex flex-col gap-[30px]'>
        <div className='flex justify-between items-center'>
        <img src={image5} alt="" />
        <img src={image2    } alt="" />
        </div>
        <h1 className='text-[#F9EFEC] font-[600] text-[22px]'>INSTAGRAM</h1>
        <p className='text-[#B3B3B2] font-[500]'>Share visually appealing snippets of our projects.</p>
    </div>
    <div className='bg-[#1A1A1A] p-[20px] rounded-xl w-[280px] flex flex-col gap-[30px]'>
        <div className='flex justify-between items-center'>
        <img src={image6} alt="" />
        <img src={image2    } alt="" />
        </div>
        <h1 className='text-[#F9EFEC] font-[600] text-[22px]'>INSTAGRAM</h1>
        <p className='text-[#B3B3B2] font-[500]'>Share visually appealing snippets of our projects.</p>
    </div>
    <div className='bg-[#1A1A1A] p-[20px] rounded-xl w-[280px] flex flex-col gap-[30px]'>
        <div className='flex justify-between items-center'>
        <img src={image7} alt="" />
        <img src={image2    } alt="" />
        </div>
        <h1 className='text-[#F9EFEC] font-[600] text-[22px]'>INSTAGRAM</h1>
        <p className='text-[#B3B3B2] font-[500]'>Share visually appealing snippets of our projects.</p>
    </div>
    </div>

    <div className='w-[750px] flex flex-col gap-[25px] pb-[60px]'>

    <div className='bg-[#1A1A1A] p-[25px] rounded-xl'>
    <div className='flex items-start justify-between'>
        <div className='flex flex-col items-start gap-[10px]'>
        <h2 className='text-[#F3DFD8] font-[500] text-[20px]'>Home</h2>
        <ul className='flex flex-col items-start gap-[10px] text-[#81807E] font-[500]'>
            <li>Why Us</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>FAQ’s</li>
        </ul>
        </div>
        <div className='flex flex-col items-start gap-[10px]'>
        <h2 className='text-[#F3DFD8] font-[500] text-[20px]'>Services</h2>
        <ul className='flex flex-col items-start gap-[10px] text-[#81807E] font-[500]'>
            <li>Web Development</li>
            <li>App Development</li>
            <li>Web Design</li>
            <li>Digital Marketing</li>
        </ul>
        </div>
        <div className='flex flex-col items-start gap-[10px]'>
        <h2 className='text-[#F3DFD8] font-[500] text-[20px]'>Projects</h2>
        <ul className='flex flex-col items-start gap-[10px] text-[#81807E] font-[500]'>
            <li>Klothink</li>
            <li>Zenith</li>
            <li>Novus</li>
            <li>Apex</li>
        </ul>
        </div>
        <div className='flex flex-col items-start gap-[10px]'>
        <h2 className='text-[#F3DFD8] font-[500] text-[20px]'>Blogs</h2>
        <ul className='flex flex-col items-start gap-[10px] text-[#81807E] font-[500]'>
            <li>Business</li>
            <li>Design</li>
            <li>Development</li>
        </ul>
        </div>
    </div>
    </div>


    <div className='bg-[#1A1A1A] p-[25px] rounded-xl flex items-center justify-between'>
    <div className='w-[380px] flex flex-col items-start gap-[10px]'>
        <p className='text-[#676665] font-[600] text-[18px]'>Newsletter</p>
        <h1 className='text-[#F9EFEC] font-[500] text-[22px]'>Subscribe To our Newsletter</h1>
    </div>
    <input type="text" placeholder='Enter your email' className='bg-[#333333] font-bold py-[9px] rounded-xl px-[25px]' />
    </div>

    <div className='bg-[#1A1A1A] p-[25px] rounded-xl flex items-center justify-between'>
    <div className=' flex flex-col items-start gap-[10px]'>
        <p className='text-[#B3B3B2] font-[600] text-[18px]'>© 2024 NextGen. All rights reserved.</p>
    </div>
    <p className='text-[#B3B3B2] font-[500]'>Terms & Conditions Privacy Policy</p>
    </div>

    </div>

    </div>

    </div>

    </div>





    <div className='sm:hidden'>

    <div className='w-[98%] p-[15px] m-auto  mb-[100px]'>
    <div className='bg-[#1A1A1A] w-[100%] m-auto flex items-center justify-between py-[40px] border border-[#0F0F0F] px-[25px] rounded-xl'>
        <h1 className='text-[35px] font-[600] text-[#F9EFEC]'>Frequently Asked Questions</h1>
        {/* <div className='flex items-center gap-[20px] '>
            <img src={image2} alt="" />
            <p className='text-[#B3B3B2] font-[500]'>View All</p>
        </div> */}
    </div>

    <div className='flex flex-col items-start justify-between mt-[40px] '>
        <div className='w-[100%] flex flex-col gap-[15px]'>
        <div className='bg-[#1A1A1A] flex items-start justify-between p-[25px] rounded-xl'>
            <div className='w-[630px] flex flex-col items-start gap-[15px]'>
                <h2 className='text-[#F9EFEC] text-[18px] font-[700] border-b-2  border-[#262626] pb-[25px]'>How long does it take to complete a web development project?</h2>
                <p className='text-[#B3B3B2] font-[500]'>The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.</p>
            </div>
            {/* <button className='text-[#E7BEB1] font-bold bg-[#333333] w-[40px] h-[40px] rounded-full text-[25px]'>-</button> */}
        </div>
        <div className='bg-[#1A1A1A] flex items-start justify-between p-[25px] rounded-xl'>
            <div className='w-[100%] flex flex-col items-start gap-[15px]'>
                <h2 className='text-[#F9EFEC] text-[18px] font-[700] '>Can you handle large-scale mobile app development projects?</h2>
            </div>
            {/* <button className='text-[#E7BEB1] font-bold bg-[#333333] w-[40px] h-[40px] rounded-full text-[25px]'>+</button> */}
        </div>
        <div className='bg-[#1A1A1A] flex items-start justify-between p-[25px] rounded-xl'>
            <div className='w-[100%] flex flex-col items-start gap-[15px]'>
                <h2 className='text-[#F9EFEC] text-[18px] font-[700] '>Can you integrate third-party APIs into our mobile app?</h2>
            </div>
            {/* <button className='text-[#E7BEB1] font-bold bg-[#333333] w-[40px] h-[40px] rounded-full text-[25px]'>+</button> */}
        </div>
        <div className='bg-[#1A1A1A] flex items-start justify-between p-[25px] rounded-xl'>
            <div className='w-[100%] flex flex-col items-start gap-[15px]'>
                <h2 className='text-[#F9EFEC] text-[18px] font-[700] '>How do you ensure cross-platform compatibility for mobile apps?</h2>
            </div>
            {/* <button className='text-[#E7BEB1] font-bold bg-[#333333] w-[40px] h-[40px] rounded-full text-[25px]'>+</button> */}
        </div>
        <div className='bg-[#1A1A1A] flex items-start justify-between p-[25px] rounded-xl'>
            <div className='w-[100%] flex flex-col items-start gap-[15px]'>
                <h2 className='text-[#F9EFEC] text-[18px] font-[700] '>What is your approach to user experience (UX) design?</h2>
            </div>
            {/* <button className='text-[#E7BEB1] font-bold bg-[#333333] w-[40px] h-[40px] rounded-full text-[25px]'>+</button> */}
        </div>
        </div>

        <div className='w-[100%] bg-[#1A1A1A] p-[30px] rounded-xl mt-[30px] flex flex-col items-start gap-[25px]'>
            <h1 className='text-[#F9EFEC] font-[500] text-[22px]'>Ask your question</h1>
            <div className='flex flex-col items-start gap-[15px] border-t-2 border-[#262626] w-[95%] pt-[20px]'>
                <label className='text-[#F3DFD8] font-bold'>Name</label>
                <input type="text" placeholder='Enter your name' className='bg-[#0F0F0F] text-[#676665] w-[100%] font-bold py-[8px] rounded-xl px-[15px]' />
                <label className='text-[#F3DFD8] font-bold'>Email</label>
                <input type="text" placeholder='Enter your email' className='bg-[#0F0F0F] text-[#676665] w-[100%] font-bold py-[8px] rounded-xl px-[15px]' />
                <label className='text-[#F3DFD8] font-bold'>Your Question</label>
                <input type="text" placeholder='Enter Your Question Here .....' className='bg-[#0F0F0F] text-[#676665] w-[100%] font-bold py-[40px] rounded-xl px-[15px]' />
                <button className='bg-[#CE7D63] text-[#0F0F0F] font-bold m-auto w-[98%] py-[10px] rounded-xl'>Send Your Message</button>
            </div>
        </div>

    </div>

    </div>


    <div className='bg-[#CE7D63] p-[40px] w-[95%] m-auto rounded-xl'>
    <div className='w-[98%] m-auto text-[#0F0F0F] flex items-center justify-between'>
    <div className='w-[100%] flex flex-col items-start gap-[20px]'>
        <h1 className='text-[30px] font-[500]'>Ready to Transform Your Digital Presence?</h1>
        <p className='text-[#262626] font-[500]'>Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.</p>
    </div>
    {/* <button className='bg-[#0F0F0F] text-white font-[500] px-[25px] py-[9px] rounded-xl'>Get in Touch</button> */}
    </div>
    </div>
    <img src={image3} className='m-auto my-[25px]' alt="" />

    <div className='w-[98%] p-[15px] m-auto flex items-start flex-col gap-[20px]'>

<div className='w-[100%] m-auto flex flex-col justify-between gap-[20px]'>
<div className='bg-[#1A1A1A] p-[20px] rounded-xl w-[95%] flex flex-col gap-[30px]'>
    <div className='flex justify-between items-center'>
    <img src={image4} alt="" />
    <img src={image2    } alt="" />
    </div>
    <h1 className='text-[#F9EFEC] font-[600] text-[22px]'>INSTAGRAM</h1>
    <p className='text-[#B3B3B2] font-[500]'>Share visually appealing snippets of our projects.</p>
</div>
<div className='bg-[#1A1A1A] p-[20px] rounded-xl w-[95%] flex flex-col gap-[30px]'>
    <div className='flex justify-between items-center'>
    <img src={image5} alt="" />
    <img src={image2    } alt="" />
    </div>
    <h1 className='text-[#F9EFEC] font-[600] text-[22px]'>INSTAGRAM</h1>
    <p className='text-[#B3B3B2] font-[500]'>Share visually appealing snippets of our projects.</p>
</div>
<div className='bg-[#1A1A1A] p-[20px] rounded-xl w-[95%] flex flex-col gap-[30px]'>
    <div className='flex justify-between items-center'>
    <img src={image6} alt="" />
    <img src={image2    } alt="" />
    </div>
    <h1 className='text-[#F9EFEC] font-[600] text-[22px]'>INSTAGRAM</h1>
    <p className='text-[#B3B3B2] font-[500]'>Share visually appealing snippets of our projects.</p>
</div>
<div className='bg-[#1A1A1A] p-[20px] rounded-xl w-[95%] flex flex-col gap-[30px]'>
    <div className='flex justify-between items-center'>
    <img src={image7} alt="" />
    <img src={image2    } alt="" />
    </div>
    <h1 className='text-[#F9EFEC] font-[600] text-[22px]'>INSTAGRAM</h1>
    <p className='text-[#B3B3B2] font-[500]'>Share visually appealing snippets of our projects.</p>
</div>
</div>

<div className='w-[98%] flex flex-col gap-[25px] pb-[60px]'>

<div className='bg-[#1A1A1A] w-[98%] p-[25px] rounded-xl'>
<div className='flex w-[98%] flex-wrap items-start justify-between'>
    <div className='flex w-[50%] flex-col items-start gap-[10px]'>
    <h2 className='text-[#F3DFD8] font-[500] text-[20px]'>Home</h2>
    <ul className='flex flex-col items-start gap-[10px] text-[#81807E] font-[500]'>
        <li>Why Us</li>
        <li>About Us</li>
        <li>Testimonials</li>
        <li>FAQ’s</li>
    </ul>
    </div>
    <div className='flex w-[50%] flex-col items-start gap-[10px]'>
    <h2 className='text-[#F3DFD8] font-[500] text-[20px]'>Services</h2>
    <ul className='flex flex-col items-start gap-[10px] text-[#81807E] font-[500]'>
        <li>Web Development</li>
        <li>App Development</li>
        <li>Web Design</li>
        <li>Digital Marketing</li>
    </ul>
    </div>
    {/* <div className='flex  w-[20%]flex-col items-start gap-[10px]'>
    <h2 className='text-[#F3DFD8] font-[500] text-[20px]'>Projects</h2>
    <ul className='flex flex-col items-start gap-[10px] text-[#81807E] font-[500]'>
        <li>Klothink</li>
        <li>Zenith</li>
        <li>Novus</li>
        <li>Apex</li>
    </ul>
    </div> */}
    {/* <div className='flex w-[20%] flex-col items-start gap-[10px]'>
    <h2 className='text-[#F3DFD8] font-[500] text-[20px]'>Blogs</h2>
    <ul className='flex flex-col items-start gap-[10px] text-[#81807E] font-[500]'>
        <li>Business</li>
        <li>Design</li>
        <li>Development</li>
    </ul>
    </div> */}
</div>
</div>


<div className='bg-[#1A1A1A] p-[25px] rounded-xl flex flex-col gap-[25px] items-center justify-between'>
<div className='w-[98%] flex flex-col items-start gap-[10px]'>
    <p className='text-[#676665] font-[600] text-[18px]'>Newsletter</p>
    <h1 className='text-[#F9EFEC] font-[500] text-[22px]'>Subscribe To our Newsletter</h1>
</div>
<input type="text" placeholder='Enter your email' className='bg-[#333333] font-bold py-[9px] rounded-xl px-[25px]' />
</div>

<div className='bg-[#1A1A1A] p-[25px] rounded-xl flex flex-col gap-[25px] text-center items-center justify-between'>
<div className=' flex flex-col items-start gap-[10px]'>
    <p className='text-[#B3B3B2] font-[600] text-[18px]'>© 2024 NextGen. All rights reserved.</p>
</div>
<p className='text-[#B3B3B2] font-[500]'>Terms & Conditions Privacy Policy</p>
</div>

</div>

</div>




    </div>



    </footer>

    </div>
  )
}

export default Layout