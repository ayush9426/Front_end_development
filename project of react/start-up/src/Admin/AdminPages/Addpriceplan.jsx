import React, { useState } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Addpriceplan() {

    const redirect = useNavigate()

    const [plan, setplan] = useState({
        id: "",
        Plan: "",
        price: "",
        includes: ""
    })

    const change = (e) => {
        setplan({
            ...plan,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const add = async (e) => {
        e.preventDefault()
        redirect("/priceplan")
         toast.success("added successfully..!!")

        try {
            const res = await axios.post("http://localhost:3000/price", plan)
            setplan({
                id: "",
                Plan: "",
                price: "",
                includes: ""
            })

        } catch (error) {
            console.log("api data is not found")
        }
    }



    return (
        <div>
            <AdminHeader title=" Add Price Plan" />
            <div className="container">
                <form onSubmit={add}>
                    <legend>ADD PLAN</legend>

                    <div className="row g-3">
                        <div className="col-md-6">
                            <input type="text" name='Plan' onChange={change} value={plan.Plan} className="form-control border-0 bg-light px-4" placeholder="ENTER PLAN" style={{ height: 55 }} />
                        </div>
                        <div className="col-md-6">
                            <input type="text" name='price' onChange={change} value={plan.price} className="form-control border-0 bg-light px-4" placeholder="PRICE" style={{ height: 55 }} />
                        </div>
                        <div className="col-12">
                            <input type="text" name='includes' onChange={change} value={plan.includes} className="form-control border-0 bg-light px-4" placeholder="INCLUDES" style={{ height: 55 }} />
                        </div>


                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit">CLICK TO ADD PLAN</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Addpriceplan