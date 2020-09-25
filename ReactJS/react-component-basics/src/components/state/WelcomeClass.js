import React, { Component } from 'react';

class WelcomeClass extends Component{
    constructor(props){
        super(props);

        this.state = {
            message: "Welcome Guest...!"
        }
    }

    loginHandler(){
        this.setState({
            message: "Welcome Dali..."
        }, () => console.log("callback: " + this.state.message));

        ////this.state.message = "Welcome, Dali...";

        console.log(this.state.message);
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.loginHandler()}>Login</button>
            </div>
        );
    }
}

export default WelcomeClass