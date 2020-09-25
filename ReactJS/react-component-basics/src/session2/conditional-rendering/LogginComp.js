import React, { Component } from 'react'

class LogginComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isUserLoggedIn: false
        }

        this.loginHandler = this.loginHandler.bind(this)
    }

    loginHandler(){
        this.setState({isUserLoggedIn: true})
    }
    
    render() {

        // // if(this.state.isUserLoggedIn){
        // //     return (
        // //         <div>
        // //             Welcome, TestUser
        // //             <button onClick={this.loginHandler}>Login</button>
        // //         </div>
        // //     )
        // // }
        // // else{
        // //     return (
        // //         <div>
        // //             Welcome, Guest
        // //             <button onClick={this.loginHandler}>Login</button>
        // //         </div>
        // //     )
        // // }


        // // let user = "Guest"

        // // if(this.state.isUserLoggedIn){
        // //     user = "TestUser"
        // // }

        // // return(
        // //     <div>
        // //         Welcome, {user}
        // //         <button onClick={this.loginHandler}>Login</button>
        // //     </div>
        // // )

        return(
            this.state.isUserLoggedIn? 
            <div>Welcome, TestUser<button onClick={this.loginHandler}>Login</button></div> : 
            <div>Welcome, Guest<button onClick={this.loginHandler}>Login</button></div>
        )
    }
}

export default LogginComp
