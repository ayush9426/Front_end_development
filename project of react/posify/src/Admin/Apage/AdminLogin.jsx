import axios from 'axios'
import React, { useState } from 'react'
import { redirect, useNavigate } from 'react-router'
import { toast } from 'react-toastify'

function AdminLogin() {

    const redirect = useNavigate()

    const [form,setform] = useState({
        email:"",
        password:""
    })

    const change = (e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const submit = async(e)=>{
        e.preventDefault()

        try {
            const {email,password} = form
            if(email == "" || password == ""){
                toast.error("Fill the details first")
                return false 
            }

            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
            if(res.data.length === 0){
                 toast.error("Email does not match")
            return false 
            }

            const admin = res.data[0]
            if(admin.password != password){
                toast.error("Password does not match")
                return false
            }

            localStorage.setItem("Pid",admin.id)
            localStorage.setItem("Pname",admin.name)
            toast.success("login successfully")
            redirect("/dash")
               
        } catch (error) {
            toast.error("Api NOt Found")
        }
    }

  return (
    <div>
        <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto p-5 border border-solid mt-5">
                        <form  onSubmit={submit}>
                <legend>ADMIN LOGIN FORM</legend>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={form.email} name='email' onChange={change} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={form.password} name='password' onChange={change} className="form-control" id="exampleInputPassword1" />
                </div>
                <button   className="btn btn-primary">Submit</button>
            </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AdminLogin