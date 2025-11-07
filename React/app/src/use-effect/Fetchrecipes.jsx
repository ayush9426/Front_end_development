import React, { useEffect, useState } from 'react'

function Fetchrecipes() {

    const [recipes, setrecipes] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        fetch("https://dummyjson.com/recipes", {
            method: "GET"
        })
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                console.log(data.recipes)
                setrecipes(data.recipes)
            })
    }

    return (
        <div><table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">CUISINE</th>
                    <th scope="col">NAME</th>
                    <th scope="col">MEAL_TYPE</th>
                    <th scope="col">DIFFICULTY</th>
                    <th scope="col">RATING</th>
                </tr>
            </thead>
            <tbody>
               {
                recipes && recipes.map((data,index)=>{
                    return(
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.cuisine}</td>
                            <td>{data.name}</td>
                            <td>{data.mealType[0]}</td>
                            <td>{data.difficulty}</td>
                            <td>{data.rating}</td>
                            
                        </tr>
                    )
                })
               }
            </tbody>
        </table>
        </div>
    )
}

export default Fetchrecipes