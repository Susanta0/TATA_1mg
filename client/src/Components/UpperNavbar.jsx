import React from 'react'
import { PiShoppingCart } from "react-icons/pi";

export const UpperNavbar = () => {


  return (
    <>
    <div className=' border h-12 flex items-center px-5 w-full justify-between'>
        <div className='flex items-center space-x-6'>
            <img className='w-20' src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="TATA 1mg"/>
           
            <button className='font-bold text-[#FF6F61]'>MEDICINES </button>
            <button className='font-bold hover:text-[#FF6F61] flex items-center gap-1'>LAB TESTS <span className=' text-xs bg-[#FF6F61] text-white rounded-sm px-2'>SAFE</span></button>
            <button className='font-bold hover:text-[#FF6F61]'>CONSULT DOCTORS</button>
            <button className='font-bold hover:text-[#FF6F61]'>CANCER CARE</button>
            <button className='font-bold hover:text-[#FF6F61] flex items-center gap-1'>PARTNERSHIPS <span className=' text-xs bg-[#FF6F61] text-white rounded-sm px-2'>NEW</span></button>
            <button className='font-bold hover:text-[#FF6F61] flex items-center gap-1'>CARE PLAN <span className='text-xs bg-[#FF6F61] text-white rounded-sm px-2'>SAVE MORE</span></button>
        </div>
        <div className=' gap-10 flex items-center' >
            <div className='flex items-center  space-x-2'>
            <button className='text-sm'>Login</button>
            <hr className='h-4 border border-black' />
            <button className='text-sm'>Sign Up</button>
            </div>
            <p className='text-sm'>Offers</p>
            <PiShoppingCart className='h-6 w-6'/>
            <p className='text-sm'>Need Help?</p>
        </div>
    </div>
    </>
  )
}
