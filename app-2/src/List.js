import React, { Component } from 'react'

export default class List extends Component {
    constructor() {
        super()
        this.state = {
            groceries: ['Milk', 'Bread', 'Cheese', 'Eggs']
        }
    }


    render() {
        let list = this.state.groceries.map((element, index) => {
            return (<h2>{element}</h2>)
        })

        return (
            <div>
                <p>{list}</p>
            </div>
        )
    }
}