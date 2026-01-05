import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editdata } from '../../Slice/Serviceslice'

function Editservice() {

    const { id } = useParams()

    const dispatch = useDispatch()
    const redirect = useNavigate()

     const { services, loading } = useSelector((data, index) => data.service)


    const [edit,setedit] = useState({
        id:"",
        name: "",
        description: "",
        img: ""
    })

    
    useEffect(()=>{
        const singleuser = services.filter((data,index)=>data.id === id)
        setedit(singleuser[0])
    },[])

    const change = (e)=>{
        setedit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

    const submit = (e)=>{
        e.preventDefault()
        redirect("/aservice")
        dispatch(editdata(edit))
        
    }

  return (
    <div>
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <form className='border p-5 mt-4 bg-white text-dark'>
                            <legend>Edit Services</legend>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" name='name' value={edit.name} onChange={change}  className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <input type="text" name='description' value={edit.description} onChange={change} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image</label>
                                <input type="text"  name='img' value={edit.img} onChange={change}  className="form-control" />
                            </div>
                            <div>
                                <button onClick={submit} className="btn p-3 mx-5  btn-primary">Edit service</button>
                                <button onClick={() => {redirect("/aservice")}} className="btn p-3  btn-primary">Back</button>

                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
  )
}

export default Editservice