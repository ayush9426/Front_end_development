import React, { useState } from 'react'
import Image from './Image'

function Funobj() {
    const [data, setdata] = useState({
        name: "AYUSH BHAI",
        count: 0,
        isImage: true
    })
    return (
        <div>
            <h1>HELLO {data.name}</h1>
            <button onClick={()=>setdata({...data,name:"NEER BHAI"})}>chnage</button>
            <h1>count: {data.count}</h1>
            <button onClick={()=>setdata({...data,count: data.count + 1})}>increment</button>
            <button onClick={()=>setdata({...data,count: data.count - 1})}>decrement</button>
            <button onClick={()=>setdata({...data,count: 0})}>zero</button>
             
                <br /><br />

            <button onClick={()=>setdata({...data,isImage:false})}>hide</button>
            <button onClick={()=>setdata({...data,isImage:true})}>show</button>
            <button onClick={()=>setdata({...data,isImage:!data.isImage})}>toggle</button>
            {
                (data.isImage)? <Image /> : false
            }

        </div>
    )
}

export default Funobj