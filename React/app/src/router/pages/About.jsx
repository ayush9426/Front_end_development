import React from 'react'
import Head from '../common pages/Head'
import Foot from '../common pages/Foot'
import { Link, Outlet, useNavigate } from 'react-router'

function About() {

    const redirect = useNavigate()

    const about2 = ()=>{
        redirect("/ about/about2")
    }



    return (
        <div>
            <Head/>
            <h1 className='p-5 text-center bg-warning text-dark'>This is a about page</h1>
            <Link to="/about/about1" className='btn btn-success m-2'>ABOUT1</Link>
            <Link to="/about/about2" className='btn btn-info m-2'>ABOUT2</Link>
            <Outlet />
        <Foot/>
        </div>
    )
}

export default About