import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      input: ""
    }

    this.handleAdd = this.handleAdd.bind(this)
  }

  handleChange(task) {
    this.setState({ input: task })
  }

  handleAdd() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    })
  }



  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    })


    return (
      <div className='App'>
        <h1>My Todo List</h1>
        <input value={this.state.input} onChange={e => this.handleChange(e.target.value)} type='text' />
        <button onClick={this.handleAdd}>Add</button>
        {list}
      </div>
    )
  }
}