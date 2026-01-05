import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import { useDispatch, useSelector } from 'react-redux'
import { deletedata, readdata } from '../../slice/ServiceSlice'
import { useNavigate } from 'react-router'

function Aservice() {

   const {services,loading} = useSelector((data)=>data.Service)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readdata())
    },[])

    const redirect = useNavigate()

    // view part button and modal
// view
    const [view,setview] = useState({
        id:"",
        title:"",
        desc:"",
        img:""
    })

    // show
    const show = (data)=>{
        setview(data)
    }



    return (
        <div>
            <Aheader title="Services" data="Our services" />
            <div className="container">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
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
                                        <td>{data?.id}</td>
                                        <td><img height="150px" width="150px" src={data?.img} alt="" /></td>
                                        <td>{data?.title.slice(0,10)}...</td>
                                        <td>{data?.desc.slice(0,10)}...</td>
                                        <td>
                                         <button className='btn btn-outline-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>show(data)}>view</button>
                                        <button className='btn btn-outline-success mx-2' onClick={()=>{redirect(`/editservice/${data?.id}`)}}>edit</button>
                                        <button className='btn btn-outline-danger' onClick={()=>{dispatch(deletedata(data.id)).then(()=>{dispatch(readdata())})}}>delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

                {/* modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark"  id="exampleModalLabel">View Service</h1>
                                <button className="modal-title fs-5 text-dark mx-2 btn btn-outline-dark"  id="exampleModalLabel">ID:-</button>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="col-md-10 mx-auto wow slideInUp" data-wow-delay="0.1s">
                                    <div className="blog-item bg-dark rounded overflow-hidden">
                                        <div className="row">
                                            <div className="col-6 mx-auto p-3">
                                                <div className="blog-img mx-auto position-relative overflow-hidden">
                                                    <img width="200px" height="200px" className="mx-auto" src={view.img} alt />
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h4 className="mb-3 text-center text-capitalize">{view.title.slice(0,15)}..</h4>
                                                <h3 className='ms-3 f-6'>
                                                    {view.desc.slice(0,20)}...
                                                </h3>
                                            </div>
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

            </div>


        </div>
    )
}

export default Aservice