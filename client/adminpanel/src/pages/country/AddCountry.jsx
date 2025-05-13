import { React, useEffect, useState } from 'react';
import { apiBaseurl } from '../../config';
import axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function AddCountry() {
    
         let nevigate=useNavigate()
         let [countryName, setCountryName] = useState('')
      let [countryOrder, setCountryOrder] = useState(null)
       let { id } = useParams()
        
     
       
     
         let countryInsert=(e)=>{
             e.preventDefault();
            let countryName=e.target.countryName.value;
           
          let   countryOrder=e.target.countryOrder.value;
          let obj={
             countryName,
            
             countryOrder
          }
           if(id){
         axios.put(`${apiBaseurl}/country/update/${id}`,obj)
         .then((res)=>{
          console.log(res.data)
          e.target.reset()
          toast.info("country update successfully!");

                                                          // 1-second delay before navigating
          setTimeout(() => {
             nevigate('/view-country');
                }, 1000); 

        })
     }
     else{
     
          axios.post(`${apiBaseurl}/country/insert`,obj)
          .then((res)=>{
             console.log(res.data)
             e.target.reset()
             toast.success("country added successfully!");
             
                                                                       
                       setTimeout(() => {
                         nevigate('/view-country');
                          }, 1000); 
          })
          }
     
         }
         useEffect(()=>{
                     if(id){
                       axios.get(`${apiBaseurl}/country/edit/${id}`)
                       .then((res) =>res.data)
                       .then((finalres)=>{
                         console.log(finalres.countryData)
                         setCountryName(finalres.countryData.countryName)
                         setCountryOrder(finalres.countryData.countryOrder)
                        
                        
                       })
                     }
                     else{
                         setCountryName("")
                         setCountryOrder(null)
                     
                     }
                   },[id])
  return (
    <>
          <div className='flex gap-2 text-[14px] border-t-2 border-b-2 pl-[10px] w-[98%] mx-auto py-2'>
                <p>Home</p>
                <p>/</p>
                <p>Country</p>
                <p>/</p>
                <p>{id ? "Update":"Add"}</p>
         </div>
                                 <ToastContainer />
         

         <div className='w-[95%] p-[10px_10px] bg-white rounded-lg'>
             <h1 className='text-[20px] bg-[#F1F5F9] p-[10px_5px] font-medium rounded-lg'>{id ? "Update Country":"Add Country"}</h1>
             <form className='my-[20px]' onSubmit={countryInsert}>
                  <div className='mb-[20px]'>
                       <label className='font-semibold'>Category Name</label>
                       <input type='text' placeholder='country Name' className='p-[8px_10px] border rounded-lg w-[100%]' name='countryName'
                        value={countryName}
                        onChange={(e) => setCountryName(e.target.value)} />
                  </div>
                  <div className='mb-[20px]'>
                       <label className='font-semibold'>Order</label>
                       <input type='text' placeholder='Order' className='p-[8px_10px] border rounded-lg w-[100%]' name='countryOrder'
                        value={countryOrder}
                        onChange={(e) => setCountryOrder(e.target.value)} />
                  </div>
                  <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white my-[40px]" >{id ? "Update Material":"Add Material"}</button>
             </form>
        </div>
    </>
  )
}