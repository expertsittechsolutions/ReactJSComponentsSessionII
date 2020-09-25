import React, { Component } from 'react';

class HelloUserClass extends Component{
    render(){
        return (
                <div>
                        <h1>Hello {this.props.name} from Class Component...!!!</h1>
                        <div>{this.props.children}</div>
                </div>);
    }
}

export default HelloUserClass;