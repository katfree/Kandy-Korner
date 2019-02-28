import { Route } from 'react-router-dom'
import React, { Component } from "react"
import StoreList from './Locations/StoreList';
import EmployeeList from './Employees/EmployeeList';
import CandyList from './Candy/CandyList';

import SearchResults from './searchresults';


class ApplicationViews extends Component {

    state = {
        locations: [],
        employees: [],
        candyTypes: [],
        candies: [],
        history: []

    }

    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/employees`))
            .then(e => e.json())
            .then(employees => this.setState({
                employees: employees
            })
            )
    }

    deleteIndividualCandy = id => {
        return fetch(`http://localhost:5002/individualCandies/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/individualCandies`))
            .then(e => e.json())
            .then(candies => this.setState({
                candies: candies
            })
            )
    }


    componentDidMount() {
        // console.log("componentDidMount -- ApplicationViews")
        const newState = {}

        fetch("http://localhost:5002/locations")
            .then(r => r.json())
            .then(locations => newState.locations = locations)
        fetch("http://localhost:5002/employees")
            .then(r => r.json())
            .then(employees => newState.employees = employees)
        fetch("http://localhost:5002/candyTypes")
            .then(r => r.json())
            .then(candyTypes => newState.candyTypes = candyTypes)
        fetch("http://localhost:5002/individualCandies")
            .then(r => r.json())
            .then(candies => newState.candies = candies)
            .then(() => this.setState(newState))
    }

    render() {
        // console.log("render -- ApplicationViews")
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList locations={this.state.locations} />
                }} />
                <Route exact path="/candy" render={(props) => {
                    return <CandyList candies={this.state.candies}
                        candyTypes={this.state.candyTypes}
                        deleteIndividualCandy={this.deleteIndividualCandy}
                        />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees}
                    deleteEmployee={this.deleteEmployee}/>
                }} />
                <Route exact path="/SearchResults" render={(props) => {
                    return <SearchResults locations={this.state.locations} />
                }} />
            </React.Fragment>
        )
    }
}




export default ApplicationViews