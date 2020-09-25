import React, { Component, PureComponent } from 'react'

class LifeCycleParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello'
        }

        this.buttonClickHandler = this.buttonClickHandler.bind(this)

        console.log("LifeCycleParent constructor")
    }

    buttonClickHandler(){
        this.setState({message: 'Thank you'})
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleParent getDerivedStateFromProps")
        return null
    }

    shouldComponentUpdate(prevProps, prevState){
        console.log("LifeCycleParent shouldComponentUpdate")

        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState, snapshot){
        console.log("LifeCycleParent getSnapshotBeforeUpdate")

        return null
    }
    
    componentDidMount(){
        console.log("LifeCycleParent componentDidMount")
    }

    componentDidUpdate(){
        console.log("LifeCycleParent componentDidUpdate")
    }

    render() {
        console.log("LifeCycleParent render")
        return (
            <div>
                {this.state.message}
                <button onClick={this.buttonClickHandler}>Change Message</button>
            </div>
        )
    }
}

export default LifeCycleParent