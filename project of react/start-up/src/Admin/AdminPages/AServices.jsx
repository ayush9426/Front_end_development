import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import axios from 'axios'
import { toast } from 'react-toastify'

function AServices() {

  const [service, setservice] = useState([])

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/services")
    // console.log(res.data)
    setservice(res.data)
  }

  const deletedata = async (id) => {
    const res = await axios.delete(`http://localhost:3000/services/${id}`)
    fetchdata()
    toast.error("deleted sucessfully..!!")
  }

  const [view, setview] = useState({
    id: "",
    img: "",
    department: "",
    description: ""
  })

  const viewdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/services/${id}`)
    fetchdata()
    setview(res.data)
    toast.info("viewed sucessfully..!!")
  }

  // update
  const [modal, setmodal] = useState(null)

  // show data
  const [edit, setedit] = useState({
    id: "",
    img: "",
    department: "",
    description: ""
  })

  // modal open

  const getdata = (data) => {
    console.log(data)
    setmodal(data)
    setedit(data)
  }

  // form handling
  const getchange = (e) => {
    setedit({
      ...edit,
      [e.target.name]: e.target.value
    })
  }

  // update
  const updatedata = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.put(`http://localhost:3000/services/${edit.id}`,edit)
      fetchdata()
      setmodal(null)
      toast.success("updated sucessfully..!!")


    } catch (error) {
      console.log("api data not found", error)
    }
  }



  return (
    <div>
      <AdminHeader title=" Services" data="services" />
      <table className="table text-center">
        <thead>
          <tr >
            <th scope="col">ID</th>
            <th scope="col">DEPARTMENT</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">IMAGE</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            service && service.map((data, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{data.id}</th>
                  <td>{data.department}</td>
                  <td>{data.description.slice(20)}...</td>
                  <td><img height="100px" width="100px" src={data.img} alt="" /></td>
                  <td>
                    <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { viewdata(data.id) }}>View</button>
                    <button className='btn btn-success mx-2' onClick={() => { getdata(data) }}>update</button>
                    <button className='btn btn-danger ' onClick={() => { deletedata(data.id) }}>delete</button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className="col-lg-10 mx-auto col-md-8 wow zoomIn" data-wow-delay="0.3s">
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="mb-3">
                    <img height="100px" width="100px" src={view.img} alt="" />
                  </div>
                  <h4 className="mb-3">{view.department}</h4>
                  <p className="m-0">{view.description}</p>
                  <a className="btn btn-lg btn-primary rounded" href>
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {
        modal && (
          <div className="container">
            <form>
              <legend>ADD SERVICES</legend>

              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" name='department' value={edit.department} onChange={getchange} className="form-control border-0 bg-light px-4" placeholder=" Department" style={{ height: 55 }} />
                </div>
                <div className="col-md-6">
                  <input type="text" name='description' value={edit.description} onChange={getchange} className="form-control border-0 bg-light px-4" placeholder="Description" style={{ height: 55 }} />
                </div>
                <div className="col-12">
                  <input type="text" name='img' value={edit.img} onChange={getchange} className="form-control border-0 bg-light px-4" placeholder="Image" style={{ height: 55 }} />
                </div>
                <div className="row">
                  <div className="col-6">
                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={updatedata}>CLICK TO UPDATE</button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={() => { setmodal(null) }}>CLICK TO CANCEL</button>
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

export default AServices