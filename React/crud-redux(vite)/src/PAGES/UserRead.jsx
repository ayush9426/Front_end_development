import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readdata } from '../Slice/UserSlice'

function UserRead() {

  const {users, loading} = useSelector((data) => data.user)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(readdata())
  }, [])

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users && users.map((data, index) => {
              return (
                <tr key={index}>
                  <th>{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>
                    <button className='btn btn-info'>view</button>
                    <button className='btn btn-success mx-2'>edit</button>
                    <button className='btn btn-danger'>delete</button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>

    </div>
  )
}

export default UserRead