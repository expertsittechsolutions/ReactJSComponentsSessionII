import React, { Component } from 'react'

export class EmpData extends Component {
    render() {
        const emp = this.props.emp

        return (
            // <>
            <React.Fragment>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.skills}</td>
            </React.Fragment>
            // </>
        )
    }
}

export default EmpData
