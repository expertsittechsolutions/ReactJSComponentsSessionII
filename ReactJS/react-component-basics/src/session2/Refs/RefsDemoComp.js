import React, { Component } from 'react'

class RefsDemoComp extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()

        this.state ={
            inputValue : ""
        }

        this.inputChangeHanlder = this.inputChangeHanlder.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    }

    inputChangeHanlder(event){
        this.setState({inputValue: event.target.value})
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }

    buttonClickHandler(){
        ////alert(this.state.inputValue)
        alert(this.inputRef.current.value)
    }
    
    render() {
        console.log("render")
        return (
            <div>
                {/* <input 
                    type="text" 
                    value={this.state.inputValue} ref={this.inputRef} 
                    onChange={this.inputChangeHanlder} /> */}
                <input type="text" ref={this.inputRef} />

                <button onClick={this.buttonClickHandler}>Get Value</button>
            </div>
        )
    }
}

export default RefsDemoComp