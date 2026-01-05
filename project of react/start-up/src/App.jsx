import React from 'react'
import Header from './WEB/Common page/Header'
import Home from './WEB/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './WEB/Pages/About'
import Services from './WEB/Pages/Services'
import BlogGrid from './WEB/Pages/BlogGrid'
import BlogDetail from './WEB/Pages/BlogDetail'
import Price from './WEB/Pages/Price'
import Feature from './WEB/Pages/Feature'
import Team from './WEB/Pages/Team'
import Testinomials from './WEB/Pages/Testinomials'
import Quote from './WEB/Pages/Quote'
import Contact from './WEB/Pages/Contact'
import Error from './WEB/Pages/Error'
import Dashboard from './Admin/AdminPages/Dashboard'
import CourseManage from './Admin/AdminPages/CourseManage'
import AdminHeader from './Admin/AdminCommon/AdminHeader'
import AServices from './Admin/AdminPages/AServices'
import PricePlan from './Admin/AdminPages/PricePlan'
import TeamMember from './Admin/AdminPages/TeamMember'
import AddCourses from './Admin/AdminPages/AddCourses'
import AddMember from './Admin/AdminPages/AddMember'
import AddServices from './Admin/AdminPages/AddServices'
import Addpriceplan from './Admin/AdminPages/Addpriceplan'

// tostify import links
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// admin and user links 
import AdminLogin from './Admin/AdminPages/AdminLogin'
import CreateUser from './WEB/Pages/CreateUser'
import UserLogin from './WEB/Pages/UserLogin'
import EditUser from './WEB/Pages/EditUser'



function App() {

  // <AdminHeader/>

  return (
   <BrowserRouter>
   <div>

    {/* tostify  */}
    <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored" />

    <Routes> 
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/service' element={<Services/>}/>
    <Route path='/blogg' element={<BlogGrid/>}/>
    <Route path='/blogd' element={<BlogDetail/>}/>
    <Route path='/price' element={<Price/>}/>
    <Route path='/feature' element={<Feature/>}/>
    <Route path='/team' element={<Team/>}/>
    <Route path='/testinomial' element={<Testinomials/>}/>
    <Route path='/quote' element={<Quote/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<Error/>}/>

    {/* user created  */}
     <Route path='/createuser' element={<CreateUser/>}/>
     <Route path='/userlogin' element={<UserLogin/>}/>
     <Route path='/edituser' element={<EditUser/>}/>


    

    {/* Admin part */}
    <Route path='/dash' element={<Dashboard/>}/>
    <Route path='/courses' element={<CourseManage/>}/>
    <Route path='/aservice' element={<AServices/>}/>
    <Route path='/priceplan' element={<PricePlan/>}/>
    <Route path='/teamMember' element={<TeamMember/>}/>
    <Route path='/addcourse' element={<AddCourses/>}/>
    <Route path='/addmember' element={<AddMember/>}/>
    <Route path='/addservice' element={<AddServices/>}/>
    <Route path='/addplan' element={<Addpriceplan/>}/>

    {/* login  */}
    <Route path='/adminlogin' element={<AdminLogin/>}/>
   

   </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App