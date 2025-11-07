import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axioscart() {

    const [cart, setcart] = useState([])

    useEffect(() => {
        axiosdata()
    }, [])

    const axiosdata = async () => {
        const res = await axios.get("https://dummyjson.com/carts")
        console.log(res.data.carts)
        setcart(res.data.carts)
    }
    return (
        
            <div className="container">
                <div className="row gap-2 m-1">
                    {
                        cart && cart.map((data, index) => {
                            const { userID, products, total, totalProducts, totalQuantity } = data
                            return (
                                <div className="card bg-dark text-white p-1 ">
                                    <div className="card-body">
                                        <h5 className="card-title">USERID:- {data.userId}</h5>
                                        <ul className="list-group mb-2">
                                            <h5>Product Details :- </h5>
                                            {
                                                products.map((p, index) => {
                                                    const { title, price, quantity } = p
                                                    const space = " "
                                                    return (
                                                        <li className="list-group-item" >{title + space}RS. <span class="ms-3 badge text-bg-info rounded-pill">{price} $</span> <span class="ms-3 badge text-bg-primary rounded-pill">{quantity}</span></li>
                                                    )
                                                })
                                            }
                                        </ul>

                                        <h5 className="card-title">Total Products :- {totalProducts}</h5>
                                        <h5 className="card-title">Total Quantity :- {totalQuantity}</h5>
                                        <h5 className="card-title">Total Amount :- {total}$</h5>

                                    </div>


                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )
}

export default Axioscart