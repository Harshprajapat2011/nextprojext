import axios from 'axios';
import React from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { apiBaseurl } from '../../config';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function AddTestimonials() {
   let navigate=useNavigate()


   let saveData = (e) => {
      e.preventDefault()
      let data = new FormData(e.target);
      axios.post(`${apiBaseurl}/testimonials/insert`, data)
         .then((res) => {
            console.log(res.data);
        e.target.reset()
                    toast.success("view-testimonals added successfully!");
        
                    // 1-second delay before navigating
                    setTimeout(() => {
                       navigate('/view-testimonals');
                    }, 1000);
                 })
   }
   return (
      <>
      <ToastContainer />
         <div className='flex gap-2 text-[14px] border-t-2 border-b-2 pl-[10px] w-[98%] mx-auto py-2'>
            <p>Home</p>
            <p>/</p>
            <p>Testimonials</p>
            <p>/</p>
            <p>Add</p>
         </div>
         <div className='my-[20px] p-[10px_10px] bg-white rounded-lg w-[95%] border'>
            <h1 className='p-[10px_10px] text-[20px] font-semibold bg-[#F1F5F9] rounded-lg '>Add Testimonials</h1>
            <form className='grid grid-cols-[40%_58%] mt-[10px] gap-[20px]' onSubmit={saveData}>
               <div className='mb-[]'>
                  <div className='mb-[20px]'>
                     <p className='font-semibold block'>Catergory Image</p>
                     <label for="testimonialsImage">
                        <div className='w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                           <FaCloudDownloadAlt className='text-gray-400 text-[50px]' />
                           <span className='text-center'>Drag and Drop</span>
                        </div>
                     </label>
                     <input type='file' className='hidden' id="testimonialsImage" name="testimonialsImage" />
                  </div>
                  <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white mt-[180px]" >Add Category</button>
               </div>
               <div className=''>
                  <div className='mb-[20px]'>
                     <label className='font-semibold'>Name</label>
                     <input type='text' name="testimonialsName" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Name' required />
                  </div>
                  <div className='mb-[20px]'>
                     <label className='font-semibold'>Designation</label>
                     <input type='number' name="testimonialsDesignation" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Designation' required />
                  </div>
                  <div className='mb-[20px]'>
                     <label className='font-semibold'>Rating</label>
                     <input type='number' name="testimonialsRating" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Rating' required />
                  </div>
                  <div className='mb-[20px]'>
                     <label className='font-semibold'>Order</label>
                     <input type='number' name="testimonialsOrder" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Order' required />
                  </div>
                  <div className='mb-[20px]'>
                     <label className='font-semibold'>Message</label>
                     <textarea className='w-[100%] resize-none min-h-[100px] border rounded-lg' name='testimonialsMessage'></textarea>
                  </div>

               </div>

            </form>
         </div>

      </>
   )
}