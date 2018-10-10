import React from 'react'
import ss from "./Person.css";

//Stateless Components

const person = (props) => {


    return (
        <div className={ss.Person}>
            <p onClick={props.click}>I 'am a person {props.name} and I am {props.age} years old </p>
            <p>{props.children}</p>
            <input type="text"
                   onChange={props.Change}
                   value={props.name}/>
        </div>

    )
}

export default person;
