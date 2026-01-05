import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AdminHeader() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("Cid")){
            redirect("/adminlogin")
        }
    })

    const logout = ()=>{
    localStorage.removeItem("Cid")
    localStorage.removeItem("Cname")
    toast.success("Logout successfully")
    redirect("/adminlogin")
  }

    return (
        <div>
            <div>
                {/* <!-- Topbar Start --> */}
                <div>
                    <div className="container-fluid bg-secondary top-bar wow fadeIn" data-wow-delay="0.1s">
                        <div className="row align-items-center h-100">
                            <div className="col-lg text-center text-lg-start">
                                <NavLink to="">
                                    <h1 className="display-5 text-primary text-center ">Charitize</h1>
                                </NavLink>
                            </div>
                            {/* <div className="col-lg-8 d-none d-lg-block">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="d-flex justify-content-end">
                                            <div className="flex-shrink-0 btn-square bg-primary">
                                                <i className="fa fa-phone-alt text-dark" />
                                            </div>
                                            <div className="ms-2">
                                                <h6 className="text-primary mb-0">Call Us</h6>
                                                <span className="text-white">+012 345 6789</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="d-flex justify-content-end">
                                            <div className="flex-shrink-0 btn-square bg-primary">
                                                <i className="fa fa-envelope-open text-dark" />
                                            </div>
                                            <div className="ms-2">
                                                <h6 className="text-primary mb-0">Mail Us</h6>
                                                <span className="text-white">info@domain.com</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="d-flex justify-content-end">
                                            <div className="flex-shrink-0 btn-square bg-primary">
                                                <i className="fa fa-map-marker-alt text-dark" />
                                            </div>
                                            <div className="ms-2">
                                                <h6 className="text-primary mb-0">Address</h6>
                                                <span className="text-white">123 Street, NY, USA</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* Topbar End */}
                    {/* Navbar Start */}
                    <div className="container-fluid bg-secondary px-0 wow fadeIn" data-wow-delay="0.1s">
                        <div className="nav-bar">
                            <nav className="navbar navbar-expand-lg bg-primary navbar-dark px-4 py-lg-0">
                                <h4 className="d-lg-none m-0">ADMIN DASHBOARD</h4>
                                <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarCollapse">
                                    <div className="navbar-nav me-auto">
                                        <NavLink to="/dash" className="nav-item nav-link ">DashBoard</NavLink>
                                        <div className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                                            <div className="dropdown-menu m-0">
                                                <NavLink to="/aservice" className="dropdown-item">Service</NavLink>
                                                <NavLink to="/addservice" className="dropdown-item">Add Services</NavLink>
                                            </div>
                                        </div>
                                        <div className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Donations</a>
                                            <div className="dropdown-menu m-0">
                                                <NavLink className="dropdown-item">Donate</NavLink>
                                                <NavLink className="dropdown-item">Add Donation</NavLink>
                                            </div>
                                        </div>
                                        <div className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Features</a>
                                            <div className="dropdown-menu m-0">
                                                <NavLink className="dropdown-item">Fetures</NavLink>
                                                <NavLink className="dropdown-item">Add Features</NavLink>
                                            </div>
                                        </div>
                                        <div className="nav-item dropdown">
                                            <a href="#!" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Our Team</a>
                                            <div className="dropdown-menu bg-light m-0">
                                                <NavLink className="dropdown-item">Team</NavLink>
                                                <NavLink className="dropdown-item">Add Team</NavLink>
                                            </div>
                                        </div>

                                    </div>
                                    {/* localstorege */}
                                    <div className=" d-lg-flex ms-auto">
                                        {
                                            (() => {
                                                if (localStorage.getItem("Cid")) {
                                                    return (
                                                        <button className='btn btn-dark'>{localStorage.getItem("Cname")}</button>
                                                    )
                                                }
                                            })()
                                        }
                                        {
                                            (() => {
                                                if (localStorage.getItem("Cid")) {
                                                    return (
                                                        <button onClick={logout} className='btn btn-dark mx-1'>Log-Out</button>
                                                    )
                                                }
                                            })()
                                        }

                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    {/* Navbar End */}
                </div>
            </div>
        </div>
    )
}

export default AdminHeader