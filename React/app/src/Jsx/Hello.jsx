// jsx :- javascript syntax xml/et
// jsx html return Read
// jsx vs js :- litial bit .1s
// return before
// javascript htl code {}
// <></> :- classname not use


import React from 'react'

function Hello() {
//   console.log("hello")

    let name = "Het"
    // console.log(name)

    let arr = [1,2,3,4,5]
    // console.log(arr)

    let person = {
        name: "vraj patel",
        age : 24,
        course : {
            front:"Front-end",
            back:"back-end"
        }
    }

    let htmldata = <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>Four</li>
    </ul>
    

    return(
        <>
            <h1>Hello this jsx compoent</h1>
            <h1>Hello name : {name}</h1>

            {/* javascript  */}
            {/* {
                console.log("sdhfui")
            } */}
            <h4>arr 1 : {arr[0]}</h4>

            <h1>hello name :- {person.name}</h1>
            <h1>Hello course : {person.course.front}</h1>

            {htmldata}
                {person.age}

            {/* {5+5} */}
            

        </>
    )
}

export default Hello