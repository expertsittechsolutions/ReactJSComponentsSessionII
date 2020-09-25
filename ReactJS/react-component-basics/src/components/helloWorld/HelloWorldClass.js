import React, { Component } from 'react'

class HelloWorldClass extends Component{
    render(){
        return <div><h1>Hello World from Class HelloWorldClass Component...!!</h1></div>
        // return  React.createElement('div', null, 
        //     React.createElement("h1", null, "Hello World from Class Component...!!"))
    }
}

export default HelloWorldClass