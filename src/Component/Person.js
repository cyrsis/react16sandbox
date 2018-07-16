import React from 'react'

//Stateless Components

export const Person = (props) => {
    return (
        <p>I 'am a person {props.name} and I am {props.age} years old {props.children}</p>


    )
}


