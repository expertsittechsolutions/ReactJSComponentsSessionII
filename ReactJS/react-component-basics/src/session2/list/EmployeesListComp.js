import React, { Component } from 'react'
import EmpComp from './EmpComp'
import EmpHeaderComp from './EmpHeaderComp'

class EmployeesListComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             employees: [
                 {"id": 1, "name": "Dom", "age": 30, "skills": ".NET"},
                 {"id": 2, "name": "Alex", "age": 33, "skills": "JAVA"},
                 {"id": 3, "name": "Fred", "age": 45, "skills": "AZURE"}
                ]
        }

        this.addEmpHandler = this.addEmpHandler.bind(this)
    }

    addEmpHandler(){
        ////this.state.employees.push({"id": 4, "name": "New", "age": 30, "skills": "REACT"})
        this.setState({employees : 
            this.state.employees.concat({"id": 4, "name": "New", "age": 30, "skills": "REACT"})})
    }
    
    render() {
        return (
            <div>
                <table>
                    <EmpHeaderComp />
                <tbody>
                {
                    // // this.state.employees.map(x=>
                    // //     <tr>
                    // //         <td>{x.id}</td>
                    // //         <td>{x.name}</td>
                    // //         <td>{x.age}</td>
                    // //         <td>{x.skills}</td>
                    // //     </tr>)

                    this.state.employees.map(x=><EmpComp key={x.id} person={x} />)
                }
                </tbody></table>
                <button onClick={this.addEmpHandler}>Add New Item</button>
            </div>
        )
    }
}

export default EmployeesListComp
