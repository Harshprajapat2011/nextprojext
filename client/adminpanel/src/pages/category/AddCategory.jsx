import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { apiBaseurl } from '../../config';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function AddCategory() {
  let navigate=useNavigate()
  let [imagePre,setImagePre]=useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8DP-y_amEtUXtq1mh5eQGQzfDYk_CyJu-w&s')
  let [catName,setCatName]=useState('')
  let [catOrder,setCatOrder]=useState(null)

 

    let {id}=useParams()
  
  
  let saveData = (e) => {
    e.preventDefault()
    let data = new FormData(e.target);
    if(id){
      axios.put(`${apiBaseurl}/category/update/${id}`,data)
      .then((res) => {
        console.log(res.data);
        e.target.reset()
        toast.info("category update successfully!");

        // 1-second delay before navigating
        setTimeout(() => {
          navigate('/view-category');
        }, 1000);
      })
    }
    else{
      axios.post(`${apiBaseurl}/category/insert`, data)
      .then((res) => {
        if(res.data.status){
        console.log(res.data);
        // console.log(res.data.status=0);
        e.target.reset()
        toast.success("category added successfully!");

        // 1-second delay before navigating
        setTimeout(() => {
          navigate('/view-category');
        }, 1000);
        }
        else if(res.data.status=0){
          toast.denger("res.data.msg")
        }
      })
    }
    
  }
     
  useEffect(()=>{
    if(id){
      axios.get(`${apiBaseurl}/category/edit/${id}`)
      .then((res) =>res.data)
      .then((finalres)=>{
        console.log(finalres.categoryData)
        setCatName(finalres.categoryData.categoryName)
        setCatOrder(finalres.categoryData.categoryOrder)
        setImagePre(finalres.staticPath+finalres.categoryData.categoryImage)
      })
    }
    else{
      setCatName("")
      setCatOrder(null)
      setImagePre('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8DP-y_amEtUXtq1mh5eQGQzfDYk_CyJu-w&s')
    }
  },[id])

  return (
    <>
    <ToastContainer />
      <div className='flex gap-2 text-[14px] border-t-2 border-b-2 pl-[10px] w-[98%] mx-auto py-2'>
        <p>Home</p>
        <p>/</p>
        <p>Category</p>
        <p>/</p>
        <p>{id ? "Update":"Add"}</p>
      </div>
      <div className='my-[20px] p-[10px_10px] bg-white rounded-lg w-[100%] border'>
        <h1 className='p-[10px_10px] text-[20px] font-semibold bg-[#F1F5F9] rounded-lg '>{id ? 
        "Update Category":"Add Category"}</h1>
        <form className='grid grid-cols-[40%_58%] mt-[10px] gap-[20px]' onSubmit={saveData}>
          <div className=''>
            <div className=''>
              <p className='font-semibold block'>Catergory Image</p>
              <label for="upload">
                {/* <div className='w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'> */}
                  {/* <FaCloudDownloadAlt className='text-gray-400 text-[50px]' />
                  <span className='text-center'>Drag and Drop</span> */}
                    {/* </div> */}
                    <img src={imagePre} alt="" className='w-[350px] h-[250px]' />
              </label>
              <input type='file' className='hidden' id="upload" name="categoryImage"
              onChange={(e)=>{
                setImagePre(URL.createObjectURL(e.target.files[0]))
              }} />
            </div>
            <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white my-[20px]" type='submit' >{id ? "Update Category":"Add Category"}</button>
          </div>
          <div className=''>
            <div className='mb-[20px]'>
              <label className='font-semibold'>Category Name</label>
              <input type='text' name="categoryName" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Category Name' required 
              value={catName} onChange={(e)=>setCatName(e.target.value)}/>
            </div>
            <div className='mb-[20px]'>
              <label className='font-semibold'>Order</label>
              <input type='text' name="categoryOrder" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Order' required
              value={catOrder} onChange={(e)=>setCatOrder(e.target.value)} />
            </div>

          </div>

        </form>
      </div>

    </>
  )
}