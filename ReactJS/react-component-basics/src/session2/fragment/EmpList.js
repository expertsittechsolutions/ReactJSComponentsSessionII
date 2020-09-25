import React, { Component } from 'react'
import EmpData from './EmpData'
import EmpHeader from './EmpHeader'

class EmpList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            employees: [
                {"id": 1, "name": "Dom", "age": 30, "skills": ".NET"},
                {"id": 2, "name": "Alex", "age": 33, "skills": "JAVA"},
                {"id": 3, "name": "Fred", "age": 45, "skills": "AZURE"}
               ]
        }
    }
    
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <EmpHeader />
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(x=><tr key={x.id}><EmpData emp={x} /></tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmpList
