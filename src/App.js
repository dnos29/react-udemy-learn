import React, { Component } from 'react';
import './App.css';
import Validator from './Validator/Validator'
import Char from './Char/Char'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: ''
    }
  }
  handleInputChange = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }
  onClickCharacter = (idx) => {
    const arrChar = this.state.inputText.split('');
    arrChar.splice(idx,1);
    this.setState({
      inputText: arrChar.join('')
    })
  }
  render(){
    const style = {
      textAlign: 'center',
      marginTop: '20px',
    }
    const charList = this.state.inputText.split('').map((ch, idx) => {
      return <Char 
              c={ch}
              key={idx}
              clicked={() => this.onClickCharacter(idx)} />
    })
    return(
      <div style={style}>
        <input 
          type="text" 
          value={this.state.inputText}
          onChange={(event) => this.handleInputChange(event)}/>
        <br />
        Input: {this.state.inputText} - Length: {this.state.inputText.length}
        <br />
        <Validator textLength={this.state.inputText.length} />
        <br />
        Char: 
        {charList}
      </div>
    );
  }
}
export default App;
