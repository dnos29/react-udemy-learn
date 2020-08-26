import React, { PureComponent } from 'react'
import Person from './Person/Person'

class People extends PureComponent {
  constructor(props){
    super(props);
    console.log('[People.js] constructor...');
  }

  render(){
    console.log('[People.js] rendering...');
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
