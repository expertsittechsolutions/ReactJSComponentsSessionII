import React, { Component } from 'react'
import ChildComp from './ChildComp'

class MasterComp extends Component{
    constructor(props){
        super(props)

        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    }

    buttonClickHandler(childName){
        console.log("buttonclick event handler - master component - " + childName)
    }

    render(){
        return(
            <ChildComp buttonClickHandler={this.buttonClickHandler} />
        )
    }
}

export default MasterComp