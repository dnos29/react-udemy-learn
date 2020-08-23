import React from 'react'
import Person from './Person/Person'

const People = (props) => {
  return props.people.map(person => {
    return (
      <Person
        click={() => props.clicked(person.id)}
        name={person.name + person.id}
        age={person.age}
        key={person.id}
        changed={event => props.changed(event, person.id)}
      />)
  })
}
export default People;
