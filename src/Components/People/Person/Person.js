import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classes from './Person.css'
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
  // constructor(props){
  //   super(props);
  //   this.inputEleRef = React.createRef();
  // }
  static contextType = AuthContext;

  componentDidMount(){
    this.inputElement.focus();
    // this.inputEleRef.current.focus();
  }
  render() {
    return (
        // <> </> Short syntax
        <Fragment>
          {/* <AuthContext.Consumer>
            {(context) => context.isAuthenticated ? (<p> isAuthenticated: true </p>) : (<p> isAuthenticated: false </p>)}
          </AuthContext.Consumer> */}
          
          {this.context.isAuthenticated ? (<p> isAuthenticated: true </p>) : (<p> isAuthenticated: false </p>)}
          
          <p onClick={this.props.click}>
              I'm {this.props.name} and I'm {this.props.age} year old
          </p>
          <p>{this.props.children}</p>
          <input 
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
            ref={(inputEle => {this.inputElement = inputEle})}
            // ref={this.inputEleRef}
            />
        </Fragment>
    )
  }
}
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  isAuthenticated: PropTypes.bool,
}
export default withClass(Person, 'person');