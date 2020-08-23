import React, { Component } from 'react';
import Cockpit from '../Components/Cockpit/Cockpit';
import People from '../Components/People/People';
import './App.css';



class App extends Component {
  state = {
    people: [
      { id: 1, name: 'Dnos', age: 26 },
      { id: 2, name: 'Sondn', age: 25 },
      { id: 3, name: 'Ignis', age: 20 }
    ],
    showPeople: false,
  }
  toggleShowPeople(){
    const showPeople = this.state.showPeople;
    this.setState({
      showPeople: !showPeople,
    })
  }
  deletePersonHander = (id) => {
    const people = [...this.state.people];
    this.setState({
      people: people.filter(p => p.id !== id)
    })
  }
  nameChangedHander = (event, id) => {
    const people = [...this.state.people]
    const idx = people.findIndex(p => p.id === id);
    console.log(idx)
    let person = people[idx];
    person.name = event.target.value;
    people[idx] = person;
    this.setState({
      people: people
    })
  }
  render() {
    let people = null;
    if(this.state.showPeople){
      people = (
        <People 
          people={this.state.people}
          clicked={this.deletePersonHander}
          changed={this.nameChangedHander}
        />
      );
    }
    return (
      <div  className="App">
        <Cockpit
          title={this.props.appTitle}
          showPeople={this.state.showPeople}
          people={this.state.people}
          clicked={() => this.toggleShowPeople()}
        />
        {people}
      </div>
    )
  }
}
export default App;
