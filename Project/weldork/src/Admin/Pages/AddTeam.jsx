import React, { useState } from 'react'
import Aheader from '../Common/Aheader'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { teamadd } from '../../Slice/TeamSlice'

function AddTeam() {

    const redirect = useNavigate()
    const dispatch = useDispatch()

    // addpart
        const [add, setadd] = useState({
            id: "",
            name: "",
            post: "",
            img: ""
        })
    
        const change = (e) => {
            setadd({
                ...add,
                id: new Date().getTime().toString(),
                [e.target.name]: e.target.value
            })
        }
    
        const submit = (e) => {
            e.preventDefault()
    
            try {
                const { post, name, img } = add
                if (name == "" || post == "" || img == "") {
                    toast.error("Fill the Details")
                    return false
                }
    
                dispatch(teamadd(add))
                redirect("/ateam")
                toast.success("Member Added")
    
            } catch (error) {
                toast.error("Data not matched")
            }
        }


    return (
        <div>
            <Aheader/>
           <h1 className='text-center my-3x'>ADD Member</h1>
        <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <form  className='border p-5 mt-4 bg-white text-dark'>
                            <legend>Add Member</legend>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" value={add.name} onChange={change}  name='name' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Post</label>
                                <input type="text" value={add.post} onChange={change}  name='post'  className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image</label>
                                <input type="text" value={add.img} onChange={change}  name='img'  className="form-control" />
                            </div>
                            <div>
                                <button onClick={submit} className="btn p-3 mx-5  btn-primary">Add Feature</button>
                                <button  onClick={()=>{redirect("/ateam")}} className="btn p-3  btn-primary">Back</button>

                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AddTeam