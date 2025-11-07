import React from 'react'
import Head from '../common pages/Head'
import Foot from '../common pages/Foot'

function Home() {
  return (
    
  <div>
    <Head/>
      <div>
        <h1 className='p-5 bg-danger text-dark'>This is a home page</h1>
    </div>
    <Foot/>
  </div>
  )
}

export default Home