import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axiosuser() {

  const [user,setuser]=useState([])

  useEffect(() => {
    axiosdata()
  }, [])

  const axiosdata = async () => {
    const res = await axios.get("https://dummyjson.com/users")
    console.log(res.data.users)
    setuser(res.data.users)
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">USERNAME</th>
            <th scope="col">AGE</th>
            <th scope="col">PASSWORD</th>
            <th scope="col">ROLE</th>
          </tr>
        </thead>
        <tbody>
          {
            user && user.map((data,index)=>{
              return(
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.username}</td>
                  <td>{data.age}</td>
                  <td>{data.password}</td>
                  <td>{data.role}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default Axiosuser