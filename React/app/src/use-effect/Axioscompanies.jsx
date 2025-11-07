import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axioscompanies() {

    const [comp,setcomp]=useState([])

    useEffect(() => {
        axiosdata()
    }, [])

    const axiosdata = async () => {
        const res = await axios.get("https://fake-json-api.mock.beeceptor.com/companies")
        console.log(res.data)
        setcomp(res.data)
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">INDUSTRY</th>
                        <th scope="col">COUNTRY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        comp && comp.map((data,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.industry}</td>
                                    <td>{data.country}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Axioscompanies