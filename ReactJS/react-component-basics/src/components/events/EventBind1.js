import React, { Component } from 'react'

class EventBind1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Welcome"
        }

        ////this.buttonClickHandler = this.buttonClickHandler.bind(this);
    }

    buttonClickHandler(){
        console.log(this);
        this.setState({message: "Thank you"});
    }   
    
    // buttonClickHandler = () => {
    //     console.log(this);
    //     this.setState({message: "Thank you"});
    // };

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.buttonClickHandler.bind(this)}>Click Me</button> */}
                <button onClick={() => this.buttonClickHandler()}>Click Me</button>
                {/* <button onClick={this.buttonClickHandler}>Click Me</button> */}
                {/* <button onClick={this.buttonClickHandler}>Click Me</button> */}
            </div>
        )
    }
}

export default EventBind1
