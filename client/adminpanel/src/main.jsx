import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './common/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ViewUSer from './pages/ViewUSer.jsx'
import ContactEnq from './pages/ContactEnq.jsx'
import NewsSeltermana from './pages/NewsSeltermana.jsx'
import ViewColor from './pages/color/ViewColor.jsx'
import ViewMetrial from './pages/material/ViewMetrial.jsx'
import AddMatrial from './pages/material/AddMatrial.jsx'
import ViewCategory from './pages/category/ViewCategory.jsx'
import SubViewCategory from './pages/subcategory/SubViewCategory.jsx'
import SubSubViewCategory from './pages/subsubcategory/SubSubViewCategory.jsx'
import ViewWhyChooseus from './pages/whychooseus/ViewWhyChooseus.jsx'
import ViewSlider from './pages/slider/ViewSlider.jsx'
import ViewCountry from './pages/country/ViewCountry.jsx'
import ViewTestimonals from './pages/testimonials/ViewTestimonals.jsx'
import AddColor from './pages/color/AddColor.jsx'
import AddCategory from './pages/category/AddCategory.jsx'
import SubAddCategory from './pages/subcategory/SubAddCategory.jsx'
import SubSubAddCategory from './pages/subsubcategory/SubSubAddCategory.jsx'
import AddProduct from './pages/product/AddProduct.jsx'
import ViewProduct from './pages/product/ViewProduct.jsx'
import AddWhyChoose from './pages/whychooseus/AddWhyChoose.jsx'
import Orders from './pages/Orders.jsx'
import AddSlider from './pages/slider/AddSlider.jsx'
import AddCountry from './pages/country/AddCountry.jsx'
import AddTestimonials from './pages/testimonials/AddTestimonals.jsx'
import AddFaq from './pages/faq/AddFaq.jsx'
import ViewFaq from './pages/faq/ViewFaq.jsx'
import Login from './pages/Login.jsx'

let rout=createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/user',
        element:<ViewUSer/>
      },
      {
        path:'/contact-enquiry',
        element:<ContactEnq/>
      },
      {
        path:'/newsletter',
        element:<NewsSeltermana/>
       },
       {
        path:'/add-color',
        element:<AddColor/>
       },
       {
        path:'/update-color/:id?',
        element:<AddColor/>
       },
       {
        path:'/viewcolor',
        element:<ViewColor/>
       },
       {
        path:'/viewmaterial',
        element:<ViewMetrial/>
       },
       {
        path:'/addmatrial',
        element:<AddMatrial/>
       },
       {
        path:'/update-matrial/:id?',
        element:<AddMatrial/>
       },
       {
        path:'/add-category',
        element:<AddCategory/>
       },
       {
        path:'/view-category',
        element:<ViewCategory/>
       },
       {
        path:'/update-category/:id?',
        element:<AddCategory/>

       },
       {
        path:'/sub-add-category',
        element:<SubAddCategory/>
       },
       {
        path:'/sub-view-category',
        element:<SubViewCategory/>
       },
       {
        path:'/sub-sub-add-category',
        element:<SubSubAddCategory/>
       },
       {
        path:'/sub-sub-view-category',
        element:<SubSubViewCategory/>
       },
       {
        path:'/add-product',
        element:<AddProduct/>
       },
       {
        path:'/view-product',
        element:<ViewProduct/>
       },
       {
        path:'/add-why-choose-us',
        element:<AddWhyChoose/>
       },
       {
        path:'/update-why-choose-us/:id?',
        element:<AddWhyChoose/>
       },
       {
        path:'/why-choose-us',
        element:<ViewWhyChooseus/>
       },
       {
        path:'/orders',
        element:<Orders/>
       },
       {
        path:'/add-slider',
        element:<AddSlider/>
       },
        {
        path:'/update-slider/:id?',
        element:<AddSlider/>
       },
       {
        path:'/view-slider',
        element:<ViewSlider/>
       },
       {
        path:'/add-country',
        element:<AddCountry/>
       },
         {
        path:'/update-country/:id?',
        element:<AddCountry/>
       },
       {
        path:'/view-country',
        element:<ViewCountry/>
       },
        
       {
        path:'/add-testimonals',
        element:<AddTestimonials/>
       },
       {
        path:'/update-testimonials/:id?',
        element:<AddTestimonials/>
       },
       {
        path:'/view-testimonals',
        element:<ViewTestimonals/>
       },
       {
        path:'/add-faq',
        element:<AddFaq/>
       },
        {
        path:'/update-faq/:id?',
        element:<AddFaq/>
       },
       {
        path:'/view-faq',
        element:<ViewFaq/>
       },
      
    ]
   
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={rout}/>
  </StrictMode>,
)
