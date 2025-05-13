import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa'

export default function Dashboard() {
  return (
    <div>
        <div className='flex gap-2 text-[14px] border-t-2 border-b-2 pl-[10px] w-[98%] mx-auto py-2'>
            <p>Home</p>
            <p>/</p>
            <p> Dashboard</p>
        </div>
        <div>
            <div className='w-[95%] flex flex-wrap mt-3 px-[10px] justify-between gap-[5px]'>
                <div className='w-[32%] border border-1  bg-[#5956D3] px-[10px] rounded-[10px] h-[150px] py-[10px] text-white'>
                <div className=' flex items-center  justify-between '>
                      
                       <div className='flex items-center'>
                        <p>26K</p>
                        (12.4% <span><FaLongArrowAltDown /></span>)
                    </div>
                    <div className=''><BsThreeDotsVertical /></div>

                </div>
                <div>User</div>
            </div>

            <div className='w-[32%] border border-1  bg-[#2998FE] px-[10px] rounded-[10px] h-[150px] py-[10px] text-white'>
                <div className=' flex items-center  justify-between '>
                      
                       <div className='flex items-center'>
                        <p>$6,200</p>
                        (40.9% <span><FaLongArrowAltUp /></span>)
                    </div>
                    <div className=''><BsThreeDotsVertical /></div>

                </div>
                <div>Product</div>
            </div>

            <div className='w-[32%] border border-1  bg-[#FCB01E] px-[10px] rounded-[10px] h-[150px] py-[10px] text-white'>
                <div className=' flex items-center  justify-between '>
                      
                       <div className='flex items-center'>
                        <p>2.49%</p>
                        (84.7% <span><FaLongArrowAltUp /></span>)
                    </div>
                    <div className=''><BsThreeDotsVertical /></div>

                </div>
                <div>Category</div>
            </div>


            <div className='w-[32%] border border-1  bg-[#E95353] px-[10px] rounded-[10px] h-[150px] py-[10px] text-white'>
                <div className=' flex items-center  justify-between '>
                      
                       <div className='flex items-center'>
                        <p>44K</p>
                        (-23.6% <span><FaLongArrowAltDown /></span>)
                    </div>
                    <div className=''><BsThreeDotsVertical /></div>

                </div>
                <div>Orders</div>
            </div>
            </div>
 

        </div>
    </div>
  )
}
