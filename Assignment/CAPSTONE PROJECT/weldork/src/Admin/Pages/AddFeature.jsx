import React, { useState } from 'react'
import Aheader from '../Common/Aheader'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { featureadd } from '../../Slice/FeatureSlice'

function AddFeature() {

    const redirect = useNavigate()
    const dispatch = useDispatch()

    const [add,setadd] = useState({
        id:"",
        title: "",
        desc: "",
        img: ""
    })

    const change = (e)=>{
        setadd({
              ...add,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const submit = (e)=>{
        e.preventDefault()

        try {
            const {title,desc,img} = add
            if(title=="" || desc=="" || img==""){
                toast.error("Fill the Details")
                return false
            }

            dispatch(featureadd(add))
            redirect("/afeature")
             toast.success("Feature Added")

        } catch (error) {
           toast.error("Data not matched") 
        }
    }

  return (
    <div>
        <Aheader/>
        <h1 className='text-center my-5'>ADD FEATURES</h1>
        <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <form  className='border p-5 mt-4 bg-white text-dark'>
                            <legend>Add Features</legend>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input type="text" value={add.title} onChange={change}  name='title' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <input type="text" value={add.desc} onChange={change}  name='desc'  className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image</label>
                                <input type="text" value={add.img} onChange={change}  name='img'  className="form-control" />
                            </div>
                            <div>
                                <button onClick={submit} className="btn p-3 mx-5  btn-primary">Add Feature</button>
                                <button  onClick={()=>{redirect("/afeature")}} className="btn p-3  btn-primary">Back</button>

                            </div>
                        </form>
                    </div>

                </div>

            </div>
    </div>
  )
}

export default AddFeature