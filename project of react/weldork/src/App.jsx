import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Website/Pages/Home';
import About from './Website/Pages/About';
import Service from './Website/Pages/Service';
import Feature from './Website/Pages/Feature';
import Team from './Website/Pages/Team';
import Testimonial from './Website/Pages/Testimonial';
import Appointment from './Website/Pages/Appointment';
import Error from './Website/Pages/Error';
import Contact from './Website/Pages/Contact';
import Login from './Website/Pages/Login';

// admin side
import AdminDash from './Admin/Pages/AdminDash';
import Aservice from './Admin/Pages/Aservice';
import Addservice from './Admin/Pages/Addservice';
import Afeature from './Admin/Pages/Afeature';
import AddFeature from './Admin/Pages/AddFeature';
import AdminLogin from './Admin/Pages/AdminLogin';
import Ateam from './Admin/Pages/Ateam';
import AddTeam from './Admin/Pages/AddTeam';

function App() {
  return (
    <BrowserRouter>
    <div>
      {/* toastify */}
           <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored" />

  {/* routing portion */}
      <Routes>

    <Route path='/' element={<Home/>}  />
    <Route path='/about' element={<About/>}  />
    <Route path='/service' element={<Service/>}  />
    <Route path='/feature' element={<Feature/>}  />
    <Route path='/team' element={<Team/>}  />
    <Route path='/testimonial' element={<Testimonial/>}  />
    <Route path='/appointment' element={<Appointment/>}  />
    <Route path='/contact' element={<Contact/>}  />
    <Route path='*' element={<Error/>}  />


    {/* Login web */}
    <Route path='/login' element={<Login/>}  />


    {/* admin side */}
    <Route path='/dash' element={<AdminDash/>}  />
    <Route path='/aservice' element={<Aservice/>}  />
    <Route path='/addservice' element={<Addservice/>}  />
    <Route path='/afeature' element={<Afeature/>}  />
    <Route path='/addfeature' element={<AddFeature/>}  />
    <Route path='/ateam' element={<Ateam/>}  />
    <Route path='/addteam' element={<AddTeam/>}  />

{/* adminlogin */}
    <Route path='/adminlogin' element={<AdminLogin/>}  />

      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App