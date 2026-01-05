import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { toast } from 'react-toastify'

function Aheader() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("WeldId")){
            redirect("/adminlogin")
        }
    })

    const logout = ()=>{
        localStorage.removeItem("WeldId")
        localStorage.removeItem("WeldName")
        toast.success("Log-Out succesfully...")
        redirect("/adminlogin")
    }



  return (
   <div>
            <div>
                {/* Topbar Start */}
                <div className="container-fluid bg-primary text-white d-none d-lg-flex wow fadeIn" data-wow-delay="0.1s">
                    <div className="container py-3">
                        <div className=" text-center">
                            <a href="index.html">
                                <h2 className="text-white  fw-bold m-0">WELDORK ADMIN PANEL</h2>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Topbar End */}

                {/* Navbar Start */}
                <div className="container-fluid bg-white sticky-top wow fadeIn" data-wow-delay="0.1s">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
                            <a href="index.html" className="navbar-brand d-lg-none">
                                <h1 className="fw-bold m-0">WELDORK</h1>
                            </a>
                             {/* localstorage */}
                            <div className='d-flex'>
                                {
                                    (()=>{
                                        if(localStorage.getItem("WeldId")){
                                            return (
                                                <button   className='btn btn-dark'>{localStorage.getItem("WeldName")}</button>
                                            )
                                        }
                                    })()
                                }
                                {
                                    (()=>{
                                        if(localStorage.getItem("WeldId")){
                                            return(
                                                <button onClick={logout} className='btn btn-dark mx-2'>LOG-OUT</button>
                                            )
                                        }
                                    })()
                                }
                                </div> 
                            <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav">
                                    <NavLink to="/dash" className="nav-item nav-link ">Dashboard</NavLink>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                                        <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                            <NavLink to="/aservice" className="dropdown-item">Services</NavLink>
                                            <NavLink to="/addservice" className="dropdown-item">Add Services</NavLink>
                                        </div>
                                    </div>

                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Features</a>
                                        <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                            <NavLink to="/afeature" className="dropdown-item">Features</NavLink>
                                            <NavLink to="/addfeature" className="dropdown-item">Add Features</NavLink>
                                        </div>
                                    </div>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Team Member</a>
                                        <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                            <NavLink to="/ateam" className="dropdown-item">Team</NavLink>
                                            <NavLink to="/addteam" className="dropdown-item">Add Member</NavLink>
                                        </div>
                                    </div>



                                </div>

        {/* localstorage */}

        {/* <div className='d-flex'>
            {
                (()=>{
                    if(localStorage.getItem("Wid")){
                        return(
                            <button className='btn btn-dark nav-item nav-link mx-2 text-capitalize'>{localStorage.getItem("Wname")}</button>
                        )
                    }
                })()
            }
            {
                (()=>{
                    if(localStorage.getItem("Wid")){
                        return(
                            <button onClick={logout} className='btn btn-dark nav-item nav-link'>LOG-OUT</button>
                        )
                    }
                })()
            }
        </div> */}

                                
                            </div>
                        </nav>
                    </div>
                </div>
                {/* Navbar End */}
            </div>

        </div>
  )
}

export default Aheader