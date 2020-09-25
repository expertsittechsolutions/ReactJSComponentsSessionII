import React, { Component } from 'react'

class ItemsListComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: ["Dom", "Don", "Alex", "Stuwart"]
        }
    }
    
    render() {
        return (
            <div>
                {
                    this.state.items.map(x=><h2>{x}</h2>)
                }
            </div>
        )
    }
}

export default ItemsListComp
