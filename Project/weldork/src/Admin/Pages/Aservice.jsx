import React, { useEffect, useState } from 'react'
import Aheader from '../Common/Aheader'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { deletedata, editdata, readdata } from '../../Slice/ServiceSlice'
import { toast } from 'react-toastify'

function Aservice() {


    const redirect = useNavigate()
    const dispatch = useDispatch()

    // readdata part
    const { services, loading } = useSelector((data) => data.service)

    useEffect(() => {
        dispatch(readdata())
    }, [])



    // editpart

    // this line is also use in edit funcationality but it is write one time in one coponent so i  write once for readdata so it is usable
    // const { services, loading } = useSelector((data) => data.service)

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
        dispatch(editdata(edit)).then(() => {
            toast.success("Service Edited")
            dispatch(readdata())
        })
    }


    // viewpart

    const [view,setview] = useState({
        id:"",
        title:"",
        desc:"",
        img:""
    })

    // to show API on modal 
    const show = (data)=>{
        setview(data)
         
    }






    return (
        <div>
            <Aheader />
            <h1 className='text-center mt-5'>Services section</h1>

            <div className="container">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(services) && services.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{data?.id}</th>
                                        <td><img height="120px" width="120px" src={data?.img} alt="" /></td>
                                        <td>{data?.title}</td>
                                        <td>{data?.desc}</td>
                                        <td>
                                            {/* View button with functionality */}
                                            <button onClick={()=>show(data)} data-bs-toggle="modal" data-bs-target="#viewModal" className='btn btn-outline-info'>View</button>

                                            {/* edit button with functionality */}
                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-outline-success mx-2' onClick={() => {
                                                const singleUser = services.filter(item => item.id === data.id)
                                                setedit(singleUser[0])
                                            }}
                                            >Edit</button>

                                            {/* delte button with functionality */}
                                            <button
                                                className="btn btn-outline-danger"
                                                onClick={() => {
                                                    dispatch(deletedata(data.id)).then(() => {
                                                        toast.error("Service Deleted")
                                                        dispatch(readdata())
                                                    })
                                                }}
                                            >Delete</button>

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
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Services</h1>
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
                                <div className="col-lg-12 col-md-6 wow fadeInUp mx-auto" data-wow-delay="0.1s">
                                    <div className="service-item">
                                        <div className="col-6 mx-auto p-3">
                                                <div className="blog-img mx-auto position-relative overflow-hidden">
                                                    <img width="200px" height="200px" className="mx-auto" src={view.img} />
                                                </div>
                                            </div>
                                        <div className="p-4">
                                                <h4 className="mb-3 text-center text-capitalize">{view.title.slice(0,15)}..</h4>
                                                <p className='ms-3 f-6'>
                                                    {view.desc.slice(0,40)}...
                                                </p>
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

export default Aservice