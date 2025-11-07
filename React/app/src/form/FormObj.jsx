import React, { useState } from 'react'

function FormObj() {

    const [form, setform] = useState({  //its one type of method of function
        name: "",
        phone: "",
        email: "",
        password: ""

    })

    const getchange = (e)=>{  //it is a other and short method of function to formhandling
        setform({
            ...form,
            //name : value(name and values both the name are required to be same )
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className="container mt-5 p-3 bg-danger text-white">

            {/* it is a one type of method to write */}

            {/* <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" value={form.name} onChange={(e) => setform({ ...form, name: e.target.value })} className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setform({ ...form, phone: e.target.value })} className="form-control" id="phone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={form.email} onChange={(e) => setform({ ...form, email: e.target.value })} className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={form.password} onChange={(e) => setform({ ...form, password: e.target.value })} className="form-control" id="password" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}

            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" value={form.name} name='name' onChange={getchange} className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" value={form.phone} name='phone' onChange={getchange}  className="form-control" id="phone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={form.email} name='email' onChange={getchange}  className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={form.password} name='password'  onChange={getchange}  className="form-control" id="password" />
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

export default FormObj