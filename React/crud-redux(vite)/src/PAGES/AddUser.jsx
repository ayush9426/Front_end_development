import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { adduser } from '../Slice/UserSlice'

function AddUser() {

    const [user, setuser] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
        password: "",
    })

    const change = (e) => {
        setuser({
            ...user,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch()

    const redirect = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        dispatch(adduser(user))
        redirect("/")
        setuser({
            id: "",
            name: "",
            email: "",
            phone: "",
            password: "",
        })
    }

    return (
        <div>
            <form className='container ' onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Enter your name </label>
                    <input type="text" value={user.name} name='name' onChange={change} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={user.email} name='email' onChange={change} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Enter your Number </label>
                    <input value={user.phone} name='phone' onChange={change} type="tel" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input value={user.password} name='password' onChange={change} type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Add User</button>
            </form>

        </div>
    )
}

export default AddUser