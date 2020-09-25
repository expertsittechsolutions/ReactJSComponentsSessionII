import React, { Component } from 'react'

class FormComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user: '',
             age: 0,
             skill: ''
        }

        this.userChangeHandler = this.userChangeHandler.bind(this)
        this.ageChangeHandler = this.ageChangeHandler.bind(this)
        this.skillChangeHandler = this.skillChangeHandler.bind(this)
        this.addEmpHandler = this.addEmpHandler.bind(this)
    }

    userChangeHandler(event){
        this.setState({user: event.target.value})
    }

    ageChangeHandler(event){
        this.setState({age: event.target.value})
    }

    skillChangeHandler(event){
        this.setState({skill: event.target.value})
    }

    addEmpHandler(event){
        event.preventDefault();
        console.log(this.state);
    }
    
    render() {
        return (
            <form>
                <div>
                    <div>
                        <label>User Name:</label>
                        <input type="text" onChange={this.userChangeHandler} value={this.state.user} />
                    </div>

                    <div>
                        <label>Age</label>
                        <input type="number" onChange={this.ageChangeHandler} value={this.state.age} />
                    </div>

                    <div>
                        <label>Skill</label>
                        <input type="text" onChange={this.skillChangeHandler} value={this.state.skill} />
                    </div>

                    <div><button type="submit" onClick={this.addEmpHandler}>Add</button></div>
                </div>
            </form>
        )
    }
}

export default FormComp
