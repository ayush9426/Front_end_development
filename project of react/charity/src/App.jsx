import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './website/pages/Home'
import About from './website/pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './website/pages/Services'
import Donation from './website/pages/Donation'
import Events from './website/pages/Events'
import Features from './website/pages/Features'
import OurTeam from './website/pages/OurTeam'
import Testinomial from './website/pages/Testinomial'
import Contact from './website/pages/Contact'
import NotFound from './website/pages/NotFound'
import Dashboard from './ADMIN/Admin-pages/Dashboard'
import Login from './website/pages/Login'
import Asevice from './ADMIN/Admin-pages/Asevice';
import Addservice from './ADMIN/Admin-pages/Addservice';
import Editservice from './ADMIN/Admin-pages/Editservice';
import AdminLogin from './ADMIN/Admin-pages/AdminLogin';

function App() {

  // <AdminHeader/> 

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

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Services />} />
          <Route path='/donation' element={<Donation />} />
          <Route path='/event' element={<Events />} />
          <Route path='/feature' element={<Features />} />
          <Route path='/ourteam' element={<OurTeam />} />
          <Route path='/testinomial' element={<Testinomial />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />

          {/* login */}
          <Route path='/login' element={<Login />} />

          {/* admin side */}
          <Route path='/dash' element={<Dashboard />} />
          <Route path='/aservice' element={<Asevice />} />
          <Route path='/addservice' element={<Addservice />} />
          <Route path='/editservice/:id' element={<Editservice />} />

          {/* adminlogin */}
          <Route path='/adminlogin' element={<AdminLogin />} />



        </Routes>
      </div>

    </BrowserRouter>
  )

}

export default App