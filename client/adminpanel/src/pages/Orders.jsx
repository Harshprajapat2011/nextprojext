import React from 'react'

export default function Orders() {
  return (
    <>
        <div className='flex gap-2 text-[14px] border-t-2 border-b-2 pl-[10px] w-[98%] mx-auto py-2'>
         <p>Home</p>
         <p>/</p>
         <p>Orders</p>
       </div>
       <div className='w-[98%] mx-auto mt-[20px] bg-white rounded-lg'>
          <h1 className='text-[20px] font-semibold py-[15px] border-b rounded-lg'><span className='ps-[10px]'>Orders's List</span></h1>
          <table className='w-[100%]'>
              <thead className='bg-[#F9FAFB]'>
                <tr className='text-center'>
                    <th className=' py-[10px]'><button className='p-[5px_10px] bg-purple-500 text-white rounded-lg'>Delete</button></th>
                    <th className=' py-[10px]'>S.No</th>
                    <th className=' py-[10px]'>Order Id</th>
                    <th className=' py-[10px]'>Name</th>
                    <th className=' py-[10px]'>Quantity</th>
                    <th className=' py-[10px]'>Price</th>
                    <th className=' py-[10px]'>Date</th>
                    <th className=' py-[10px]'>Status</th>
                    <th className=' py-[10px]'>View</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-center'>
                    <td className='py-[10px]'><input type="checkbox" className='w-[18px] h-[25px]' /></td>
                    <td className='py-[10px]'>1</td>
                    <td className='py-[10px]'>A727227px</td>
                    <td className='py-[10px]'>harsh</td>
                    <td className='py-[10px]'>1</td>
                    <td className='py-[10px]'>500</td>
                    <td className='py-[10px]'>10/08/2025</td>
                    <td className='py-[10px]'>Processing....</td>
                    <td className='py-[10px]'><button className='p-[5px_12px] rounded-full border hover:text-blue-600 cursor-pointer'>View</button></td>
                </tr>
              </tbody>
          </table>
       </div>
    </>
  )
}