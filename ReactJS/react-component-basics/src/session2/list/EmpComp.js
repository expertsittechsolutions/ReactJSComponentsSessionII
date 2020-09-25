import React, { Component } from 'react'

class EmpComp extends Component {
    render() {
        const x = this.props.person
        return (
                <tr>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.age}</td>
                    <td>{x.skills}</td>
                </tr>
        )
    }
}

export default EmpComp
