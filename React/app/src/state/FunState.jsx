//  useState :- it's simple varibale 
// state :- chnage a data in same component 
//  syntax :- hook 
// type [define,setdefine] = useState()


import React, { useState } from 'react'
import Image from './Image'

function FunState() {
    const [name,setname] = useState("ayush")
    const [count,setcount] = useState(0)
    const [isImage,setisImage] = useState(true)

  return (
    <div>
        <h1>name : {name}</h1>
        <button onClick={()=>setname("neer")}>change name</button>
        <button onClick={()=> setname("yash")}>change name 2</button>

        <h1>count: {count}</h1>
         <button onClick={() =>setcount(count + 1)}>Increment</button>
        <button onClick={() =>setcount(count - 1)}>Decrement</button>
        <button onClick={() =>setcount(0)}>Zero</button>

        <br /><br /><br />

        <h1>isImage : {isImage}</h1>
        <button onClick={()=> setisImage(false)}>hide</button>
        <button onClick={()=> setisImage(true)}>show</button>
        <button onClick={()=> setisImage(!isImage)}>toggle</button>

    {
        (isImage)? <Image/> :false
    }

    </div>
  )
}

export default FunState