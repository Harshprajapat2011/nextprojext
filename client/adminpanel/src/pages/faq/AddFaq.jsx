import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { apiBaseurl } from '../../config';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function AddFaq() {
     let navigate=useNavigate()
      let [faqQus, setFaqQus] = useState('')
       let [faqAns, setFaqAns] = useState('')
           let [faqOrder, setFaqOrder] = useState(null)
            let { id } = useParams()

     let faqInsert=(e)=>{
         e.preventDefault()
       let  faqQuestion=e.target.faqQuestion.value;
       let  faqAnswer=e.target.faqAnswer.value;
       let  faqOrder=e.target.faqOrder.value;
         let obj={
          faqQuestion,faqAnswer,faqOrder
         }
           if(id){
         axios.put(`${apiBaseurl}/faq/update/${id}`,obj)
         .then((res)=>{
          console.log(res.data)
          e.target.reset()
          toast.info("faq update successfully!");

                                                          // 1-second delay before navigating
           setTimeout(() => {
                       navigate('/view-faq');
                     }, 1000);

        })
     }
     else{
         axios.post(`${apiBaseurl}/faq/insert`,obj)
         .then((res)=>{
          console.log(res.data)
        e.target.reset()
        toast.success("Faq added successfully!");
        
                                                                  // 1-second delay before navigating
                  setTimeout(() => {
                       navigate('/view-faq');
                     }, 1000);
      
        
         })
         }

     }

      useEffect(()=>{
                     if(id){
                       axios.get(`${apiBaseurl}/faq/edit/${id}`)
                       .then((res) =>res.data)
                       .then((finalres)=>{
                         console.log(finalres.faqData)
                         setFaqQus(finalres.faqData.faqQuestion)
                         setFaqAns(finalres.faqData.faqAnswer)
                         setFaqOrder(finalres.faqData.faqOrder)
                        
                        
                       })
                       .catch((err) => {
                console.error("Error fetching FAQ:", err); // Catch any fetch error
            });
                     }
                     else{
                         setFaqQus("")
                         setFaqAns("")
                         setFaqOrder(null)
                     
                     }
                   },[id])
  return (
     <>
            <div className='flex gap-2 text-[14px] border-t-2 border-b-2 pl-[10px] w-[98%] mx-auto py-2'>
                <p>Home</p>
                <p>/</p>
                <p>Faq</p>
                <p>/</p>
                <p>{id ? "Update":"Add"}</p>
           </div>
           <ToastContainer />
           <div className='w-[95%] p-[10px_10px] bg-white rounded-lg'>
             <h1 className='text-[20px] bg-[#F1F5F9] p-[10px_5px] font-medium rounded-lg'>{id ? "Update FAQ":"Add FAQ"}</h1>
             <form className='my-[20px]' onSubmit={faqInsert}>
                  <div className='mb-[20px]'>
                       <label className='font-semibold'>Question</label>
                       <input type='text' placeholder='Question' className='p-[8px_10px] border rounded-lg w-[100%]' name='faqQuestion' 
                       value={faqQus}
                        onChange={(e) => setFaqQus(e.target.value)}/>
                  </div>
                  <div className='mb-[20px]'>
                       <label className='font-semibold'>Answer</label>
                       <textarea className='w-[100%] min-h-[130px] border rounded-lg p-[8px_10px] resize-none' placeholder='Answer' name='faqAnswer'
                       value={faqAns}
                        onChange={(e) => setFaqAns(e.target.value)}></textarea>
                  </div>
                  <div className='mb-[20px]'>
                       <label className='font-semibold'>Order</label>
                       <input type='number' placeholder='Order' className='p-[8px_10px] border rounded-lg w-[100%]' name='faqOrder'
                       value={faqOrder}
                        onChange={(e) => setFaqOrder(e.target.value)} />
                  </div>
                  <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white my-[40px]" >{id ? "Update FAQ":"Add FAQ"}</button>
             </form>
        </div>
     </>
  )
}