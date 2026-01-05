import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import axios from 'axios'
import { toast } from 'react-toastify'

function CourseManage() {

    const [course, setcourse] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/courses")
        console.log(res.data)
        setcourse(res.data)
    }

    // delete meethod
    const deletedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/courses/${id}`)
        fetchdata()
        toast.error("deleted successfully..!!")
    }

    const [view,setview]=useState({
        id:"",
        course: "",
        img: "",
        date: "",
        desc: "",
        author: "",
        title: ""
    })

    // to view a single api method
    const viewdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/courses/${id}`)
        fetchdata()
        setview(res.data)
        toast.info("viewed successfully...!!")
    }

    // course update on button function

    const [modalupd,setmodalupd]=useState(null)

    // to show data 
    const [edit,setedit] = useState({
        id:"",
        course: "",
        img: "",
        date: "",
        desc: "",
        author: "",
        title: ""
    })

    // to open the modal
    const opendata = (data)=>{
        setmodalupd(data)
        setedit(data)        
    }

    // handling form
    const getchange = (e)=>{
        setedit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

    // update data
    const updatedata = async(e)=>{
        e.preventDefault()

        try {
            const res = await axios.put(`http://localhost:3000/courses/${edit.id}`,edit)
            console.log(res.data)
            fetchdata()
            setmodalupd(null)
            toast.success("updated successfully...!")

        } catch (error) {
            console.log("api data not found",error)
        }
    }

    return (

        <div>
            <AdminHeader title="Course Details" data="Courses" />
            <table className="table table-dark">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">ID</th>
                        <th scope="col">COURSE</th>
                        <th scope="col">AUTHOR</th>
                        <th scope="col">TITLE</th>
                        <th scope="col">DATE</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        course && course.map((data, index) => {
                            return (
                                <tr className='text-center' key={index}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.course}</td>
                                    <td>{data.author}</td>
                                    <td>{data.title}</td>
                                    <td>{data.date}</td>
                                    <td>
                                        <button className='btn btn-outline-info'  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{viewdata(data.id)}}>View</button>
                                        <button className='btn btn-outline-success mx-2' onClick={()=>{opendata(data)}}>update</button>
                                        <button className='btn btn-outline-danger' onClick={() => { deletedata(data.id) }}>delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

            <div>
               
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                   
                                    <div className="col-md-10 mx-auto wow slideInUp" data-wow-delay="0.1s">
                                        <div className="blog-item bg-light rounded overflow-hidden">
                                            <div className="blog-img position-relative overflow-hidden">
                                                <img className="img-fluid" src={view.img} alt />
                                                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>{view.course}</a>
                                            </div>
                                            <div className="p-4">
                                                <div className="d-flex mb-3">
                                                    <small className="me-3"><i className="far fa-user text-primary me-2" />{view.author}</small>
                                                    <small><i className="far fa-calendar-alt text-primary me-2" />{view.date}</small>
                                                </div>
                                                <h4 className="mb-3">{view.title}</h4>
                                                <p>{view.desc}</p>
                                                <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
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

            {/* form for update data */}
                    {
                        modalupd && (
                            <div className="container text-center">
            <form>
                <legend>Update Course</legend>
                
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input type="text" name='author'   onChange={getchange} value={edit.author} className="form-control border-0 bg-light px-4" placeholder="Your Name" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name='course'  onChange={getchange} value={edit.course} className="form-control border-0 bg-light px-4" placeholder="Your Course" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-6">
                                            <input type="text" name='title'  onChange={getchange} value={edit.title} className="form-control border-0 bg-light px-4" placeholder="Title" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-6">
                                            <input type="date" name='date'  onChange={getchange} value={edit.date} className="form-control border-0 bg-light px-4" placeholder="Date" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12">
                                            <input type="url" name='img'  onChange={getchange} value={edit.img} className="form-control border-0 bg-light px-4" placeholder=" Image" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12">
                                            <textarea name='desc'  onChange={getchange} value={edit.desc} className="form-control border-0 bg-light px-4 py-3" rows={4} placeholder="Description" defaultValue={""} />
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                            <button className="btn btn-primary w-100 py-3" type="submit" onClick={updatedata}>CLICK TO UPDATE</button>
                                        </div>
                                        <div className="col-6">
                                            <button className="btn btn-primary w-100 py-3" type="submit" onClick={()=>{setmodalupd(null)}}>CLICK TO CANCEL</button>
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

export default CourseManage