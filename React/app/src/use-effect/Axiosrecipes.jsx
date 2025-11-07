import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axiosrecipes() {

    const [reci, setreci] = useState([])

    useEffect(() => {
        axiosdata()
    }, [])

    const axiosdata = async () => {
        const res = await axios.get("https://dummyjson.com/recipes")
        console.log(res.data.recipes)
        setreci(res.data.recipes)

    }

    return (
        <div className="container ">
            <div className="row">
                <div className="col-md-4">
                      {

                reci && reci.map((data, index) => {
                    const {image , ingredients, cuisine,tags}=data
                    return (
                        <div classname="card" style={{ width: '100%' }}  >
                            <img src={data.image}   classname="card-img-top" alt="" />
                            <div classname="card-body">
                                <h5 classname="card-title">NAME :- {data.name}</h5>

                                <h5 classname="card-title">INGREDIENTS :-{
                                    ingredients.map((d,index)=>{
                                        const {ingredients } = d
                                        const space = ","
                                        return(
                                            <span classname="card-title">{d + space}</span>
                                        )
                                    })}</h5>

                                <h5 classname="card-title">CUISINE :- {
                                cuisine.map((c,index)=>{
                                    const {cuisine} = c
                                    const space =","
                                    return(
                                        <span classname="card-title">TAGS :- {c + space}</span>
                                    )
                                }) }</h5>
                                

                                <a href="#" classname="btn btn-primary">ORDER</a>
                            </div>
                        </div>
                    )
                })


            }
                </div>
                
            </div>
          

        </div>
    )
}

export default Axiosrecipes