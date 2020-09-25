import React, { Component } from 'react';

class CounterClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment(){
        // // this.state.count = this.state.count + 1
        
        ////this.setState({count: this.state.count+1});

        console.log(this.state.count);
        this.setState(
            (prevState => {
                console.log(prevState);
                return { count: prevState.count + 1 };}
            ), 
        () => {
            console.log("callback count " + this.state.count)
        });

        console.log(this.state.count);
    }
    
    buttonClickHandler(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.buttonClickHandler()}>Add (1)</button>
            </div>
        );
    }
}

export default CounterClass
