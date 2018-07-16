import React from 'react'

//Stateless Components

export const Time = (props) => {
    return (
        <div>
            Time now is {new Date().toLocaleTimeString()}
        </div>
    )
}


