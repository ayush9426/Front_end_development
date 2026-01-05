import React, { useState } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AddCourses() {

    const redirect = useNavigate()

    const [add,setadd] = useState({
        id:"",
        course: "",
        img: "",
        date: "",
        desc: "",
        author: "",
        title: ""
    })

    const change =(e)=>{
        setadd({
            ...add,
            // to create ID
            id: new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
    }


    const adddata = async(e)=>{
        e.preventDefault()
        redirect("/courses")
        toast.success("added successfully ...!!")

        try {
        const res = await axios.post("http://localhost:3000/courses",add)  
        setadd({
                id: "",
                course: "",
                img: "",
                date: "",
                desc: "",
                author: "",
                title: ""
        })
    } catch (error) {
        console.log("api data not found")
        
    }
    }

    

  return (
    <div>
        <AdminHeader title="ADD COURSE"/>
        <div className="container text-center">
            <form onSubmit={adddata}>
                <legend>ADD COURSE</legend>
                
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input type="text" name='author'   onChange={change} value={add.author} className="form-control border-0 bg-light px-4" placeholder="Your Name" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name='course'  onChange={change} value={add.course} className="form-control border-0 bg-light px-4" placeholder="Your Course" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-6">
                                            <input type="text" name='title'  onChange={change} value={add.title} className="form-control border-0 bg-light px-4" placeholder="Title" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-6">
                                            <input type="date" name='date'  onChange={change} value={add.date} className="form-control border-0 bg-light px-4" placeholder="Date" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12">
                                            <input type="url" name='img'  onChange={change} value={add.img} className="form-control border-0 bg-light px-4" placeholder=" Image" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12">
                                            <textarea name='desc'  onChange={change} value={add.desc} className="form-control border-0 bg-light px-4 py-3" rows={4} placeholder="Description" defaultValue={""} />
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">CLICK TO ADD COURSE</button>
                                        </div>
                                    </div>
                                </form>
        </div>
    </div>
  )
}

export default AddCourses