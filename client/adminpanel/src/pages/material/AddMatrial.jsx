import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { apiBaseurl } from '../../config';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function AddMatrial() {
  let navigate=useNavigate()
   let [materialName, setMaterialName] = useState('')
      let [materialOrder, setMaterialOrder] = useState(null)
       let { id } = useParams()

  let materialInsert=(e)=>{
         e.preventDefault()
         let materialName=e.target.materialName.value;
         let materialOrder=e.target.materialOrder.value;
         let  obj={
              materialName,
              materialOrder
         }
         if(id){
         axios.put(`${apiBaseurl}/material/update/${id}`,obj)
         .then((res)=>{
          console.log(res.data)
          e.target.reset()
          toast.success("Material update successfully!");

                                                          // 1-second delay before navigating
          setTimeout(() => {
               navigate('/viewmaterial');
             }, 1000);

        })
      }
      else{
        axios.post(`${apiBaseurl}/material/insert`,obj)
         .then((res)=>{
          console.log(res.data)
          e.target.reset()
          toast.success("Material added successfully!");

                                                          // 1-second delay before navigating
          setTimeout(() => {
               navigate('/viewmaterial');
             }, 1000);

        })
      }

          
  }

  useEffect(()=>{
                     if(id){
                       axios.get(`${apiBaseurl}/material/edit/${id}`)
                       .then((res) =>res.data)
                       .then((finalres)=>{
                         console.log(finalres.materialData)
                         setMaterialName(finalres.materialData.materialName)
                         setMaterialOrder(finalres.materialData.materialOrder)
                        
                        
                       })
                     }
                     else{
                         setMaterialName("")
                         setMaterialOrder(null)
                     
                     }
                   },[id])
  return (
    <div>
       <ToastContainer />
         <div className='flex gap-2 text-[14px] border-t-2 border-b-2 pl-[10px] w-[98%] mx-auto py-2'>
                                    <p>Home</p>
                                    <p>/</p>
                                    <p> Material</p>
                            <p>/</p>
                            <p>{id ? "Update":"Add"}</p>
                                </div>
        <div className='border my-3 w-[90%] mx-auto rounded-[10px] '>
            <h1 className='bg-[#a3bac2] rounded-[10px_10px_0_0] p-3 font-bold'>{id ? "Update Material":"Add Material"}</h1>
            <form action="" onSubmit={materialInsert}>
                <label htmlFor="" className='block ps-3 mt-3'>Category Name</label>
                <input type="text"  placeholder='Material Name' className='w-[95%] ms-3  border-2 rounded-[20px] ps-2' name="materialName"
                value={materialName}
                        onChange={(e) => setMaterialName(e.target.value)}/>
                <label htmlFor="" className='block ps-3 mt-3'>Order</label>
                <input type="number"  placeholder='order' className='w-[95%] ms-3  border-2 rounded-[20px] ps-2' name="materialOrder" 
                value={materialOrder}
                        onChange={(e) => setMaterialOrder(e.target.value)}/>

                <button className='block ps-1 border-3 bg-[#9999e6] p-[5px_20px]  rounded ms-3 my-3 text-[15px] text-white'>{id ? "Update Material":"Add Material"}</button>
            </form>
        </div>
    </div>
  )
}
