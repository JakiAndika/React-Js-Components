import React from 'react'

function Greet(props){
    console.log(props)
    return(
        <h5>Hello {props.name}</h5>
    )
}

export default Greet
