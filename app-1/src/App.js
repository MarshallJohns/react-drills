import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputText: ''
    }
  }

  handleChange(value) {
    this.setState({ inputText: value })
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} placeholder='Type here!' />
        <p>{this.state.inputText}</p>
      </div>
    );

  }

}



export default App;
