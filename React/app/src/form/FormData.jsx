import React, { useState } from 'react'

function FormData() {

    const [name,setname] = useState("")
    const [phone,setphone] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")

    return (
        <div className="container bg-info">
                <form>
                     <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" value={name} onChange={(e)=> setname(e.target.value)} className="form-control" id="name" />
                    </div>
                     <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="tel" value={phone} onChange={(e)=> setphone(e.target.value)} className="form-control" id="phone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" value={email}  onChange={(e)=> setemail(e.target.value)} className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={password}  onChange={(e)=> setpassword(e.target.value)} className="form-control" id="password" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

        </div>
    )
}

export default FormData