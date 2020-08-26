import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {
  const btnRef = useRef(null);

  const assignedClasses = [];
  let btnClass = '';
  if(props.showPeople){
    btnClass = 'red'
  }
  if(props.peopleLength <= 2){
    assignedClasses.push(classes.red)
  }
  if(props.peopleLength <= 1){
    assignedClasses.push(classes.bold)
  }

  useEffect(() => {
    // run on ComponentDidMount
    console.log('[Cockpit.js] useEffect');
    btnRef.current.click();
    // return run when unmouted happen
    return () => {
      console.log('[Cockpit.js] clean work useEffect');
    }
  }, []);

  useEffect(()=> {
    console.log('[Cockpit.js] useEffect 2nd');
    return () => {
      console.log('[Cockpit.js] clean work useEffect 2nd');
    }
  }, []);

  return(
    <div className={classes.cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>
        Cockpit works!
      </p>
      <button
        className={btnClass}
        onClick={props.clicked}
        ref={btnRef}>Toggle People
      </button>
      <AuthContext.Consumer>
        {(context) => (<button onClick={context.login}>
          Log in
        </button>)}
      </AuthContext.Consumer>
    </div>
  )
}

export default React.memo(Cockpit);