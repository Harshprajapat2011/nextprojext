import React, { useState } from 'react'
import { MdDashboard } from "react-icons/md";
import { FaLocationArrow, FaUser, FaUserEdit } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";
import { IoIosText } from "react-icons/io";
import { IoIosColorPalette } from "react-icons/io";
import { GiMaterialsScience } from "react-icons/gi";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { GiBackwardTime } from "react-icons/gi";
import { MdBorderColor } from "react-icons/md";
import { FaSliders } from "react-icons/fa6";
import { FcFaq } from 'react-icons/fc';
import { BsNewspaper } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Leftslidebar() {

  let [user, setUser]=useState(false)
  let [enq,setEnq]=useState(false)
  let [color,setColor]=useState(false)
  let [material,setMaterial]=useState(false)
  let [prcat,setPrCat]=useState(false)
  let [subcat,setSubCat]=useState(false)
  let [subsubcat,setsubsubCat]=useState(false)
  let [product,setProduct]=useState(false)
  let [whychose,setWhychose]=useState(false)
  let [order,setOrder]=useState(false)
  let [slider,setslider]=useState(false)
  let [country,setCountry]=useState(false)
  let [tesimonal,setTestimonal]=useState(false)
  let [faq,setFaq]=useState(false)
  let [terms,setTerms]=useState(false)
  
  
  return (
    <div>
         <div className=''>    
            <div className=''>
        <img src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" alt="" />
       </div>
       <div className='border border-1 my-5 border-[#ccc]]'></div>

       <ul >
        <li >
            <div className='flex items-center gap-3 m-[10px_0_30px_0]'>
        <MdDashboard />
        <Link to={'/dashboard'}><h1>Dashboard</h1></Link>
        </div>
        </li>
       </ul>      
       {/* /////Dashboard */}

       <ul className='cursor-pointer'>
        <li onClick={()=>setUser(!user)}>
            <div className='flex items-center gap-3 my-2 relative '>
            <FaUser />
        <h1>User</h1>
        <MdKeyboardArrowDown className={`absolute top-[50%] right-0 translate-y-[-50%] ${user ? "rotate-180":"rotate-0"} duration-75`}/>
        
        </div>
        <ul>
          <li>
          <div className={`flex items-center gap-3 my-2 text-[14px] ${user ? "block":"hidden"} `}>
          <FaRegDotCircle />
        <Link to={'/user'}><h1>View User</h1></Link>
        </div>
          </li>
        </ul>
  
        </li>
       </ul>
       {/* ///user */}

       <ul className='cursor-pointer'>
        <li onClick={()=>setEnq(!enq)}>
            <div className='flex items-center gap-3 my-2 relative'>
            <IoIosText />
        <h1>Enquirys</h1>
        <MdKeyboardArrowDown className={`absolute top-[50%] right-0 translate-y-[-50%] ${enq ? "rotate-180":"rotate-0"} duration-75`}/>
        
        </div>
        <ul>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${enq ? "block":"hidden"} `}>
         
          <FaRegDotCircle />
        <Link to={'/contact-enquiry'}> <h1>Contact Enquiry</h1></Link>
       
          </li>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${enq ? "block":"hidden"} `}>
         
         <FaRegDotCircle />
         <Link to={'/newsletter'}> <h1>Newsletters</h1></Link>
      
         </li>
        </ul>
  
        </li>
       </ul>
       {/* ///enquiry  */}
       <ul className='cursor-pointer'>
        <li onClick={()=>setColor(!color)}>
            <div className='flex items-center gap-3 my-2 relative'>
            <IoIosColorPalette />
        <h1>Colors</h1>
        <MdKeyboardArrowDown className={`absolute top-[50%] right-0 translate-y-[-50%] ${color ? "rotate-180":"rotate-0"} duration-75`}/>
        
        </div>
        <ul>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${color? "block":"hidden"} `}>
         
          <FaRegDotCircle />
         <Link to={'add-color'}><h1>Add Color</h1></Link>
       
          </li>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${color ? "block":"hidden"} `}>
         
         <FaRegDotCircle />
        <Link to={'/viewcolor'}><h1>View Color</h1></Link>
      
         </li>
        </ul>
  
        </li>
       </ul>
       {/* ////color  */}
       <ul className='cursor-pointer'>
        <li onClick={()=>setMaterial(!material)}>
            <div className='flex items-center gap-3 my-2 relative'>
            <GiMaterialsScience />
        <h1>Materials</h1>
        <MdKeyboardArrowDown className={`absolute top-[50%] right-0 translate-y-[-50%] ${material ? "rotate-180":"rotate-0"} duration-75`}/>
        
        </div>
        <ul>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${material ? "block":"hidden"} `}>
         
          <FaRegDotCircle />
       <Link to={'/addmatrial'}>
        <h1>Add material</h1></Link>
       
          </li>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${material ? "block":"hidden"} `}>
         
         <FaRegDotCircle />
      <Link to={'/viewmaterial'}> <h1>View material</h1></Link>
      
         </li>
        </ul>
  
        </li>
       </ul>
       {/* ///material  */}
       <ul className='cursor-pointer'>
        <li onClick={()=>setPrCat(!prcat)}>
            <div className='flex items-center gap-3 my-2 relative'>
            <FaBarsStaggered />
        <h1>Parent Categorys</h1>
        <MdKeyboardArrowDown className={`absolute top-[50%] right-0 translate-y-[-50%] ${prcat ? "rotate-180":"rotate-0"} duration-75`}/>
        
        </div>
        <ul>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${prcat ? "block":"hidden"} `}>
         
          <FaRegDotCircle />
       <Link to={'/add-category'}> <h1>Add Category</h1></Link>
       
          </li>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${prcat ? "block":"hidden"} `}>
         
         <FaRegDotCircle />
       <Link to={'/view-category'}><h1>View Category</h1></Link>
      
         </li>
        </ul>
  
        </li>
       </ul>
       {/* ///perant-cate  */}
       <ul className='cursor-pointer'>
        <li onClick={()=>setSubCat(!subcat)}>
            <div className='flex items-center gap-3 my-2 relative'>
            <FaBarsStaggered />
        <h1>Sub Categorys</h1>
        <MdKeyboardArrowDown className={`absolute top-[50%] right-0 translate-y-[-50%] ${subcat ? "rotate-180":"rotate-0"} duration-75`}/>
        
        </div>
        <ul>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${subcat ? "block":"hidden"} `}>
         
          <FaRegDotCircle />
       <Link to={'/sub-add-category'}> <h1>Add Sub Category</h1></Link>
       
          </li>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${subcat ? "block":"hidden"} `}>
         
         <FaRegDotCircle />
      <Link to={'/sub-view-category'}> <h1>View Sub Category</h1></Link>
      
         </li>
        </ul>
  
        </li>
       </ul>
       {/* ///subCat  */}
       <ul className='cursor-pointer'>
        <li onClick={()=>setsubsubCat(!subsubcat)}>
            <div className='flex items-center gap-3 my-2 relative'>
            <FaBarsStaggered />
        <h1>Sub Sub Categorys</h1>
        <MdKeyboardArrowDown className={`absolute top-[50%] right-0 translate-y-[-50%] ${subsubcat ? "rotate-180":"rotate-0"} duration-75`}/>
        
        </div>
        <ul>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${subsubcat ? "block":"hidden"} `}>
         
          <FaRegDotCircle />
       <Link to={'/sub-sub-add-category'}> <h1>Add Sub Sub Category</h1></Link>
       
          </li>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${subsubcat ? "block":"hidden"} `}>
         
         <FaRegDotCircle />
      <Link to={'/sub-sub-view-category'}> <h1>View Sub Sub Category</h1></Link>
      
         </li>
        </ul>
  
        </li>
       </ul>
       {/* ///subsubcat  */}
       <ul className='cursor-pointer'>
        <li onClick={()=>setProduct(!product)}>
            <div className='flex items-center gap-3 my-2 relative'>
            <FaBagShopping />
        <h1>Products</h1>
        <MdKeyboardArrowDown className={`absolute top-[50%] right-0 translate-y-[-50%] ${product ? "rotate-180":"rotate-0"} duration-75`}/>
        
        </div>
        <ul>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${product ? "block":"hidden"} `}>
         
          <FaRegDotCircle />
         <Link to={'/add-product'}><h1>Add Product</h1></Link>
       
          </li>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${product ? "block":"hidden"} `}>
         
         <FaRegDotCircle />
      <Link to={'/view-product'}> <h1>View Product</h1></Link>
      
         </li>
        </ul>
  
        </li>
       </ul>
       {/* ////product  */}
       <ul className='cursor-pointer'>
        <li onClick={()=>setWhychose(!whychose)}>
            <div className='flex items-center gap-3 my-2 relative'>
           <GiBackwardTime />
        <h1>Why Choose Us</h1>
        <MdKeyboardArrowDown className={`absolute top-[50%] right-0 translate-y-[-50%] ${whychose ? "rotate-180":"rotate-0"} duration-75`}/>
        
        </div>
        <ul>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${whychose ? "block":"hidden"} `}>
         
          <FaRegDotCircle />
       <Link to={'/add-why-choose-us'}> <h1>Add Why Choose Us</h1></Link>
       
          </li>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${whychose ? "block":"hidden"} `}>
         
         <FaRegDotCircle />
      <Link to={'/why-choose-us'}> <h1>View Why Choose Us</h1></Link>
      
         </li>
        </ul>
  
        </li>
       </ul>
       {/* ///whychose us  */}
       <ul className='cursor-pointer'>
        <li onClick={()=>setOrder(!order)}>
            <div className='flex items-center gap-3 my-2 relative'>
            <MdBorderColor />
        <h1>Orders</h1>
        <MdKeyboardArrowDown className={`absolute top-[50%] right-0 translate-y-[-50%] ${order ? "rotate-180":"rotate-0"} duration-75`}/>
        
        </div>
        <ul>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${order ? "block":"hidden"} `}>
         
          <FaRegDotCircle />
       <Link to={'/orders'}> <h1>Orders</h1></Link>
       
          </li>
       
        </ul>
  
        </li>
       </ul>
       {/* ///order  */}
       <ul className='cursor-pointer'>
        <li onClick={()=>setslider(!slider)}>
            <div className='flex items-center gap-3 my-2 relative'>
            <FaSliders />
        <h1>Sliders</h1>
        <MdKeyboardArrowDown className={`absolute top-[50%] right-0 translate-y-[-50%] ${slider ? "rotate-180":"rotate-0"} duration-75`}/>
        
        </div>
        <ul>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${slider ? "block":"hidden"} `}>
         
          <FaRegDotCircle />
       <Link to={'/add-slider'}> <h1>Add Slider</h1></Link>
       
          </li>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${slider ? "block":"hidden"} `}>
         
         <FaRegDotCircle />
      <Link to={'/view-slider'}>
       <h1>View Slider</h1></Link>
      
         </li>
        </ul>
  
        </li>
       </ul>
       {/* ///slider  */}
       <ul className='cursor-pointer'>
        <li onClick={()=>setCountry(!country)}>
            <div className='flex items-center gap-3 my-2 relative'>
            <FaLocationArrow />
        <h1>Country</h1>
        <MdKeyboardArrowDown className={`absolute top-[50%] right-0 translate-y-[-50%] ${country ? "rotate-180":"rotate-0"} duration-75`}/>
        
        </div>
        <ul>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${country ? "block":"hidden"} `}>
         
          <FaRegDotCircle />
       <Link to={'/add-country'}> <h1>Add Country</h1></Link>
       
          </li>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${country ? "block":"hidden"} `}>
         
         <FaRegDotCircle />
      <Link to={'/view-country'}> <h1>View Country</h1></Link>
      
         </li>
        </ul>
  
        </li>
       </ul>
       {/* ////country  */}
       <ul className='cursor-pointer'>
        <li onClick={()=>setTestimonal(!tesimonal)}>
            <div className='flex items-center gap-3 my-2 relative'>
            <FaUserEdit />
        <h1>Testimonials</h1>
        <MdKeyboardArrowDown className={`absolute top-[50%] right-0 translate-y-[-50%] ${tesimonal ? "rotate-180":"rotate-0"} duration-75`}/>
        
        </div>
        <ul>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${tesimonal ? "block":"hidden"} `}>
         
          <FaRegDotCircle />
       <Link to={'/add-testimonals'}> <h1>Add Testimonial</h1></Link>
       
          </li>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${tesimonal ? "block":"hidden"} `}>
         
         <FaRegDotCircle />
      <Link to={'/view-testimonals'}> <h1>View Testimonial</h1></Link>
      
         </li>
        </ul>
  
        </li>
       </ul>
       {/* //testimonals  */}
       <ul className='cursor-pointer'>
        <li onClick={()=>setFaq(!faq)}>
            <div className='flex items-center gap-3 my-2 relative'>
            <FcFaq />
        <h1>Faq</h1>
        <MdKeyboardArrowDown className={`absolute top-[50%] right-0 translate-y-[-50%] ${faq ? "rotate-180":"rotate-0"} duration-75`}/>
        
        </div>
        <ul>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${faq ? "block":"hidden"} `}>
         
          <FaRegDotCircle />
       <Link to={'/add-faq'}> <h1>Add Faq</h1></Link>
       
          </li>
          <li className={`flex items-center gap-3 my-2 text-[14px] ${faq ? "block":"hidden"} `}>
         
         <FaRegDotCircle />
      <Link to={'/view-faq'}> <h1>View Faq</h1></Link>
      
         </li>
        </ul>
  
        </li>
       </ul>
       {/* faq */}
       <ul className='cursor-pointer'>
        <li onClick={()=>setTerms(!terms)}>
            <div className='flex items-center gap-3 my-2 relative'>
            <BsNewspaper />
        <h1>Terms & Conditions</h1>
        <MdKeyboardArrowDown className={`absolute top-[50%] right-0 translate-y-[-50%] ${terms ? "rotate-180":"rotate-0"} duration-75`}/>
        
        </div>
       
  
        </li>
       </ul>
       </div>
 

    </div>
  )
}
