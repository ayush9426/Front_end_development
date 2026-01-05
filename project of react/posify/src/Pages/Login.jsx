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
            toast.error("Fill the Deatils")
            return false
           }

            const res= await axios.get(`http://localhost:3000/user?email=${email}`)
            
            if(res.data.length === 0){
                toast.error("Email does not Matched")
                return false 
            }

            const user = res.data[0]
            if(user.password != password){
                toast.error("Password does not Matched")
                return false
            }

            toast.success("login successfully")
            localStorage.setItem("Mid",user.id)
            localStorage.setItem("Mname",user.name)
            redirect("/")
            


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
                <legend>LOGIN FORM</legend>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={form.email} name='email' onChange={change} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={form.password} name='password' onChange={change} className="form-control" id="exampleInputPassword1" />
                </div>
                <button onClick={submit} type="submit" className="btn btn-primary">Submit</button>
            </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login