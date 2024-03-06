import React from 'react'
import Navbar from '../components/Navbar'
import { AiTwotoneDelete } from 'react-icons/ai';

const Hello = () => {
  return (
    
    <div className=''> 
        <Navbar/>
        <div className='mt-[10vh] min-h-screen  '>
        <p className='font-bold font-serif text-center text-4xl py-10 text-violet-950'>Welcome</p>
         <div className='flex justify-center '>
         <div className=' bg-blue-50 border-4 border-blue-950 border-dashed mx-5 h-[100mm] w-[70mm]'>
            <p className='text-center py-40 text-2xl tracking-widest text font-semibold'>CREATE</p>
         </div>
            <div className=' border mx-5 h-[100mm] w-[70mm] relative'>
                <img className='' src='https://marketplace.canva.com/EAFhHrjw0Qk/1/0/1131w/canva-black-and-white-simple-classic-professional-cover-letter-G55SxrJRkKo.jpg' />
                <div className="absolute top-0 left-0 w-full h-full bg-blue-100 opacity-50"></div>
                <span className='absolute text-center font-bold text-2xl text-violet-950 cursor-pointer uppercase  font-serif top-5 px-14 py-32'>Leave letter </span>
                <div className='absolute top-2 right-1 px-2 cursor-pointer '><AiTwotoneDelete className='text-red-500 hover:text-red-600 text-lg'/></div>
            </div>
            
        
         </div>
        </div>
    </div>
  )
}

export default Hello