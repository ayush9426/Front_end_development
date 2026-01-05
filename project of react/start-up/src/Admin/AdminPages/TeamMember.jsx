import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import axios from 'axios'
import { toast } from 'react-toastify'

function TeamMember() {
    const [team, setteam] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/teamMember")
        console.log(res.data)
        setteam(res.data)
    }

    const deletedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/teamMember/${id}`)
        fetchdata()
        toast.error("deleted sucessfully..!!")
    }

    const [view, setview] = useState({
        id: "",
        name: "",
        position: "",
        department: "",
        img: ""
    })

    const viewdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/teamMember/${id}`)
        fetchdata()
        setview(res.data)
        toast.info("viewed sucessfully..!!")
    }

    // modal
    const [modal,setmodal] = useState(null)

    // show data
    const [edit,setedit] = useState({
         id: "",
        name: "",
        position: "",
        department: "",
        img: ""
    })

    // open modal
    const getdata = (data)=>{
        console.log(data)
        setmodal(data)
        setedit(data)
    }

    // from handling
    const getchange = (e)=>{
        setedit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

    // update
    const updatedata = async(e)=>{
        e.preventDefault()

        try {
            const res = await axios.put(`http://localhost:3000/teamMember/${edit.id}`,edit)
            fetchdata()
            setmodal(null)
            toast.success("updated sucessfully..!!")

        } catch (error) {
            console.log("api data not found",error)
        }
    }


    return (
        <div>
            <AdminHeader title="Our Team" data="Members" />
            <table className="table text-center">
                <thead>
                    <tr >
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">DEPARTMENT</th>
                        <th scope="col">POSITION</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        team && team.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.name}</td>
                                    <td>{data.department}</td>
                                    <td>{data.position}</td>
                                    <td>
                                        <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{viewdata(data.id)}}>View</button>
                                        <button className='btn btn-success mx-2'onClick={()=>{getdata(data)}}>update</button>
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
                            <div height="200px" className="col-lg-10 mx-auto wow slideInUp" data-wow-delay="0.3s">
                                <div className="team-item bg-light rounded overflow-hidden">
                                    <div className="team-img position-relative overflow-hidden">
                                        <img className="img-fluid " src={view.img} alt />
                                        <div className="team-social">
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-twitter fw-normal" /></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-facebook-f fw-normal" /></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-instagram fw-normal" /></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-linkedin-in fw-normal" /></a>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <h4 className="text-primary">{view.name}</h4>
                                        <p className="text-uppercase m-0">{view.position}</p>
                                        <p className="text-uppercase m-0">{view.department}</p>
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
                <legend>ADD MEMBER</legend>
                
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input type="text" onChange={getchange} name='name' value={edit.name} className="form-control border-0 bg-light px-4" placeholder=" Name" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" onChange={getchange} name='department' value={edit.department}  className="form-control border-0 bg-light px-4" placeholder="Department" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-6">
                                            <input type="text" onChange={getchange} name='position' value={edit.position}  className="form-control border-0 bg-light px-4" placeholder="Position" style={{ height: 55 }} />
                                        </div>
                                        
                                        <div className="col-6">
                                            <input type="url" onChange={getchange} name='img' value={edit.img}  className="form-control border-0 bg-light px-4" placeholder=" Image" style={{ height: 55 }} />
                                        </div>
                                       
                                       <div className="row mt-5 mb-4">
                                         <div className="col-6">
                                            <button className="btn btn-primary w-100 py-3" type="submit" onClick={updatedata}>CLICK TO UPDATE MEMBER</button>
                                        </div> <div className="col-6">
                                            <button className="btn btn-primary w-100 py-3" type="submit" onClick={()=>{setmodal(null)}}>CLICK TO CANCEL MEMBER</button>
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

export default TeamMember