import React, { useEffect } from 'react'
import { Link, NavLink, redirect, useNavigate } from 'react-router'
import { toast } from 'react-toastify'

function Header() {

  const redirect = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem('Mid')){
      redirect("/login")
    }
  })

  const logout = ()=>{
    localStorage.removeItem('Mid')
    localStorage.removeItem('Mname')
    toast.success("Log-Out successfully")
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
        <NavLink to="/"  className="nav-item nav-link ">Home</NavLink>
        <NavLink to="/about"  className="nav-item nav-link">About</NavLink>
        <NavLink to="/service"  className="nav-item nav-link">Services</NavLink>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          <div className="dropdown-menu m-0">
            <NavLink to="/team"className="dropdown-item">Our Models</NavLink>
            <NavLink to="/testinomial"  className="dropdown-item">Testimonial</NavLink>
            <NavLink to="*"  className="dropdown-item">404 Page</NavLink>
          </div>
        </div>
        <NavLink to="/contact"  className="nav-item nav-link">Contact</NavLink>
      </div>
      {/* local storage  */}
      <div className=' d-flex'>
          {
            (()=>{
              if(localStorage.getItem('Mid')){
                return (
                  <button className='btn btn-dark nav-item nav-link mx-2 text-capitalize'>{localStorage.getItem('Mname')}</button>
                )
              }
            })()
          }
          {
            (()=>{
              if(localStorage.getItem('Mid')){
                return(
                     <button onClick={logout} className='btn btn-dark nav-item nav-link '>LOG-OUT</button>
                    )

              }
              else{
                <NavLink to="/login" className="nav-item nav-link">LOG-IN</NavLink>
              }

            })()
          }
      </div>
    </div>
  </nav>
  <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="title mx-5 px-5 animated slideInDown">
            <div className="title-center">
              <h5>Welcome</h5>
              <h1 className="display-1">Modeling Agency</h1>
            </div>
          </div>
          <p className="fs-5 mb-5 animated slideInDown">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.<br /> Sed erat lectus, venenatis sit amet egestas eget, aliquet a nisl.</p>
          <a href="#!" className="btn btn-outline-primary border-2 py-3 px-5 animated slideInDown">Explore
            More</a>
        </div>
      </div>
      <div className="carousel-item">
        <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="title mx-5 px-5 animated slideInDown">
            <div className="title-center">
              <h5>Welcome</h5>
              <h1 className="display-1">Modeling Agency</h1>
            </div>
          </div>
          <p className="fs-5 mb-5 animated slideInDown">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.<br /> Sed erat lectus, venenatis sit amet egestas eget, aliquet a nisl.</p>
          <a href="#!" className="btn btn-outline-primary border-2 py-3 px-5 animated slideInDown">Explore
            More</a>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

    </div>
  )
}

export default Header