import React, { useEffect, useState } from 'react'

function Fetchproduct() {

    const [product,setproduct]=useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        fetch("https://dummyjson.com/products", {
            method: "GET"
        })
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                console.log(data.products)
                setproduct(data.products)
            })
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">TITLE</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">BRAND</th>
                        <th scope="col">STOCK</th>
                    </tr>
                </thead>
                
                <tbody>
                        {
                    product && product.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td scope="row">{data.id}</td>
                                <td scope="row">{data.title}</td>
                                <td scope="row">{data.price}</td>
                                <td scope="row">{data.brand}</td>
                                <td scope="row">{data.availabilityStatus}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

        </div>
    )
}

export default Fetchproduct