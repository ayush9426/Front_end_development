import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axioscard() {

    const [card,setcard]=useState([])

    useEffect(() => {
        axiosdata()
    }, [])

    const axiosdata = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        console.log(res.data)
        setcard(res.data)
    }
    return (
        <div className="container">
            <div className="row">
                {
                    card && card.map((data, index) => {
                        return (
                            <div key={index} className="col-md-4">
                                <div className="card" style={{ height: '100%' }}>
                                    <img src={data.image} style={{ height: '70%' }} className="card-img-top"  alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.id}</h5>
                                        <h5 className="card-title">{data.title}</h5>
                                        <p className="card-text">{data.description.slice(0,80)}...</p>
                                        <a href="#" className="btn btn-primary">BUY</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Axioscard