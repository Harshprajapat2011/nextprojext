import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiBaseurl } from '../../config';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


export default function AddWhyChoose() {
   let navigate = useNavigate()
   let [imagePre,setImagePre]=useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8DP-y_amEtUXtq1mh5eQGQzfDYk_CyJu-w&s')
     let [whyName, setWhyName] = useState('')
     let [whyDescription, setWhyDescription] = useState('')
         let [whyOrder, setWhyOrder] = useState(null)
          let { id } = useParams()

  let saveData = (e) => {
    e.preventDefault()
    let data = new FormData(e.target);
    if(id){
      axios.put(`${apiBaseurl}/whyChooseUs/update/${id}`,data)
      .then((res) => {
        console.log(res.data);
        e.target.reset()
        toast.info("whyChooseUs update successfully!");

        // 1-second delay before navigating
        setTimeout(() => {
          navigate('/why-choose-us');
        }, 1000);
      })
    }
   else{
    axios.post(`${apiBaseurl}/whyChooseUs/insert`, data)
      .then((res) => {
        console.log(res.data);
        e.target.reset()
        toast.success("whyChooseUS added successfully!");

        // 1-second delay before navigating
        setTimeout(() => {
           navigate('/why-choose-us');
        }, 1000);
     })
     }
  }

   useEffect(()=>{
    if(id){
      axios.get(`${apiBaseurl}/whyChooseUS/edit/${id}`)
      .then((res) =>res.data)
      .then((finalres)=>{
        console.log(finalres.whyChooseUsData)
        setWhyName(finalres.whyChooseUsData.whyChooseUsTitle)
        setWhyOrder(finalres.whyChooseUsData.whyChooseUsOrder)
        setWhyDescription(finalres.whyChooseUsData.whyChooseUsDescription)

        setImagePre(finalres.staticPath+finalres.whyChooseUsData.whyChooseUsImage)
      })
    }
    else{
       setWhyName("")
     setWhyOrder(null)
     setWhyDescription("")
      setImagePre('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8DP-y_amEtUXtq1mh5eQGQzfDYk_CyJu-w&s')
    }
  },[id])
  return (
    <>
     <ToastContainer />
      <div className='flex gap-2 text-[14px] border-t-2 border-b-2 pl-[10px] w-[98%] mx-auto py-2'>
        <p>Home</p>
        <p>/</p>
        <p>Why Choose us</p>
        <p>/</p>
        <p>{id ? "Update":"Add"}</p>
      </div>

      <div className='my-[20px] p-[10px_10px] bg-white rounded-lg w-[100%] border'>
        <h1 className='p-[10px_10px] text-[20px] font-semibold bg-[#F1F5F9] rounded-lg '>{id ? 
        "Update why-Choose-Us":"Add why-Choose-Us"}</h1>
        <form className='grid grid-cols-[40%_58%] mt-[10px] gap-[20px]' onSubmit={saveData}>
          <div className=''>
            <div className=''>
              <p className='font-semibold block'>Choose Image</p>
              <label for="whyChooseUs">
                {/* <div className='cursor-pointer w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                  <FaCloudDownloadAlt className='text-gray-400 text-[50px]' />
                  <span className='text-center'>Drag and Drop</span>
                </div> */}
                 <img src={imagePre} alt="" className='w-[350px] h-[250px]' />
              </label>
              <input type='file' className='hidden' id="whyChooseUs" name="whyChooseUsImage" 
              onChange={(e)=>{
                setImagePre(URL.createObjectURL(e.target.files[0]))
              }}/>
            </div>
            <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white my-[20px]" >{id ? 
        "Update why-Choose-Us":"Add why-Choose-Us"}</button>
          </div>
          <div className=''>
            <div className='mb-[20px]'>
              <label className='font-semibold'>Title</label>
              <input type='text' name="whyChooseUsTitle" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Title' required
              value={whyName} onChange={(e)=>setWhyName(e.target.value)} />
            </div>
            <div className='mb-[20px]'>
              <label className='font-semibold'>Order</label>
              <input type='number' name="whyChooseUsOrder" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Order' required 
              value={whyOrder} onChange={(e)=>setWhyOrder(e.target.value)}/>
            </div>
            <div className='mb-[20px]'>
              <label className='font-semibold'>Description</label>
              <textarea className='w-[100%] resize-none h-[250px]' name='whyChooseUsDescription'
              value={whyDescription} onChange={(e)=>setWhyDescription(e.target.value)}></textarea>

            </div>

          </div>

        </form>
      </div>

    </>
  )
}