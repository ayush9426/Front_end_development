import React, { useState } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AddMember() {

    const redirect = useNavigate()

    const [team,setteam] = useState({
        id:"",
        name:"",
        position:"",
        department:"",
        img:""

    })

    const change = (e)=>{
        setteam({
            ...team,
            id: new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
    }

    const adddata = async(e)=>{
        e.preventDefault()
        redirect("/teamMember")
        toast.success("added successfully..!!")

        try {
            const res = await axios.post("http://localhost:3000/teamMember",team)
            setteam({
                id:"",
                name:"",
                position:"",
                department:"",
                img:""
            })

        } catch (error) {
            console.log("api data not found")
            
        }
    }


  return (
    <div>
        <AdminHeader title="Team Details"/>
        <div className="container">
            <form onSubmit={adddata}>
                <legend>ADD MEMBER</legend>
                
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input type="text" onChange={change} name='name' value={team.name} className="form-control border-0 bg-light px-4" placeholder=" Name" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" onChange={change} name='department' value={team.department}  className="form-control border-0 bg-light px-4" placeholder="Department" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-6">
                                            <input type="text" onChange={change} name='position' value={team.position}  className="form-control border-0 bg-light px-4" placeholder="Position" style={{ height: 55 }} />
                                        </div>
                                        
                                        <div className="col-6">
                                            <input type="url" onChange={change} name='img' value={team.img}  className="form-control border-0 bg-light px-4" placeholder=" Image" style={{ height: 55 }} />
                                        </div>
                                       
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">CLICK TO ADD MEMBER</button>
                                        </div>
                                    </div>
                                </form>
        </div>

    </div>
  )
}

export default AddMember