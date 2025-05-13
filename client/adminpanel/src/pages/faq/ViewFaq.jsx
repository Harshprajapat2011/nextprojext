import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdEdit, MdFilterAltOff } from "react-icons/md";
import { apiBaseurl } from '../../config';
import { Container } from 'postcss';
import { Link } from 'react-router-dom';
export default function ViewFaq() {
    // let[show,setShow]=useState(false);
    let [faqlist,setFaqlist]=useState([])
    let [delAllid,setDelallid]=useState([])
    

    let faqTable=()=>{
        axios.get(`${apiBaseurl}/faq/view`)
        .then((res)=>res.data)
        .then((finalres)=>{
            console.log(finalres.colorData)
            setFaqlist(finalres.colorData)
        })
        .catch((error)=>{
            console.log('error',error.massage)
        })
    }

    useEffect(()=>{
        faqTable()
    },[])

    let delitems=(e)=>{
        if(e.target.checked){
            if(!delAllid.includes(e.target.value)){
                setDelallid([...delAllid,e.target.value])
            }
        }
        else{
            let fillterdata=delAllid.filter((v)=>v!=e.target.value)
            setDelallid(fillterdata)
        }
    }
    let multidel=()=>{
        let obj={
            ids:delAllid
        }
        axios.post(`${apiBaseurl}/faq/delete`,obj)
      .then((res)=>{
        faqTable()
      })
    }
    useEffect(()=>{
       console.log(delAllid)
    },[delAllid])

    
  return (
    <>
            <div className='flex gap-2 text-[14px] border-t-2 border-b-2 pl-[10px] w-[98%] mx-auto py-2'>
                <p>Home</p>
                <p>/</p>
                <p>Faq</p>
                <p>/</p>
                <p>view</p>
            </div>

           <div className='w-[95%%] p-[20px_10px]'>
                                            {/* {
                                                show ?
                                                    <div className='p-[20px_10px] border rounded-lg  mb-[25px] bg-gray-300 '>
                                                        <form className='flex items-center gap-[10px]'>
                                                            <input type='text' className='w-[350px] pl-2 py-[8px] rounded-[5px] bg-[#374151] text-white font-semibold' placeholder='Serach Name' name="viewFaq" />
                                                            <FaMagnifyingGlass className='text-[40px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]' />
                                                        </form>
                                                    </div> : " "
                                            } */}
                                            <div className=''>
                                                <div className='flex justify-between border p-[15px_10px] rounded-lg bg-[#F1F5F9]'>
                                                    <h1 className='text-[25px] font-semibold'>View Faq</h1>
                                                    <div className='flex items-center gap-[10px]'>
                                                        {/* {show ? <MdFilterAltOff className='p-[8px_8px] text-[35px] bg-[#2563EB] rounded-lg text-white cursor-pointer ' onClick={() => setShow(!show)} /> : <FaFilter className='p-[8px_8px] text-[35px] bg-[#2563EB] rounded-lg text-white cursor-pointer ' onClick={() => setShow(!show)} />} */}
                                                        <button className='p-[8px_15px] bg-[#15803D] text-white text-[18px] rounded-lg cursor-pointer'>Change Status</button>
                                                        <button className='p-[8px_10px] bg-[#B91C1C] text-white text-[18px] rounded-lg cursor-pointer' onClick={multidel}>Delete</button>
                                                    </div>
                                                </div>
                                                <div className='rounded-lg overflow-hidden'>
                                                    <table className='w-[100%]'>
                                                        <thead className='' bgcolor='#374151'>
                                                            <tr>
                                                                <th className='border p-[10px_10px] text-gray-400 font-normal'> <input type='checkbox' /></th>
                                                                <th className='border p-[10px_10px] text-gray-400 font-normal w-[350px] text-left'>Question</th>
                                                                <th className='border p-[10px_10px] text-gray-400 font-normal w-[500px] text-left'>Answer</th>
                                                                <th className='border p-[10px_10px] text-gray-400 font-normal'>Order</th>
                                                                <th className='border p-[10px_10px] text-gray-400 font-normal'>Status</th>
                                                                <th className='border p-[10px_10px] text-gray-400 font-normal'>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className='' bgcolor="#1F2937">
                                                            {faqlist.length>=1 ? 
                                                             faqlist.map((v,i)=>{
                                                                return(
                                                                <tr className='text-center'>
                                                                <td className=' p-[30px_10px] text-white'><input type='checkbox'
                                                                   key={v._id}
                                                                 value={v._id}
                                                                 onChange={delitems}/>
                                                                </td>
                                                                <td className=' p-[30px_10px] text-white text-left'>{v.faqQuestion}</td> 
                                                                <td className=' p-[30px_10px] text-white text-justify'>{v.faqAnswer}</td>                                            
                                                                <td className=' p-[30px_10px] text-gray-400'>{v.faqOrder}</td>
                                                                {v.faqStatus ?  
                                                                <td className=' p-[30px_10px] text-white'><button className='p-[5px_20px] text-white bg-[#22C35D] rounded-lg cursor-pointer'>Active</button></td>
                                                                :
                                                                <td className=' p-[30px_10px] text-white'><button className='p-[5px_20px] text-white bg-[#F35959] rounded-lg cursor-pointer'>Deactive</button></td>
                                                                }
                                                                
                                                                <td className=' p-[30px_10px] text-white'>
                                                                    <Link to={`/update-faq/${v._id}`}>
                                                                    <MdEdit className='p-[5px_10px] text-[40px] bg-[#1D4ED8] rounded-[100%] cursor-pointer' />
                                                                    </Link></td>
                                                            </tr>
                                                            )
                                                             })
                                                            
                                                            :
                                                            <tr>
                                                                 <td colSpan="5" className="text-center py-10 text-gray-500">No data found</td>
                                                              </tr>
                                                            }
                                                           
                                                            {/* <tr className='text-center'>
                                                                <td className=' p-[30px_10px] text-white'><input type='checkbox' /></td>
                                                                <td className=' p-[30px_10px] text-white text-left'>harsh p</td> 
                                                                <td className=' p-[30px_10px] text-white text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae adipisci explicabo molestias possimus quidem obcaecati deserunt vel, officiis, nobis facilis earum quaerat aut esse consequuntur ab praesentium eius suscipit natus!</td>                                           
                                                                <td className=' p-[30px_10px] text-gray-400'>5</td>
                                                                <td className=' p-[30px_10px] text-white'><button className='p-[5px_20px] text-white bg-[#F35959] rounded-lg cursor-pointer'>Deactive</button></td>
                                                                <td className=' p-[30px_10px] text-white'><MdEdit className='p-[5px_10px] text-[40px] bg-[#1D4ED8] rounded-[100%] cursor-pointer' /></td>
                                                            </tr> */}
                                                            
                                                        </tbody>
                            
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
           
    </>
  )
}