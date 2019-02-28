import React, { Component } from 'react';


class EmployeeList extends Component {
    render() {
        // console.log("render -- EmployeeList")
        return (
            <section className="storeEmployees">
            <h1> Our Employees </h1>
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>

                        {employee.name}
                        <button onClick= {() => this.props.deleteEmployee(employee.id)}>FIRE</button>

                    </div>
                )
            }
            </section>
        )
    }

}

export default EmployeeList