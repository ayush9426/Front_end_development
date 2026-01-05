import React, { useState } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AddServices() {

    const redirect = useNavigate()    

    const [service, setservice] = useState({
        id: "",
        img: "",
        department: "",
        description: ""
    })

    const change = (e) => {
        setservice({
            ...service,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const add = async (e) => {
        e.preventDefault()
        redirect("/aservice")
         toast.success("added successfully..!!")

        try {
            const res = await axios.post("http://localhost:3000/services", service)
            setservice({
                id: "",
                img: "",
                department: "",
                description: ""
            })
        } catch (error) {
            console.log("api data not found")

        }
    }

    return (
        <div>
            <AdminHeader title="ADD SERVICES" />
            <div className="container">
                <form onSubmit={add}>
                    <legend>ADD SERVICES</legend>

                    <div className="row g-3">
                        <div className="col-md-6">
                            <input type="text" name='department' value={service.department} onChange={change} className="form-control border-0 bg-light px-4" placeholder=" Department" style={{ height: 55 }} />
                        </div>
                        <div className="col-md-6">
                            <input type="text" name='description' value={service.description} onChange={change} className="form-control border-0 bg-light px-4" placeholder="Description" style={{ height: 55 }} />
                        </div>
                        <div className="col-12">
                            <input type="text" name='img' value={service.img} onChange={change} className="form-control border-0 bg-light px-4" placeholder="Image" style={{ height: 55 }} />
                        </div>



                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit">CLICK TO ADD SERVICE</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddServices