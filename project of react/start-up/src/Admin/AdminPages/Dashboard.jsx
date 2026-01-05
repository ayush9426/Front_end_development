import React from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'

function Dashboard() {
  return (
    <div>
        <AdminHeader title="Dashboard" data="Dashboard" />
        <h1 className='text-center'>This is a Dashboard page.</h1>   
    </div>
  )
}

export default Dashboard