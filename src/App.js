import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    people: [
      { name: 'Dnos', age: 26 },
      { name: 'Sondn', age: 25 },
      { name: 'Ignis', age: 20 }
    ]
  }
  switchNameHandler = () => {
    this.setState({
      people: [
        { name: 'sondn', age: 26 },
        { name: 'Sondn', age: 25 },
        { name: 'Ignis', age: 20 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch name</button>
        {/* <button onClick={this.switchNameHandler()}>Switch name</button> TODO: don't using function like this, it with be excute immidiately */}
        <Person name={this.state.people[0].name} age={this.state.people[0].age}>
          <i>I'm your son of first person</i>
        </Person>
        <Person name={this.state.people[1].name} age={this.state.people[1].age} />
        <Person name={this.state.people[2].name} age={this.state.people[2].age} />
      </div>
    )
  }
}
export default App;
