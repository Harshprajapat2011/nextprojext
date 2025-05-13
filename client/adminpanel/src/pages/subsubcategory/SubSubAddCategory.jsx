import React from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { apiBaseurl } from '../../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function SubSubAddCategory() {
    let navigate = useNavigate()
    let saveData=(e)=>{
        e.preventDefault()
        let data = new FormData(e.target);
        axios.post(`${apiBaseurl}/subsubCategory/insert`,data)
        .then((res) =>{
         console.log(res.data);
        e.target.reset()
                   toast.success("sub-sub-view-category added successfully!");
       
                   // 1-second delay before navigating
                   setTimeout(() => {
                      navigate('/sub-sub-view-category');
                   }, 1000);
                })
 }
    return (
        <>
        <ToastContainer />
            <div className='flex gap-2 text-[14px] border-t-2 border-b-2 pl-[10px] w-[98%] mx-auto py-2'>
                <p>Home</p>
                <p>/</p>
                <p>Sub Category</p>
                <p>/</p>
                <p>Add Sub Category</p>
            </div>
            <div className='my-[20px] p-[10px_10px] bg-white rounded-lg w-[100%] border'>
                <h1 className='p-[10px_10px] text-[20px] font-semibold bg-[#F1F5F9] rounded-lg '>Add Sub Category</h1>
                <form className='grid grid-cols-[40%_58%] mt-[10px] gap-[20px]' onSubmit={saveData}>
                    <div className=''>
                        <div className=''>
                            <p className='font-semibold block'>Catergory Image</p>
                            <label for="subsubCategoryUpload">
                                <div className='cursor-pointer w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                                    <FaCloudDownloadAlt className='text-gray-400 text-[50px]' />
                                    <span className='text-center'>Drag and Drop</span>
                                </div>
                            </label>
                            <input type='file' className='hidden' id="subsubCategoryUpload" name="subsubCategoryImage" />
                        </div>
                        <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white my-[20px]" type='submit'>Add Sub Category</button>
                    </div>
                    <div className=''>
                        <div className='mb-[20px]'>
                            <label className='font-semibold'>Parent Category Name</label>
                            <select className='w-[100%] p-[8px_10px] text-black border rounded-lg' name='subsubCategoryParent'>
                                <option>Select Category</option>
                                <option value="Men" > Men </option>
                                <option value="Women">Women</option>
                                <option value="Sale" >Sale</option>
                            </select>
                        </div>
                        <div className='mb-[20px]'>
                            <label className='font-semibold'>Sub Category Name</label>
                            <select className='w-[100%] p-[8px_10px] text-black border rounded-lg' name='subsubCategory'>
                                <option>Select Category</option>
                                <option value="Men" > Men </option>
                                <option value="Women">Women</option>
                                <option value="Sale" >Sale</option>
                            </select>
                        </div>
                        <div className='mb-[20px]'>
                            <label className='font-semibold'>Category Name</label>
                            <input type='text' name="subsubCategoryName" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Category Name' required />
                        </div>
                        <div className='mb-[20px]'>
                            <label className='font-semibold'>Category Name</label>
                            <input type='text' name="subsubCategoryOrder" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Order' required />
                        </div>

                    </div>

                </form>
            </div>

        </>
    )
}