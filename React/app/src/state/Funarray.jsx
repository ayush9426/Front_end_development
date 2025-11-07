import React, { useState } from 'react'

function Funarray() {
    const [array, setarray] = useState([
        "Ayush",
        "purohit",
        2005,
        "ayushpurohit99@gmail.com"
    ])

    return (
        <div>
            <h1>DETAILS</h1>
            <h2>NAME : {array[0]}</h2>
            <h2>LAST NAME : {array[1]}</h2>
            <h2>YEAR : {array[2]}</h2>
            <h2>GMAIL : {array[3]}</h2>
            {/* <button onClick={()=>setarray(["vansh"])}>change name</button> */}
        </div>
    )
}

export default Funarray