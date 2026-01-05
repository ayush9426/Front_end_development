import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import axios from 'axios'
import { toast } from 'react-toastify'

function PricePlan() {
    const [price, setprice] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/price")
        console.log(res.data)
        setprice(res.data)
    }

    const deletedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/price/${id}`)
        fetchdata()
        toast.error("deleted sucessfully..!!")
    }

    const [view, setview] = useState({
        id: "",
        Plan: "",
        price: "",
        includes: ""
    })

    const viewdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/price/${id}`)
        fetchdata()
        setview(res.data)
        toast.info("viewed sucessfully..!!")
    }

    // modal
    const [modal, setmodal] = useState(null)

    // data show
    const [edit, setedit] = useState({
        id: "",
        Plan: "",
        price: "",
        includes: ""
    })

    // open modal
    const getdata = (data) => {
        console.log(data)
        setmodal(data)
        setedit(data)
    }

    // form handling
    const getchange = (e) => {
        setedit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

    // update data
    const updatedata = async (e) => {
        e.preventDefault()


        try {
            const res = await axios.put(`http://localhost:3000/price/${edit.id}`, edit)
            fetchdata()
            setmodal(null)
            toast.success("updated sucessfully..!!")

        } catch (error) {
            console.log("api data not found",error)
        }
    }


    return (
        <div>
            <AdminHeader title="Price Plan" data="Price Details" />
            <table className="table text-center">
                <thead>
                    <tr >
                        <th scope="col">ID</th>
                        <th scope="col">PLAN</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">INCLUDES</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        price && price.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.Plan}</td>
                                    <td>{data.price}</td>
                                    <td>{data.includes}</td>
                                    <td>
                                        <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { viewdata(data.id) }}>View</button>
                                        <button className='btn btn-success mx-2' onClick={() => { getdata(data) }}>update</button>
                                        <button className='btn btn-danger' onClick={() => { deletedata(data.id) }}>delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="col-lg-10 mx-auto wow slideInUp" data-wow-delay="0.6s">
                                <div className="bg-light rounded">
                                    <div className="border-bottom py-4 px-5 mb-4">
                                        <h4 className="text-primary mb-1">{view.Plan}</h4>
                                        <small className="text-uppercase">For Small Size Business</small>
                                    </div>
                                    <div className="p-5 pt-0">
                                        <h1 className="display-5 mb-3">
                                            <small className="align-top" style={{ fontSize: 24, }}>{view.price}</small>
                                        </h1>
                                        <div className="d-flex justify-content-between mb-2">{view.includes}<i className="fa fa-check text-primary pt-1" /></div>
                                        <a href className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {
                modal && (
                    <div className="container">
                        <form>
                            <legend>ADD PLAN</legend>

                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input type="text" name='Plan' onChange={getchange} value={edit.Plan} className="form-control border-0 bg-light px-4" placeholder="ENTER PLAN" style={{ height: 55 }} />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name='price' onChange={getchange} value={edit.price} className="form-control border-0 bg-light px-4" placeholder="PRICE" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <input type="text" name='includes' onChange={getchange} value={edit.includes} className="form-control border-0 bg-light px-4" placeholder="INCLUDES" style={{ height: 55 }} />
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <button className="btn btn-primary w-100 py-3" type="submit" onClick={updatedata}>CLICK TO UPDATE PLAN</button>
                                    </div><div className="col-6">
                                        <button className="btn btn-primary w-100 py-3" type="submit" onClick={() => { setmodal(null) }}>CLICK TO CANCEL PLAN</button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                )
            }


        </div>
    )
}

export default PricePlan