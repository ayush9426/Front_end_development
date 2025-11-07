import React from 'react'
import Header from '../comm page/Header'
import Footer from '../comm page/Footer'

function Home() {
  return (
    <div>
        <Header/>
        <h1 className='bg-primary p-5 text-light'>This is a home page </h1>
        <Footer/>
    </div>
  )
}

export default Home