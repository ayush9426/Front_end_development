import React from 'react'
import { useNavigate } from 'react-router'

function Error() {
    const redirect = useNavigate()

    const back = ()=>{
        redirect("/")
    }
  return (
    <div className='text-center'>
        <h1 className='text-danger'>Error, 404 not found</h1>
        <button onClick={back} className='btn btn-outline-danger'>BACK</button>
    </div>
  )
}

export default Error