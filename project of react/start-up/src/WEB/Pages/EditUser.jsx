import React, { useEffect, useState } from 'react'
import Header2 from '../Common page/Header2'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function EditUser() {

    const redirect = useNavigate()

    const [edit,setedit ] = useState({
        id:"",
        name:"",
        email:"",
        password:"",
        status:""
    })

    useEffect(()=>{
        getdata()
    },[])

    const getdata = async(e)=>{
        const res = await axios.get(`http://localhost:3000/users/${localStorage.getItem("Uid")}`)
        console.log(res.data)
        setedit(res.data)
    }

    const getchange = (e)=>{
        setedit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

    const update = async(e)=>{
        e.preventDefault()

        try {
            const res = await axios.put(`http://localhost:3000/users/${edit.id}`,edit)
            toast.success("PROFILE UPDATED ...!")
            localStorage.setItem("Uname",res.data.name)
            redirect("/")
             setedit({
                id: "",
                name: "",
                email: "",
                password: "",
                status: ""
            })

        } catch (error) {
            toast.error("DATA NOT FOUND")
        }
    }


  return (
    <div>
         <div>
            <Header2 title="PROFILE UPDATE"/>
            {/* Registration 3 - Bootstrap Brain Component */}
            <section className="p-3 p-md-4 p-xl-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mx-auto bsb-tpl-bg-lotion">
                            <div className="p-3 p-md-4 p-xl-1">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-5">
                                            <h2 className="h3">PROFILE</h2>
                                            <h3 className="fs-6 fw-normal text-secondary m-0">Enter your details to Update</h3>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={update}>
                                    <div className="row gy-3 gy-md-4 overflow-hidden">
                                        <div className="col-12">
                                            <label htmlFor="firstName" className="form-label">your Name <span className="text-danger">*</span></label>
                                            <input type="text" value={edit.name} onChange={getchange} className="form-control" name="name" id="firstName" placeholder="First Name" required />
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                            <input type="email" value={edit.email} onChange={getchange} className="form-control" name="email" id="email" placeholder="name@example.com" required />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                                            <input type="password" value={edit.password} onChange={getchange}  className="form-control" name="password" id="password" placeholder='your password' required />
                                        </div>

                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button className="btn bsb-btn-xl btn-primary" type="submit" >CLICK TO UPDATE PROFILE</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default EditUser