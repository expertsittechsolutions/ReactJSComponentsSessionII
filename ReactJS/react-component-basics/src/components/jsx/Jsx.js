import React, { Component } from 'react';

class Jsx extends Component{
    render(){
        const hStyle = { color: this.props.myColor };
        let greetingText = 'Hello ' + this.props.name;

        return(
            React.createElement(
                'div', 
                null, 
                React.createElement('h1', {style: hStyle}, greetingText))
        );
    }
}

// // class Jsx extends Component{
// //     render(){
// //         return(
// //             <div><h2>Hello World...!!!</h2></div>
// //         );
// //     }
// // }

export default Jsx;