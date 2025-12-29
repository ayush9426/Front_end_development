import React, { useEffect, useState } from 'react'
import Aheader from '../Common/Aheader'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { featuredel, featureedit, featureread, } from '../../Slice/FeatureSlice'
import { toast } from 'react-toastify'
// import {  } from '../../Slice/ServiceSlice'

function Afeature() {

    const redirect = useNavigate()
    const dispatch = useDispatch()

    const { features, loading } = useSelector((data) => data.feature)

    useEffect(() => {
        dispatch(featureread())
    }, [])

    // edit part

    const [edit, setedit] = useState({
        id: "",
        title: "",
        desc: "",
        img: ""
    })

    const change = (e) => {
        setedit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        dispatch(featureedit(edit))
            .then(() => {
                dispatch(featureread())
                toast.success("Feature Edited")

            })

    }

    // view part
    const [view, setview] = useState({
        id: "",
        title: "",
        desc: "",
        img: ""
    })

    // to show api
    const show = (data) => {
        setview(data)
        toast.info(`Viewing: ${data.title}`)
    }

    return (
        <div>
            <Aheader />
            <div className="position-relative my-4">
                {/* Center Title */}
                <h1 className="text-center mb-0">Features Section</h1>
                {/* Right Button */}
                <button onClick={()=>{redirect("/addfeature")}} className="btn btn-outline-primary position-absolute top-50 end-0 translate-middle-y mx-2 px-3"> + Add Feature</button>
            </div>


            <div className="container">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">IMAGE</th>
                            <th scope="col">TITLE</th>
                            <th scope="col">DESCRIPTION</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(features) && features.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{data?.id}</th>
                                        <td><img height="150px" width="200px" src={data?.img} alt="" /></td>
                                        <td>{data?.title}</td>
                                        <td>{data?.desc.slice(0, 10)}...</td>
                                        <td>
                                            {/* view button */}
                                            <button onClick={() => show(data)} data-bs-toggle="modal" data-bs-target="#viewModal" className='btn btn-outline-info'>VIEW</button>

                                            {/* edit button */}
                                            <button className='btn btn-outline-success mx-2' data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                onClick={() => {
                                                    const singleUser = features.filter(item => item.id === data.id)
                                                    setedit(singleUser[0])
                                                }}
                                            >EDIT</button>

                                            {/* delete button */}
                                            <button
                                                className='btn btn-outline-danger'
                                                onClick={() => {
                                                    dispatch(featuredel(data.id))
                                                        .then(() => {
                                                            dispatch(featureread())
                                                            toast.error("Feature Deleted")
                                                        })
                                                }}>DELETE</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>


                {/* editdata with modal */}

                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Features</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {/*  edit form */}
                                <div className="container">
                                    <div className="row">
                                        <div className=" mx-auto">
                                            <form className='border border-dark p-5 my-2 bg-white text-dark'>
                                                {/* <legend>Edit Services</legend> */}
                                                <div className="mb-3">
                                                    <label className="form-label">Title</label>
                                                    <input type="text" name='title' value={edit.title} onChange={change} className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Description</label>
                                                    <input type="text" name='desc' value={edit.desc} onChange={change} className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Image</label>
                                                    <input type="text" name='img' value={edit.img} onChange={change} className="form-control" />
                                                </div>
                                            </form>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={submit} data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* viewdata with modal */}

                {/* Modal */}
                <div className="modal fade" id="viewModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">View Service</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {/* viewdata moadl */}
                                <div className=" text-center wow fadeIn" data-wow-delay="0.3s">
                                    <div className="feature-item border h-100">
                                        <div className="my-2">
                                            <img height="200px" width="250px" src={view.img}  />
                                        </div>
                                        <div className="p-5 pt-0">
                                            <h5 className="text-uppercase mb-3">{view.title}</h5>
                                            <p>{view.desc.slice(0, 30)}....</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Afeature