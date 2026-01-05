import React, { useState } from 'react'
import AdminHeader from '../Admin-CommonPages/AdminHeader'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { adddata } from '../../Slice/Serviceslice'

function Addservice() {

    const [add,setadd] = useState({
        id:"",
        name:"",
        description:"",
        img:""
    })

    const change = (e)=>{
        setadd({
            ...add,
            id : new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
    }

    const redirect = useNavigate()
    const dispatch = useDispatch()
    
    const submit = (e)=>{
        e.preventDefault()
        dispatch(adddata(add))
        redirect("/aservice")
    }

  return (
    <div>
        <AdminHeader/>
        <h1 className='text-center mt-4'>Add Services</h1>
        <div className="container">
                <div className="row">
                    <div className="col-8 mb-5 mx-auto">
                        <form onSubmit={submit} className='border p-5 mt-4 bg-white text-dark'>
                            <legend>Add Services</legend>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" onChange={change} value={add.name} name='name'  className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <input type="text" onChange={change} value={add.description} name='description'  className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image</label>
                                <input type="text" onChange={change} value={add.img} name='img' className="form-control" />
                            </div>
                            <div >
                                <button className="btn p-3 mx-2  btn-primary">Add service</button>
                                <button className="btn p-3  btn-primary">Back</button>

                            </div>
                        </form>
                    </div>

                </div>

            </div>
    </div>
  )
}

export default Addservice