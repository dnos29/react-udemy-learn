import React, { Component } from 'react'
import Person from './Person/Person'

class People extends Component {
  constructor(props){
    super(props);
    console.log('[People.js] constructor...');
  }

  render(){
    return this.props.people.map(person => {
      return (
        <Person
          click={() => this.props.clicked(person.id)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />)
    }) 
  }
}
export default People;
