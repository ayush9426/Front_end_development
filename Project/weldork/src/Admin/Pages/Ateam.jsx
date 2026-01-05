import React, { useEffect, useState } from 'react'
import Aheader from '../Common/Aheader'
import { useNavigate } from 'react-router'
import { teamdel, teamedit, teamread } from '../../Slice/TeamSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Ateam() {

    const redirect = useNavigate()
    const dispatch = useDispatch()

    // readpart 
    const { teams, loading } = useSelector((data) => data.team)

    useEffect(() => {
        dispatch(teamread())
    }, [])

    // edit part

    const [edit, setedit] = useState({
        id: "",
        name: "",
        post: "",
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
        dispatch(teamedit(edit))
            .then(() => {
                dispatch(teamread())
                toast.success("Feature Edited")
            })
    }

    // view part
    const [view, setview] = useState({
        id: "",
        name: "",
        post: "",
        img: ""
    })

    // to show api
    const show = (data) => {
        setview(data)
        toast.info(`Viewing: ${data.name}`)
    }

    return (
        <div>
            <Aheader />
            <div className="position-relative my-4">
                {/* Center Title */}
                <h1 className="text-center mb-0">TeamMember Section</h1>
                {/* Right Button */}
                <button onClick={() => { redirect("/addteam") }} className="btn btn-outline-primary position-absolute top-50 end-0 translate-middle-y mx-2 px-3"> + Add Member</button>
            </div>

            <div className="container">
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">IMAGE</th>
                            <th scope="col">NAME</th>
                            <th scope="col">TITLE</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(teams) && teams.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{data?.id}</th>
                                        <td><img height="150px" width="180px" src={data?.img} alt="" /></td>
                                        <td>{data?.name}</td>
                                        <td>{data?.post}</td>
                                        <td>

                                            {/* view button */}
                                            <button onClick={() => show(data)} data-bs-toggle="modal" data-bs-target="#viewModal" className='btn btn-outline-info'>VIEW</button>


                                            {/* edit button */}
                                            <button className='btn btn-outline-success mx-2' data-bs-toggle="modal" data-bs-target="#editModal"
                                                onClick={() => {
                                                    const singleUser = teams.filter(item => item.id === data.id)
                                                    setedit(singleUser[0])
                                                }}
                                            >EDIT</button>

                                            {/* delete button */}
                                            <button className='btn btn-outline-danger'
                                                onClick={() => {
                                                    dispatch(teamdel(data.id))
                                                        .then(() => {
                                                            dispatch(teamread())
                                                            toast.error("Member Deleted")
                                                        })
                                                }} >DELETE</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                {/* editdata with modal */}

                {/* Modal */}
                <div className="modal fade" id="editModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Member</h1>
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
                                                    <label className="form-label">Name</label>
                                                    <input type="text" name='name' value={edit.name} onChange={change} className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Post</label>
                                                    <input type="text" name='post' value={edit.post} onChange={change} className="form-control" />
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
                                <div className="text-center  wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="team-item">
                                        <div className="">
                                            <img  width="300px" height="250px" src={view.img} alt={view.name} />
                                        </div>
                                        <div className="text-center p-4">
                                            <h5 className="mb-1">{view.name}</h5>
                                            <span>{view.post}</span>
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

export default Ateam