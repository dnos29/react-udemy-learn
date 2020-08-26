import React, { Component, Fragment } from 'react'
import classes from './Person.css'
import AuxHoc from '../../../hoc/AuxHoc'

class Person extends Component {
  render() {
    return (
        // <> </> Short syntax
        <Fragment> 
          <p onClick={this.props.click}>
              I'm {this.props.name} and I'm {this.props.age} year old
          </p>
          <p>{this.props.children}</p>
          <input type="text" onChange={this.props.changed} value={this.props.name} />
        </Fragment>
    )
  }
}

export default Person;