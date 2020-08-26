import React, { Component } from 'react';
import Cockpit from '../Components/Cockpit/Cockpit';
import People from '../Components/People/People';
import './App.css';
import withClass from '../hoc/withClass'
import AuxHoc from '../hoc/AuxHoc'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      people: [
        { id: 1, name: 'Dnos', age: 26 },
        { id: 2, name: 'Sondn', age: 25 },
        { id: 3, name: 'Ignis', age: 20 }
      ],
      showPeople: false,
      showCockpit: true,
    }
    console.log('[App.js] constructor ');
  }
  
  // static getDerivedStateFromProps(props){
  //   console.log('[App.js] getDerivedStateFromProps', props);
  //   return null;
  // }
  // render
  // render children
  // componentWillMount(){
  //   console.log('[App.js] componentWilMount');
  // }
  // componentDidMount(){
  //   console.log('[App.js] componentDidMount');
  // }

  // shouldComponentUpdate(nextProps, nextStates){
  //   console.log('[App.js] shouldComponentUpdate nextProps:', nextProps, 'nextStates:', nextStates);
  //   return true;
  // }

  componentDidUpdate(prevProps, prevStates){
    // console.log('[App.js] componentDidUpdate prevProps:', prevProps, 'prevStates:', prevStates);
  }

  // getSnapshotBeforeUpdate(prevProps, prevStates){
  //   console.log('[App.js] getSnapshotBeforeUpdate prevProps:', prevProps, 'prevStates:', prevStates);
  // }

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
    console.log();
    return (
      <AuxHoc>
        { this.state.showCockpit ?
          (<Cockpit
              title={this.props.appTitle}
              showPeople={this.state.showPeople}
              peopleLength={this.state.people.length}
              clicked={() => this.toggleShowPeople()}
            />) : null }
        <button onClick={() => this.setState({showCockpit: !this.state.showCockpit})}>Toggle Cockpit</button>
        {people}
      </AuxHoc>
    )
  }
}
export default withClass(App, 'App');
