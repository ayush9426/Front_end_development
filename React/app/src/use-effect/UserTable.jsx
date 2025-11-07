// useEffect(callback,optional)
// logic 
// useEffect :- Function side Effect + Reder Effect 
// useEFfect :- without,with,array 



import React, { useEffect, useState } from 'react'

function UserTable() {

  const [user,setuser]=useState([])

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET"
    })
      .then((data) => {
        return data.json()
      })
      .then((data) => {
        // console.log(data)
        setuser(data)
      })
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">PHONE</th>
            <th scope="col">CITY</th>
          </tr>
        </thead>
        <tbody>
          {
            user && user.map((data,index)=>{
              // console.log(data)
               return(
                <tr key={index}>
                  <th>{data.id}</th>
                  <th>{data.name}</th>
                  <th>{data.email}</th>
                  <th>{data.phone}</th>
                  <th>{data.address.city}</th>
                </tr>
            )
            })
           
          }
        </tbody>
      </table>

    </div>
  )
}

export default UserTable