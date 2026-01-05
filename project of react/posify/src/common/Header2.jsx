import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import { toast } from 'react-toastify'

function Header2({title,data}) {

  const redirect = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem("Mid")){
      redirect("/login")
    }
  })

  const logout = ()=>{
    localStorage.removeItem("Mid")
    localStorage.removeItem("Mname")
    toast.success("Successfully logout")
    redirect("/login")
  }

    return (
        <div>
        {/* Header Start */}
<div className="container-fluid p-0">
  <nav className="navbar navbar-expand-lg navbar-dark px-lg-5">
    <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
      <h2 className="mb-0 text-primary text-uppercase"><i className="fa-regular fa-face-smile me-1" />Poseify</h2>
    </a>
    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav mx-auto p-4 p-lg-0">
        <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
        <NavLink to="/about"  className="nav-item nav-link">About</NavLink>
        <NavLink to="/service"  className="nav-item nav-link">Services</NavLink>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          <div className="dropdown-menu m-0">
            <NavLink to="/team"  className="dropdown-item">Our Models</NavLink>
            <NavLink to="/testinomial"  className="dropdown-item">Testimonial</NavLink>
            <NavLink to="*"  className="dropdown-item">404 Page</NavLink>
          </div>
        </div>
        <NavLink to="/contact"  className="nav-item nav-link">Contact</NavLink>
      </div>

      {/* localstorage */}
      <div className='d-flex'>
        {
          (()=>{
            if(localStorage.getItem("Mid")){
              return(
                <button className='btn btn-dark nav-item nav-link mx-2 text-capitalize'>{localStorage.getItem('Mname')}</button>
              )
            }
          })()
        }
        {
          (()=>{
            if(localStorage.getItem("Mid")){
              return(
                     <button onClick={logout} className='btn btn-dark nav-item nav-link '>LOG-OUT</button>
                    )
            }
          })()
        }
      </div>
      
    </div>
  </nav>
  <div className="page-header pb-5">
    <div className="container text-center py-5">
      <h1 className="display-4 text-uppercase mb-3 animated slideInDown">{title}</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center text-uppercase mb-0">
          <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
          <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
          <li className="breadcrumb-item text-primary active" aria-current="page">{data}</li>
        </ol>
      </nav>
    </div>
  </div>
</div>
{/* Header End */}

        </div>
    )
}

export default Header2