import React, { useEffect, useState } from 'react'

function Fetchuser() {

    const [user, setuser] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        fetch("https://dummyjson.com/users", {
            method: "GET"
        })
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                console.log(data.users)
                setuser(data.users)
            })
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">UserName</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
               
                <tbody>
                   {
                    user && user.map((data,index)=>{
                        return(
                            <tr>
                                <td scope="row">{data.username}</td>
                                <td scope="row">{data.age}</td>
                                <td scope="row">{data.gender}</td>
                                <td scope="row">{data.birthDate}</td>
                                <td scope="row">{data.password}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

        </div>
    )
}

export default Fetchuser