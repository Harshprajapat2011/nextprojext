import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdEdit, MdFilterAlt, MdFilterAltOff } from 'react-icons/md'
import { apiBaseurl } from '../../config'
import { Link } from 'react-router-dom'

export default function ViewColor() {
    let [show, setShow] = useState(false)
    let [colorlist, setColorlist] = useState([])
    let [delAllid, setDelallid] = useState([])
    // let [title, setTitle] = useState('')
    console.log(delAllid);
   
    let [colorName, setColorName] = useState('')
    let [colorCode, setColorCode] = useState('')

    let allDataSelect=(e)=>{
        if(e.target.checked){
            setDelallid(colorlist.map(item=>item._id));
        }
        else{
            setDelallid([]);
        }
    }

    let colortable = () => {
        axios.get(`${apiBaseurl}/color/view`,
            {
                params: {
                    // title
                    title: colorName,
                    code: colorCode  
                }
            })
            .then((res) => res.data)
            .then((fianlres) => {
                console.log(fianlres.colorData);
                setColorlist(fianlres.colorData)
            })
            .catch((err) => {
                console.log("error", err.message);
            })
    }

    useEffect(() => {
        colortable()
    }, [])                                    ////arey me usestate title lene se ye serch karte hue 
    //// data layega screen per abhi blank kyoki click per set karna h 
    let delitems = (e) => {
        if (e.target.checked) {
            if (!delAllid.includes(e.target.value)) {
                setDelallid([...delAllid, e.target.value])
            }
        }
        else {
            let fillterdata = delAllid.filter((v) => v != e.target.value);
            setDelallid(fillterdata)
        }
    }
    let multidel = () => {
        let obj = {
            ids: delAllid
        }
        axios.post(`${apiBaseurl}/color/delete`, obj)
            .then((res) => {
                colortable()
            })
    }
    useEffect(() => {
        console.log(delAllid)
    }, [delAllid])

    let searchTitle = (e) => {
        e.preventDefault()
        colortable()
    }

//     let toggleStatus = () => {
//     if (delAllid.length < 1) return;

//     axios.post(`${apiBaseurl}/color/toggle-status`, { ids: delAllid })
//         .then((res) => {
//             colortable(); // Refresh table
//             setDelallid([]); // Clear selected IDs
//         })
//         .catch(err => {
//             console.error("Toggle status error", err);
//         });
// };

    return (
        <div>

            <div className='flex gap-2 text-[14px] border-t-2 border-b-2 pl-[10px] w-[98%] mx-auto py-2'>
                <p>Home</p>
                <p>/</p>
                <p> Color</p>
                <p>/</p>
                <p>View</p>
            </div>

            <div className={`w-[85%] mx-auto border my-6 ${show ? 'block' : 'hidden'}`} >
                <form action="" className='flex items-center my-4 mx-2 gap-1'
                    onSubmit={searchTitle}>
                         {/* <input type="search" className='border bg-[#c8cdd6] p-[8px_10px] rounded-lg' placeholder='Search Name'
                        onChange={(e) => setTitle(e.target.value)} /> */}
                    <input type="search" className='border bg-[#c8cdd6] p-[8px_10px] rounded-lg' placeholder='Search Name'
                        onChange={(e) => setColorName(e.target.value)} />
                    <input
                        type="search"
                        className='border bg-[#c8cdd6] p-[8px_10px] rounded-lg'
                        placeholder='Search Code'
                        onChange={(e) => setColorCode(e.target.value)}
                    />
                    <button type="submit">
                        <FaSearch className='text-[35px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]' />
                    </button>
                </form>
            </div>

            <div className='w-[85%] mx-auto rounded-lg border my-3'>
                <div className='flex items-center justify-between border  p-[10px_20px] bg-[#a3bac2]'>
                    <h1>View Color</h1>
                    <div className='flex gap-1 '>
                        {show ?
                            <MdFilterAltOff className='text-[35px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]'
                                onClick={() => setShow(!show)} /> :
                            <MdFilterAlt className='text-[35px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]'
                                onClick={() => setShow(!show)} />

                        }
                        <button className=' text-white rounded-lg cursor-pointer bg-[green] p-[5px_10px]' 
                        // onClick={toggleStatus}
                        >Change Status</button>
                        <button className=' text-white rounded-lg cursor-pointer bg-[#d12c2c] p-[5px_10px]' onClick={multidel}>Delete</button>
                    </div>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th className=' w-[5%] p-[10px_10px] text-gray-400 font-normal'><input type="checkbox"
                                 checked={delAllid.length==colorlist.length&&colorlist.length>=1  }  onChange={allDataSelect}/></th>
                                <th className=' w-[40%] text-left p-[10px_10px] text-gray-400 font-normal'>COLOR NAME</th>
                                <th className=' w-[20%] p-[10px_10px] text-left text-gray-400 font-normal'>CODE</th>
                                <th className=' w-[20%] p-[10px_10px] text-left text-gray-400 font-normal'>ORDER</th>
                                <th className=' w-[10%] p-[10px_10px] text-left text-gray-400 font-normal'>STATUS</th>
                                <th className=' w-[10%] p-[10px_10px] text-left text-gray-400 font-normal'>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {colorlist.length >= 1 ?
                                colorlist.map((v, i) => {
                                    return (
                                        <tr>
                                            <td className=' w-[5%] p-[10px_10px] text-gray-400 font-normal'><input type="checkbox"
                                                key={v._id}
                                                value={v._id}
                                                onChange={delitems}
                                                checked={delAllid.includes(v._id)} /></td>
                                            <td className=' w-[40%] text-left p-[10px_10px] text-gray-400 font-normal'>{v.colorName}
                                                <br />
                                                {v._id}
                                            </td>
                                            <td className=' w-[20%] p-[10px_10px] text-left text-gray-400 font-normal'>{v.colorCode}</td>
                                            <td className=' w-[20%] p-[10px_10px] text-left text-gray-400 font-normal'>{v.colorOrder}</td>
                                            {v.colorStatus ?
                                                <td className=' w-[10%] p-[10px_10px] text-left text-gray-400 font-normal'>
                                                    <button className=' text-white rounded-lg cursor-pointer bg-[green] p-[5px_10px]'>Active</button></td>
                                                :
                                                <td className=' w-[10%] p-[10px_10px] text-left text-gray-400 font-normal'>
                                                    <button className=' text-white rounded-lg cursor-pointer bg-[red] p-[5px_10px]'>DeActive</button></td>
                                            }
                                            <td className=' w-[10%] p-[10px_10px] text-left text-gray-400 font-normal'>
                                            <Link to={`/update-color/${v._id}`}>
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
