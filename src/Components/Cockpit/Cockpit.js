import React from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = '';
  if(props.showPeople){
    btnClass = 'red'
  }
  if(props.people.length <= 2){
    assignedClasses.push(classes.red)
  }
  if(props.people.length <= 1){
    assignedClasses.push(classes.bold)
  }
  return(
    <div className={classes.cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>
        Cockpit works!
      </p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle People</button>
    </div>
  )
}

export default Cockpit;