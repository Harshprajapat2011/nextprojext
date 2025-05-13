import { React, useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';
import { apiBaseurl } from '../../config';
import axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function AddColor() {
    let [color, setColor] = useState('#ccc');
    let [ColorName, setColorName] = useState('')
    let [colorOrder, setColorOrder] = useState(null)
    let nevigate = useNavigate()


    let { id } = useParams()

    useEffect(() => {
        colorChange
    }, [color])

    let colorChange = (color) => {
        setColor(color.hex)
        console.log(color.hex);
    }

    let colorInsert = (e) => {
        e.preventDefault();
        let colorName = e.target.colorName.value;
        let colorCode = color
        let colorOrder = e.target.colorOrder.value;
        let obj = {
            colorName,
            colorCode,
            colorOrder
        }
        if (id) {
            axios.put(`${apiBaseurl}/color/update/${id}`, obj)
                .then((res) => {
                    console.log(res.data)
                    e.target.reset()
                    toast.info("color update successfully!");
                    setColor('')
                    // 1-second delay before navigating
                    setTimeout(() => {
                        nevigate('/viewcolor');
                    }, 1000)
                })
            }
         else {
            axios.post(`${apiBaseurl}/color/insert`, obj)
                .then((res) => {
                    console.log(res.data)
                    e.target.reset()
                    toast.success("color added successfully!");
                    setColor('')
                    // 1-second delay before navigating
                    setTimeout(() => {
                        nevigate('/viewcolor');
                    }, 1000);


                })
        }
    }

        useEffect(()=>{
            if(id){
              axios.get(`${apiBaseurl}/color/edit/${id}`)
              .then((res) =>res.data)
              .then((finalres)=>{
                console.log(finalres.colorData)
                setColorName(finalres.colorData.colorName)
                setColorOrder(finalres.colorData.colorOrder)
                setColor(finalres.colorData.colorCode)
               
              })
            }
            else{
                setColorName("")
                setColorOrder(null)
                setColor('#ccc')
            }
          },[id])
 
    return (
        <>
            <div className='flex gap-2 text-[14px] border-t-2 border-b-2 pl-[10px] w-[98%] mx-auto py-2'>
                <p>Home</p>
                <p>/</p>
                <p> Color</p>
                <p>/</p>
                <p>{id ? "Update":"Add"}</p>
            </div>
            <ToastContainer />
            <div className='w-full p-[10px_10px] bg-white rounded-lg border '>
                <h1 className='text-[20px] font-medium bg-[#F1F5F9] p-[10px_5px] rounded-lg border-b-1'>
                   {id ? "Update Color" : "Add Color"} </h1>
                <form className='py-[20px]' onSubmit={colorInsert}>
                    <div className='mb-[20px]'>
                        <label className='font-semibold'>Color Name</label>
                        <input type='text' className='w-[100%] p-[8px_10px] border rounded-lg' placeholder='Enter Color Name' name="colorName" required
                        value={ColorName}
                        onChange={(e) => setColorName(e.target.value)} />
                    </div>
                    <div className='mb-[20px]'>
                        <label className='font-semibold'>Color Picker</label>
                        <div className="flex items-center gap-[35px]">
                            <SketchPicker
                                color={color}
            
                                onChangeComplete={colorChange}
                                className='mt-[10px]'
                            />
                            <input type="color" className="w-[40px] h-[40px]" value={color} 
                            name="colorValue" 
                          
                            onChange={(e)=>setColor(e.target.value)}/>
                        </div>
                    </div>
                    <div className='mb-[20px]'>
                        <label className='font-semibold'>Order</label>
                        <input type='number' className='w-[100%] p-[8px_10px] border rounded-lg' placeholder='Enter Order' name="colorOrder"
                          value={colorOrder}
                          onChange={(e) => setColorOrder(e.target.value)} />
                    </div>
                    <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white my-[40px]" >{id ? "Update Color" : "Add Color"}</button>


                </form>

            </div>
        </>
    )
        }