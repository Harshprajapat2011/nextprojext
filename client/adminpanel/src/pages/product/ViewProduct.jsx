import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { apiBaseurl } from '../../config'

export default function ViewProduct() {
let[showmodal,setShowModal]=useState(false);
// let [staticPath, setStaticPath] = useState('')
//     let [productlist, setProductlist] = useState([])
//     let [delAllid, setDelallid] = useState([])
//     let [title, setTitle] = useState('')

//     let productTable = () => {
//         axios.get(`${apiBaseurl}/product/view`,
//             {
//                 params: {
//                     title

//                 }
//             }
//         )
//             .then((res) => res.data)
//             .then((finalres) => {
//                 console.log(finalres.productData)
//                 setProductlist(finalres.productData)
//                 setStaticPath(finalres.staticPath)

//             })
//             .catch((error) => {
//                 console.log('error', error.message)
//             })
//     }

//     useEffect(() => {
//         productTable()
//     }, [])

//     let delitems = (e) => {
//         if (e.target.checked) {
//             if (!delAllid.includes(e.target.value)) {
//                 setDelallid([...delAllid, e.target.value])
//             }
//         }
//         else {
//             let fillterdata = delAllid.filter((v) => v != e.target.value)
//             setDelallid(fillterdata)
//         }
//     }
//     let multidel = () => {
//         let obj = {
//             ids: delAllid
//         }
//         axios.post(`${apiBaseurl}/product/delete`, obj)
//             .then((res) => {
//                 productTable()
//             })
//     }
//     useEffect(() => {
//         console.log(delAllid)
//     }, [delAllid])

//     let searchTitle = (e) => {
//         e.preventDefault()
//         productTable()
//     }
  return (
    <>
          <div className='flex gap-2 text-[14px] border-t-2 border-b-2 pl-[10px] w-[98%] mx-auto py-2'>
                <p>Home</p>
                <p>/</p>
                <p>Product</p>
                <p>/</p>
                <p>Product Items</p>
        </div>
        <div className='w-[95%] mx-auto my-[20px] bg-white rounded-lg'
        >
            <h1 className='text-[20px] py-[10px]  font-semibold rounded-t-lg border-b bg-[#F1F5F9]'><span className='ps-[10px]'>Prodct Items</span></h1>
            <table className='w-[100%] border mt-[1px]'>
                   <thead className='bg-[#F9FAFB]'>
                    <tr className='text-center'>
                    <th className='p-[5px_10px] border'>Delete</th>
                    <th className='p-[5px_10px] border'>S.No</th>
                    <th className='p-[5px_10px] border'>Product Name</th>
                    <th className='p-[5px_10px] border w-[250px]'>Description</th>
                    <th className='p-[5px_10px] border w-[250px]'>Short Description</th>
                    <th className='p-[5px_10px] border'>Thumbnails</th>
                    <th className='p-[5px_10px] border'>Action</th>
                    <th className='p-[5px_10px] border'>Status</th>
                    </tr>
                   </thead>
                   <tbody>
                    <tr className='text-center'>
                        <td className='p-[5px_10px]'><input type="checkbox"/></td>
                        <td className='p-[5px_10px]'>1</td>
                        <td className='p-[5px_10px]'>Men's</td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer' onClick={()=>setShowModal(!showmodal)}>Read More</div></td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer' onClick={()=>setShowModal(!showmodal)}>Read More</div></td>
                        <td className='p-[5px_10px]  flex justify-center'>
                            <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" className='w-[80px] h-[60px] rounded-lg' />
                        </td>
                        <td className='p-[5px_10px]'><div className=' flex items-center gap-[5px] justify-center'><MdDelete className='text-red-500 text-[20px]'/>|<CiEdit className='text-yellow-500 text-[20px]'/></div></td>
                        <td>Active</td>
                    </tr>
                    <tr className='text-center'>
                        <td className='p-[5px_10px]'><input type="checkbox"/></td>
                        <td className='p-[5px_10px]'>2</td>
                        <td className='p-[5px_10px]'>Men's</td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]  flex justify-center'>
                            <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" className='w-[80px] h-[60px] rounded-lg' />
                        </td>
                        <td className='p-[5px_10px]'><div className=' flex items-center gap-[5px] justify-center'><MdDelete className='text-red-500 text-[20px]'/>|<CiEdit className='text-yellow-500 text-[20px]'/></div></td>
                        <td>Active</td>
                    </tr>
                    <tr className='text-center'>
                        <td className='p-[5px_10px]'><input type="checkbox"/></td>
                        <td className='p-[5px_10px]'>3</td>
                        <td className='p-[5px_10px]'>Men's</td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]  flex justify-center'>
                            <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" className='w-[80px] h-[60px] rounded-lg' />
                        </td>
                        <td className='p-[5px_10px]'><div className=' flex items-center gap-[5px] justify-center'><MdDelete className='text-red-500 text-[20px]'/>|<CiEdit className='text-yellow-500 text-[20px]'/></div></td>
                        <td>Active</td>
                    </tr>
                    <tr className='text-center'>
                        <td className='p-[5px_10px]'><input type="checkbox"/></td>
                        <td className='p-[5px_10px]'>4</td>
                        <td className='p-[5px_10px]'>Men's</td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]  flex justify-center'>
                            <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" className='w-[80px] h-[60px] rounded-lg' />
                        </td>
                        <td className='p-[5px_10px]'><div className=' flex items-center gap-[5px] justify-center'><MdDelete className='text-red-500 text-[20px]'/>|<CiEdit className='text-yellow-500 text-[20px]'/></div></td>
                        <td>Active</td>
                    </tr>
                    <tr className='text-center'>
                        <td className='p-[5px_10px]'><input type="checkbox"/></td>
                        <td className='p-[5px_10px]'>5</td>
                        <td className='p-[5px_10px]'>Men's</td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]  flex justify-center'>
                            <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" className='w-[80px] h-[60px] rounded-lg' />
                        </td>
                        <td className='p-[5px_10px]'><div className=' flex items-center gap-[5px] justify-center'><MdDelete className='text-red-500 text-[20px]'/>|<CiEdit className='text-yellow-500 text-[20px]'/></div></td>
                        <td>Active</td>
                    </tr>
                    <tr className='text-center'>
                        <td className='p-[5px_10px]'><input type="checkbox"/></td>
                        <td className='p-[5px_10px]'>6</td>
                        <td className='p-[5px_10px]'>Men's</td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]  flex justify-center'>
                            <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" className='w-[80px] h-[60px] rounded-lg' />
                        </td>
                        <td className='p-[5px_10px]'><div className=' flex items-center gap-[5px] justify-center'><MdDelete className='text-red-500 text-[20px]'/>|<CiEdit className='text-yellow-500 text-[20px]'/></div></td>
                        <td>Active</td>
                    </tr>
                   </tbody>
            </table>
        </div>
       
       
        {showmodal?

        <div className='w-[1320px] fixed top-[10%] left-[50%] translate-x-[-50%] bg-white p-[20px] rounded-lg'>
             <div className='flex justify-between border-b pb-[15px]'>
                 <h1 className='text-[20px] font-medium'>Product Image's & Price</h1>
                 <RxCross2 className='text-[25px] cursor-pointer' onClick={()=>setShowModal(!showmodal)}/>
             </div>
             <div className='grid grid-cols-[20%_40%_30%] gap-[5%] mt-[20px]'>
                  <div className='bg-white pt-[10px] pb-[80px] shadow-[0px_0px_3px_0.1px_black] pl-[10px] pr-[10px] rounded-lg '>
                     <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/902af913-69be-4024-b22c-cd573b7dd13b1613028902744-Roadster-Men-Tshirts-9521613028900435-1.jpg" className='w-[100%] h-[300px]'/> 
                  </div>
                  <div className='shadow-[0px_0px_3px_0.1px_black] flex flex-wrap p-[10px] rounded-lg gap-[10px]'>
                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/7f8383cc-07f5-4714-b451-fba7d49776921613028902727-Roadster-Men-Tshirts-9521613028900435-2.jpg" className='w-[140px] h-[180px]' />
                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/5d8249b2-cbfa-42a3-9b8a-9406fcb8af0c1613028902710-Roadster-Men-Tshirts-9521613028900435-3.jpg" className='w-[140px] h-[180px]' />
                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/bf9e30b3-5b8e-4cf1-811b-81ea64d45ed81613028902692-Roadster-Men-Tshirts-9521613028900435-4.jpg" className='w-[140px] h-[180px]' />
                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/77451543-64cb-4294-8f82-24ac1d78dcf01613028902666-Roadster-Men-Tshirts-9521613028900435-5.jpg" className='w-[140px] h-[180px]' />
                  </div>
                  <div className='shadow-[0px_0px_3px_0.1px_black] p-[10px]'>
                        <h1 className='text-center text-[20px] font-medium'>Product Detail</h1>
                        <ul className='mt-[20px] text-[20px] flex flex-col gap-[5px]'>
                            <li>Price : 1500</li>
                            <li>MRP : 3000</li>
                            <li>Manage Stock : in Stock</li>
                            <li>Brand Name : Lev's</li>
                            <li>Size : Xl</li>
                            <li>Color : Red</li>
                        </ul>
                  </div>
             </div>

        </div>
        :
         " "
        }
    </>
  )
}