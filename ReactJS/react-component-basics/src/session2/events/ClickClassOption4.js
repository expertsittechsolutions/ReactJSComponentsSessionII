import React, { Component } from 'react'

class ClickClassOption4 extends Component{
    constructor(props){
        super(props)

        this.state = {
            user: "Guest"
        }
    }

    loginHandler = () => {
        console.log("login handler from class component")
        console.log(this)
        this.setState({user: "Test"})
    }

    render(){
        return (
            <div>
                <div>Hi, {this.state.user}</div>
                <button onClick={this.loginHandler}>Login</button>
            </div>
        )
    }
}

export default ClickClassOption4