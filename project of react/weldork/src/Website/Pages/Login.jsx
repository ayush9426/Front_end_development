import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

function Login() {

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
            if(email=="" || password==""){
                toast.error("Fill the details first")
                return false
            }

            const res = await axios.get(`http://localhost:3000/login?email=${email}`)

            if(res.data.length === 0){
                toast.error("Email deos not match")
                return false
            }

            const login = res.data[0]
            if(login.password != password){
                toast.error("Password does not match")
                return false
            }

            toast.success("Log-In successfully...")
            redirect("/")
            localStorage.setItem("Wid",login.id)
            localStorage.setItem("Wname",login.name)

        } catch (error) {
            toast.error("API does not found")
        }
    }


  return (
     <div>
            <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto p-5 border border-solid mt-5">
                        <form>
                <legend>WEBSITE LOGIN FORM</legend>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' value={form.email} onChange={change} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password"  name='password' value={form.password} onChange={change}  className="form-control" id="exampleInputPassword1" />
                </div>
                <button onClick={submit}  type="submit" className="btn btn-primary">Submit</button>
            </form>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Login