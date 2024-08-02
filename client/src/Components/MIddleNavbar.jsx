import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineAim } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { BsFillLightningChargeFill } from "react-icons/bs";
export const MIddleNavbar = () => {
  return (
    <>
    <div className='border flex h-11 pl-20 pr-10 gap-1 items-center'>
        <div className='w-[14em] bg-[#F1F4F6] px-2 h-8 flex items-center justify-between'>
            <IoLocationSharp className='h-4 w-4 text-gray-500 bg-[#F1F4F6]'/>
            <select name="Kolkata" id="" className='location w-fit font-semibold bg-[#F1F4F6]'>
                <option value="">Kolkata</option>
                <option value="Delhi">Delhi</option>
                <option value="">Mumbai</option>
                <option value="">Pune</option>
                <option value="">Gurgaon</option>
                <option value="">Hydrabad</option>
                <option value="">Bengaluru</option>
                <option value="">Chennai</option>
                <option value="">Indore</option>
                <option value="">Lucknow</option>
            </select>
            <AiOutlineAim className='text-gray-500 bg-[#F1F4F6]'/>
        </div>

        <div className='w-[40em] h-8 bg-[#F1F4F6] flex items-center'>
            <input className='bg-[#F1F4F6] w-full h-full ml-4' placeholder='Search for Medicines and Health Products' type="search"/>
            <IoSearchOutline className='absolute right-[37em] bg-[#F1F4F6]'/>
        </div>
        <div className='ml-16'>
            <div className='flex w-full items-center gap-16'>
                <div className='flex items-center'>
                    <BsFillLightningChargeFill className='text-[#9F5650] h-3 w-3'/>
                    <p className='text-sm'>QUICK BUY! Get 15% off on medicines*</p>
                </div>
                <button className=' bg-[#FF6F61] px-7 text-white py-1.5 rounded-md'>Quick order</button>
            </div>
        </div>
    </div>
    </>
  )
}
