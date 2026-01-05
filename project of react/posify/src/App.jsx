import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes , Route } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import Testinomial from './Pages/Testinomial'
import Team from './Pages/Team'
import Error from './Pages/Error'
import Login from './Pages/Login'
import Aheader from './Admin/Acommon/Aheader';
import AdminHome from './Admin/Apage/AdminHome';
import Aservice from './Admin/Apage/Aservice';
import Addservice from './Admin/Apage/Addservice';
import Editservice from './Admin/Apage/Editservice';
import AdminLogin from './Admin/Apage/AdminLogin';

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

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/testinomial' element={<Testinomial/>} />
            <Route path='/team' element={<Team/>} />
            <Route path='*' element={<Error/>} />

            {/* login  */}
            <Route path='/login' element={<Login/>} />

            {/* admin */}
            <Route path='/dash' element={<AdminHome/>} />
            <Route path='/aservice' element={<Aservice/>} />  
            <Route path='/addservice' element={<Addservice/>} />  
            <Route path='/editservice/:id' element={<Editservice/>} />  



            <Route path='/adminlogin' element={<AdminLogin/>} />  
            



          </Routes>
        </div>

    </BrowserRouter>
  )
}

export default App