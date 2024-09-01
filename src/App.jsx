import React from 'react'

import Empty from './components/Empty'
import bg1 from "./assets/sai1.png";

const App = () => {
  return (
    <div>
      <div className='bg-white rounded-3xl flex items-center h-[650px]'>
        <div className='w-2/3 h-full relative'>
          <img className='rounded-l-3xl object-cover w-full h-full' src={bg1} alt="image" />
          <p className='absolute text-6xl bottom-16 left-8 text-white hover:translate-x-4 transition-all duration-500'>The future of AI-enabled<br /> health<span className='font-kalam font-semibold italic'> starts with Bloom.</span></p>
        </div>
        <div className='w-1/3 p-6 flex flex-col justify-center items-center  m-auto'>
          <h1 className='m-2 text-3xl flex' >Book a demo&nbsp;<span className='hover:rotate-45 block transition-all duration-500'>👋</span></h1>
          <p className='mb-4 font-light' >Enter your details to shedule a product demo.</p>
          <div className=''>
            <Empty typee="Name" />
            <Empty typee="Email" />
            <Empty typee="Phone" />
            <Empty typee="Company" />
          </div>
          <button className='text-white bg-black rounded-2xl py-4 px-3 w-[325px] text-1xl mt-2 items-center hover:text-black hover:bg-slate-100 hover:translate-x-2 transition duration-500'>Shedule my demo <span> → </span></button>
        </div>
      </div>
    </div>
  )
}

export default App