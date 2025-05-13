import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdEdit, MdFilterAlt, MdFilterAltOff } from 'react-icons/md'
import { apiBaseurl } from '../../config'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function ViewCountry() {
      let [show,setShow]=useState(false)

    

    let [countrylist, setCountrylist] = useState([])
    let [delAllid, setDelallid] = useState([])
       let [title, setTitle] = useState('')

    let countryTable = () => {
        axios.get(`${apiBaseurl}/country/view`,
            {
                params: {
                    title
                    
                }
            }
        )
            .then((res) => res.data)
            .then((finalres) => {
                console.log(finalres.countryData)
                setCountrylist(finalres.countryData)

            })
            .catch((error) => {
                console.log('error', error.message)
            })
    }

    useEffect(() => {
        countryTable()
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
    let multidel = () => {
        let obj = {
            ids: delAllid
        }
        axios.post(`${apiBaseurl}/country/delete`, obj)
            .then((res) => {
                countryTable()
            })
    }
    useEffect(() => {
        console.log(delAllid)
    }, [delAllid])

    let searchTitle = (e) => {
        e.preventDefault()
        countryTable()
    }
  return (
     <div>
    
            <div className='flex gap-2 text-[14px] border-t-2 border-b-2 pl-[10px] w-[98%] mx-auto py-2'>
                                <p>Home</p>
                                <p>/</p>
                                <p> Location</p>
                        <p>/</p>
                        <p>View</p>
                            </div>
                    
                            <div className={`w-[85%] mx-auto border my-6 ${show? 'block': 'hidden'}`} >
                                <form action="" className='flex items-center my-4 mx-2 gap-1'
                                onSubmit={searchTitle}>
                                <input type="search" className='border bg-[#c8cdd6] p-[8px_10px] rounded-lg' placeholder='Search Name' 
                                onChange={(e) => setTitle(e.target.value)} />
                                 <button type="submit">
                                <FaSearch className='text-[35px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]'/>
                                </button>
                                </form>
                            </div>
                    
                            <div className='w-[85%] mx-auto rounded-lg border my-3'>
                                <div className='flex items-center justify-between border  p-[10px_20px] bg-[#a3bac2]'>
                                    <h1>View Country</h1>
                                    <div className='flex gap-1 '>
                                        {show ?
                                    <MdFilterAltOff className='text-[35px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]'
                                    onClick={()=>setShow(!show)}/> :
                                    <MdFilterAlt className='text-[35px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]'
                                    onClick={()=>setShow(!show)}/>
                    
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
                                            <th className=' w-[60%] text-left p-[10px_10px] text-gray-400 font-normal'>COUNTRY NAME</th>
                                            {/* <th className=' w-[20%] p-[10px_10px] text-left text-gray-400 font-normal'>CODE</th> */}
                                            <th className=' w-[20%] p-[10px_10px] text-left text-gray-400 font-normal'>ORDER</th>
                                            <th className=' w-[10%] p-[10px_10px] text-left text-gray-400 font-normal'>STATUS</th>
                                            <th className=' w-[10%] p-[10px_10px] text-left text-gray-400 font-normal'>ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {countrylist.length >= 1 ?
                                countrylist.map((v, i) => {
                                    return (
                                            <tr>
                                            <td className=' w-[5%] p-[10px_10px] text-gray-400 font-normal'><input type="checkbox" 
                                             key={v._id}
                                             value={v._id}
                                             onChange={delitems}/></td>
                                            <td className=' w-[60%] text-left p-[10px_10px] text-gray-400 font-normal'>{v.countryName}</td>
                                            {/* <td className=' w-[20%] p-[10px_10px] text-left text-gray-400 font-normal'>Harshprajapat561</td> */}
                                            <td className=' w-[20%] p-[10px_10px] text-left text-gray-400 font-normal'>{v.countryOrder}</td>
                                            {v.countryStatus ?
                                                <td className=' p-[30px_10px] text-white'><button className='p-[5px_20px] text-white bg-[#22C35D] rounded-lg cursor-pointer'>Active</button></td>
                                                :
                                                <td className=' p-[30px_10px] text-white'><button className='p-[5px_20px] text-white bg-[#F35959] rounded-lg cursor-pointer'>Deactive</button></td>
                                            }
                                            <td className=' w-[10%] p-[10px_10px] text-left text-gray-400 font-normal'>
                                                 <Link to={`/update-country/${v._id}`}>
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
