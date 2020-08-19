import React, { Component } from 'react'
import './App.css'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsername(user) {
        this.setState({ username: user })
    }

    handlePassword(pass) {
        this.setState({ password: pass })
    }

    handleSubmit() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }


    render() {
        return (
            <div className='App'>
                <input type="text" onChange={e => this.handleUsername(e.target.value)} placeholder='Username' />
                <input type="text" onChange={e => this.handlePassword(e.target.value)} placeholder='Password' />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}