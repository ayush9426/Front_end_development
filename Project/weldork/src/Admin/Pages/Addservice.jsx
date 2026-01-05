import React, { useState } from 'react'
import Aheader from '../Common/Aheader'
import { Link, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { adddata } from '../../Slice/ServiceSlice'
import { toast } from 'react-toastify'

function Addservice() {

    const redirect = useNavigate()
    const dispatch = useDispatch()

    const [add, setadd] = useState({
        id: "",
        title: "",
        img: "",
        desc: ""
    })

    const change = (e) => {
        setadd({
            ...add,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()

        try {
            const { title, desc, img } = add
            if (title == "" || desc == "" || img == "") {
                toast.error("Fill the details first")
                return false
            }

            dispatch(adddata(add))
            redirect("/aservice")
            toast.success("Service Added")

        } catch (error) {
            toast.error("Data not matched")
        }


    }

    return (
        <div>
            <Aheader />
            <h1 className='text-center'>Add Services</h1>

            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <form className='border p-5 mt-4 bg-white text-dark'>
                            <legend>Add Services</legend>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input type="text" name='title' value={add.title} onChange={change} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <input type="text" name='desc' value={add.desc} onChange={change} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image</label>
                                <input type="text" name='img' value={add.img} onChange={change} className="form-control" />
                            </div>
                            <div>
                                <button onClick={submit} className="btn p-3 mx-5  btn-primary">Add service</button>
                                <Link to="/aservice" className="btn p-3  btn-primary">Back</Link>

                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Addservice