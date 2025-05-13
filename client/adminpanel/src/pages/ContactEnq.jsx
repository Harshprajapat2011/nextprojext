
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdEdit, MdFilterAlt, MdFilterAltOff } from 'react-icons/md'

export default function ContactEnq() {
      let [show,setShow]=useState(false)
  return (
    <div>

           <div className='flex gap-2 text-[14px] border-t-2 border-b-2 pl-[10px] w-[98%] mx-auto py-2'>
                    <p>Home</p>
                    <p>/</p>
                    <p> Enqiury</p>
            <p>/</p>
            <p>View</p>
                </div>
        
                <div className={`w-[85%] mx-auto border my-6 ${show? 'block': 'hidden'}`} >
                    <form action="" className='flex items-center my-4 mx-2 gap-1'>
                    <input type="search" className='border bg-[#c8cdd6] p-[8px_10px] rounded-lg' placeholder='Search Name'  />
                    <FaSearch className='text-[35px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]'/>
                    </form>
                </div>
        
                <div className='w-[85%] mx-auto rounded-lg border my-3'>
                    <div className='flex items-center justify-between border  p-[10px_20px] bg-[#a3bac2]'>
                        <h1>Contact Enquiry Management</h1>
                        <div className='flex gap-1 '>
                            {show ?
                        <MdFilterAltOff className='text-[35px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]'
                        onClick={()=>setShow(!show)}/> :
                        <MdFilterAlt className='text-[35px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]'
                        onClick={()=>setShow(!show)}/>
        
                    }
                        <button className=' text-white rounded-lg cursor-pointer bg-[green] p-[5px_10px]'>Change Status</button>
                        <button className=' text-white rounded-lg cursor-pointer bg-[#d12c2c] p-[5px_10px]'>Delete</button>
                        </div>
                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                <th className=' w-[5%] p-[10px_10px] text-gray-400 font-normal'><input type="checkbox" /></th>
                                <th className=' w-[40%] text-left p-[10px_10px] text-gray-400 font-normal'>USER INFO</th>
                                <th className=' w-[20%] p-[10px_10px] text-left text-gray-400 font-normal'>SUBJECT</th>
                                <th className=' w-[20%] p-[10px_10px] text-left text-gray-400 font-normal'>MESSAGE</th>
                                <th className=' w-[10%] p-[10px_10px] text-left text-gray-400 font-normal'>STATUS</th>
                                <th className=' w-[10%] p-[10px_10px] text-left text-gray-400 font-normal'>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td className=' w-[5%] p-[10px_10px] text-gray-400 font-normal'><input type="checkbox" /></td>
                                <td className=' w-[40%] text-left p-[10px_10px] text-gray-400 font-normal'>harsh</td>
                                <td className=' w-[20%] p-[10px_10px] text-left text-gray-400 font-normal'>Harshprajapat561</td>
                                <td className=' w-[20%] p-[10px_10px] text-left text-gray-400 font-normal'>637516</td>
                                <td className=' w-[10%] p-[10px_10px] text-left text-gray-400 font-normal'>
                                    <button className=' text-white rounded-lg cursor-pointer bg-[green] p-[5px_10px]'>active</button></td>
                                <td className=' w-[10%] p-[10px_10px] text-left text-gray-400 font-normal'>
                                    <MdEdit className='p-[5px_10px] text-[40px] bg-[#1D4ED8] rounded-[100%] cursor-pointer' /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        
    </div>
  )
}

