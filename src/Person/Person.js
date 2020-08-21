import React from 'react'

const Person = props => {
    return (
        <div>
            <p>I'm {props.name} and I'm {props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
    )
}

export default Person;