import React, { Component } from 'react'
import App from './App'

export default class Image extends Component {
    constructor() {
        super()

    }


    render() {
        return (
            <div>
                <img src={this.props.url} />
            </div>
        )
    }
}