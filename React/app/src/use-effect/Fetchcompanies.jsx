import React, { useEffect, useState } from 'react'

function Fetchcompanies() {
    const [companies,setcompanies]=useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        fetch("https://fake-json-api.mock.beeceptor.com/companies", {
            method: "GET"
        })
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                console.log(data)
                setcompanies(data)
            })
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">CEO_NAME</th>
                        <th scope="col">INDUSTRY</th>
                        <th scope="col">NAME</th>
                        <th scope="col">COUNTRY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        companies&&companies.map((data,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td>{data.ceoName}</td>
                                    <td>{data.industry}</td>
                                    <td>{data.name}</td>
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

export default Fetchcompanies