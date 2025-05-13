import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdEdit, MdFilterAlt, MdFilterAltOff } from 'react-icons/md'
import { apiBaseurl } from '../../config'
import { Link } from 'react-router-dom'

export default function ViewCategory() {
    let [show, setShow] = useState(false)
    let [staticPath,setStaticPath]=useState('')
    let [categorylist, setCategorylist] = useState([])
    let [delAllid, setDelallid] = useState([])
    let [title, setTitle] = useState('')

    let categoryTable = () => {
        axios.get(`${apiBaseurl}/category/view`,
            {
                params: {
                    title

                }
            }
        )
            .then((res) => res.data)
            .then((finalres) => {
                console.log(finalres.categoryData)
                setCategorylist(finalres.categoryData)
                setStaticPath(finalres.staticPath)

            })
            .catch((error) => {
                console.log('error', error.message)
            })
    }

    useEffect(() => {
        categoryTable()
    }, [])

    let delitems = (e) => {
        if (e.target.checked) {
            if (!delAllid.includes(e.target.value)) {
                setDelallid([...delAllid, e.target.value])
            }
        }
        else {
            let fillterdata = delAllid.filter((v) => v != e.target.value)
            setDelallid(fillterdata)
        }
    }

     ///status change
    let changeStatus=(id,status)=>{
       axios.put(`${apiBaseurl}/category/status/${id}` ,{
        status
       })
       .then((res)=>{
    console.log(res.data)
        categoryTable()
})
    .catch((err) => console.log(err))
    }

    ///delet
    let multidel = () => {
        let obj = {
            ids: delAllid
        }
        axios.post(`${apiBaseurl}/category/delete`, obj)
            .then((res) => {
                categoryTable()
            })
    }
    useEffect(() => {
        console.log(delAllid)
    }, [delAllid])


    ///serch
    let searchTitle = (e) => {
        e.preventDefault()
        categoryTable()
    }
    return (
        <div>
            <div className='flex gap-2 text-[14px] border-t-2 border-b-2 pl-[10px] w-[98%] mx-auto py-2'>
                <p>Home</p>
                <p>/</p>
                <p> Category</p>
                <p>/</p>
                <p>View</p>
            </div>

            <div className={`w-[85%] mx-auto border my-6 ${show ? 'block' : 'hidden'}`} >
                <form action="" className='flex items-center my-4 mx-2 gap-1'
                    onSubmit={searchTitle}>
                    <input type="search" className='border bg-[#c8cdd6] p-[8px_10px] rounded-lg' placeholder='Search Name'
                        onChange={(e) => setTitle(e.target.value)} />
                    <button type="submit">
                        <FaSearch className='text-[35px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]' />
                    </button>
                </form>
            </div>

            <div className='w-[85%] mx-auto rounded-lg border my-3'>
                <div className='flex items-center justify-between border  p-[10px_20px] bg-[#a3bac2]'>
                    <h1>View Category</h1>
                    <div className='flex gap-1 '>
                        {show ?
                            <MdFilterAltOff className='text-[35px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]'
                                onClick={() => setShow(!show)} /> :
                            <MdFilterAlt className='text-[35px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]'
                                onClick={() => setShow(!show)} />

                        }
                        <button className=' text-white rounded-lg cursor-pointer bg-[green] p-[5px_10px]'>Change Status</button>
                        <button className=' text-white rounded-lg cursor-pointer bg-[#d12c2c] p-[5px_10px]' onClick={multidel}>Delete</button>
                    </div>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th className=' w-[5%] p-[10px_10px] text-gray-400 font-normal'><input type="checkbox" /></th>
                                <th className=' w-[40%] text-left p-[10px_10px] text-gray-400 font-normal'>NAME</th>
                                <th className=' w-[20%] p-[10px_10px] text-left text-gray-400 font-normal'>IMAGE</th>
                                <th className=' w-[20%] p-[10px_10px] text-left text-gray-400 font-normal'>ORDER</th>
                                <th className=' w-[10%] p-[10px_10px] text-left text-gray-400 font-normal'>STATUS</th>
                                <th className=' w-[10%] p-[10px_10px] text-left text-gray-400 font-normal'>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                        {categorylist.length >= 1 ?
                                categorylist.map((v, i) => {
                                    return (
                            <tr>
                                <td className=' w-[5%] p-[10px_10px] text-gray-400 font-normal'><input type="checkbox" 
                                 key={v._id}
                                 value={v._id}
                                 onChange={delitems}/></td>
                                <td className=' w-[40%] text-left p-[10px_10px] text-gray-400 font-normal'>{v.categoryName}</td>
                                <td className=' w-[20%] p-[10px_10px] text-left text-gray-400 font-normal'>
                                    <img src={staticPath+v.categoryImage} alt="" className='w-[50px]' />
                                </td>
                                <td className=' w-[20%] p-[10px_10px] text-left text-gray-400 font-normal'>{v.categoryOrder}</td>
                                {v.categoryStatus ?
                                                <td className=' p-[30px_10px] text-white'><button className='p-[5px_20px] text-white bg-[#22C35D] rounded-lg cursor-pointer'
                                                onClick={()=>changeStatus(v._id,false)}>Active</button></td>
                                                :
                                                <td className=' p-[30px_10px] text-white'><button className='p-[5px_20px] text-white bg-[#F35959] rounded-lg cursor-pointer'
                                                 onClick={()=>changeStatus(v._id,true)}>Deactive</button></td>
                                            }
                                <td className=' w-[10%] p-[10px_10px] text-left text-gray-400 font-normal'>
                                    <Link to={`/update-category/${v._id}`}>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
