import React, { useState } from 'react'
import { FaBars, FaLock, FaRegUser } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import { RiProfileFill } from 'react-icons/ri'

export default function Header() {
  let [hover,setHover]=useState(false)
  let showli=()=>{
    setHover(true)

  }
  let hidli=()=>{
    setHover(false)

  }
  return (
    <div>
      <div className='w-[100%] px-[30px]  flex items-center py-[10px]'>
        <div className='w-[50%] flex items-center '>
        <FaBars />
        <p className='pl-[10px]'>Dashboard</p>
        </div>
        <div className='w-[50%]  flex  justify-end pr-[10px] realtive ' onMouseLeave={hidli} onMouseEnter={showli}>
          <div className='w-[40px] rounded-[50%] border border-1 overflow-hidden  '>
          {/* <FaRegUser /> */}
          <img src="../img.jpg" alt="" className='w-[100%]' />
          </div>

          <div className='absolute top-[11%]'>
           <div >
            <ul className={`bg-white ${hover ? 'block':'hidden'} `}>
              <li className='flex items-center border border-1 p-[0_30px_0_10px] cursor-pointer'>
                <FaCircleUser /> <p className='pl-[10px]'>Profile</p></li>
                <li className='flex items-center border border-1 p-[0_30px_0_10px] cursor-pointer'>
                <RiProfileFill /> <p className='pl-[10px]'>Company Profile</p></li>
                <li className='flex items-center border border-1 p-[0_30px_0_10px] cursor-pointer'>
                <FaLock /> <p className='pl-[10px]'>Logout</p></li>
            </ul>
           </div>
          </div>
      </div>
      </div>
    </div>
  )
}
