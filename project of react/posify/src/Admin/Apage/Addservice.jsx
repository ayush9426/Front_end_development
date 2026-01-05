import React, { useState } from 'react'
import Aheader from '../Acommon/Aheader'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { adddata } from '../../slice/ServiceSlice'
import { toast } from 'react-toastify'

function Addservice() {

    const [add, setadd] = useState({
        id: "",
        title: "",
        desc: "",
        img: ""
    })

    const change = (e) => {
        setadd({
            ...add,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch()
    const redirect = useNavigate()

    const submit = (e) => {
        e.preventDefault()

        try {
            const {title,desc,img} = add
            if(title=="" || desc=="" || img=="" ){
                toast.error("Fill the details first")
                return false
            }

             dispatch(adddata(add))
        redirect("/aservice")
        
        } catch (error) {
             toast.error("API does not found")
        }
       

        
    }

    return (
        <div>
            <Aheader title="Add Service" data="Add Service" />
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <form onSubmit={submit} className='border p-5 mt-4 bg-white text-dark'>
                            <legend>Add Services</legend>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input type="text" value={add.title} name='title' onChange={change} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <input type="text" value={add.desc} name='desc' onChange={change} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image</label>
                                <input type="text" value={add.img} name='img' onChange={change} className="form-control" />
                            </div>
                            <div>
                                <button className="btn p-3 mx-5  btn-primary">Add service</button>
                                <button onClick={()=>{redirect("/aservice")}} className="btn p-3  btn-primary">Back</button>

                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Addservice