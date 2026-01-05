import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AdminHeader({ title, data }) {

    const redirect = useNavigate()

   useEffect(()=>{
    if(!localStorage.getItem("AdminID")){
        redirect("/adminlogin")
    }
   },)

    const logout = ()=>{
        localStorage.removeItem("AdminID")
        localStorage.removeItem("AdminName")
        toast.info("Log-Out successfully...")
        redirect("/adminlogin")
    }

    return (
        <div>
            <div>
                <div>
                    {/* Topbar Start */}
                    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                        <div className="row gx-0">
                            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                                <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                                    <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2" />123 Street, New York, USA</small>
                                    <small className="me-3 text-light"><i className="fa fa-phone-alt me-2" />+012 345 6789</small>
                                    <small className="text-light"><i className="fa fa-envelope-open me-2" />info@example.com</small>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center text-lg-end">
                                <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-twitter fw-normal" /></a>
                                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-facebook-f fw-normal" /></a>
                                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-linkedin-in fw-normal" /></a>
                                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-instagram fw-normal" /></a>
                                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href><i className="fab fa-youtube fw-normal" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Topbar End */}
                    {/* Navbar Start */}
                    <div className="container-fluid position-relative p-0">
                        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                            <NavLink to="/dash" className="navbar-brand p-0">
                                <h1 className="m-0"><i className="fa fa-user-tie me-2" />Dashboard</h1>
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="fa fa-bars" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav ms-auto py-0">
                                    <NavLink to="/dash" className="nav-item nav-link ">Dashboard</NavLink>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Courses</a>
                                        <div className="dropdown-menu m-0">
                                            <NavLink to="/courses" className="dropdown-item">Course </NavLink>
                                            <NavLink to="/addcourse" className="dropdown-item">Add Courses</NavLink>
                                        </div>
                                    </div>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Service's</a>
                                        <div className="dropdown-menu m-0">
                                            <NavLink to="/aservice" className="dropdown-item">Services</NavLink>
                                            <NavLink to="/addservice" className="dropdown-item">Add Service</NavLink>
                                        </div>
                                    </div>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Price Plan's </a>
                                        <div className="dropdown-menu m-0">
                                            <NavLink to="/priceplan" className="dropdown-item">Plan's</NavLink>
                                            <NavLink to="/addplan" className="dropdown-item">Add Price Plan</NavLink>
                                        </div>
                                    </div>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Member's </a>
                                        <div className="dropdown-menu m-0">
                                            <NavLink to="/teamMember" className="dropdown-item">Members</NavLink>
                                            <NavLink to="/addmember" className="dropdown-item">Add Member</NavLink>
                                        </div>
                                    </div>

                                    {
                                        (()=>{
                                            if(localStorage.getItem("AdminID")){
                                                return (
                                                     <Link className="nav-link ">hello..{localStorage.getItem("AdminName")}</Link>
                                                )
                                            }
                                        })()
                                    }

                                    {
                                        (()=>{
                                            if(localStorage.getItem("AdminID")){
                                                return(
                                                    <Link onClick={logout} className="nav-link">LOG-OUT</Link>
                                                )
                                            }
                                            else{
                                                return(
                                                    <NavLink to="/adminlogin" className="nav-item nav-link">Admin-login</NavLink>
                                                )
                                            }
                                        })()
                                    }

                                     
                                    
                                </div>
                                

                            </div>
                        </nav>
                        <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: 90 }}>
                            <div className="row py-5">
                                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                                    <h1 className="display-4 text-white animated zoomIn">{title}</h1>
                                    <a href className="h5 text-white">Home</a>
                                    <i className="far fa-circle text-white px-2" />
                                    <a href className="h5 text-white">{data}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Navbar End */}
                </div>

            </div>
        </div>
    )
}

export default AdminHeader