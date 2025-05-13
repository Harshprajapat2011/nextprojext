import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Leftslidebar from '../pages/Leftslidebar'
import Dashboard from '../pages/Dashboard'
import ViewUSer from '../pages/ViewUSer'
import ContactEnq from '../pages/ContactEnq'

export default function Layout() {
  return (
    <>
    <div className='grid grid-cols-[20%_auto]'>
        <div className='p-4 border border-2 overflow-y-scroll h-screen self-start'>
           <Leftslidebar/>
         
        </div>
        <div>
   
           
        <Header/>
        <Outlet/> 





        </div>

    </div>
        {/* <Header/>
        <Outlet/> */}
    </>
  )
}
