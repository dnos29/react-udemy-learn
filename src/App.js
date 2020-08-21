import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = () => {
  const [ people, setPeople ] = useState([
    { name: 'Dnos', age: 26 },
    { name: 'Sondn', age: 25 },
    { name: 'Ignis', age: 20 },
  ])
  const switchNameHandler = () => {
    setPeople([
      { name: 'sondn', age: 26 },
      { name: 'Sondn', age: 25 },
      { name: 'Ignis', age: 20 }
    ])
  }
  return (
    <div className="App">
      <button onClick={switchNameHandler}>Switch name</button>
      {/* <button onClick={this.switchNameHandler()}>Switch name</button> TODO: don't using function like this, it with be excute immidiately */}
      <Person name={people[0].name} age={people[0].age}>
        <i>I'm your son of first person</i>
      </Person>
      <Person name={people[1].name} age={people[1].age} />
      <Person name={people[2].name} age={people[2].age} />
    </div>
  )
}

export default App;
