import React, { Component } from 'react'

class ChildComp extends Component{
    render(){
        return(
            // <div><button onClick={this.props.buttonClickHandler}>Child</button></div>
            <div><button onClick={() => this.props.buttonClickHandler('childparam')}>Child with Param</button></div>
        )
    }
}

export default ChildComp