import { Route } from 'react-router-dom'
import React, { Component } from "react"
import StoreList from './Locations/StoreList';
import EmployeeList from './Employees/EmployeeList';
import CandyList from './Candy/CandyList';

import SearchResults from './searchresults';
import LocationManager from '../modules/LocationManager'
import EmployeeManager from '../modules/EmployeeManager'
import CandyManager from '../modules/CandyManager'
import CandyTypesManager from '../modules/CandyTypesManager'

class ApplicationViews extends Component {

    state = {
        locations: [],
        employees: [],
        candyTypes: [],
        candies: [],
        history: []

    }



    deleteEmployee = (id) => {
        return EmployeeManager.removeAndList(id)
        .then(employees => this.setState({
            employees: employees
        })
        )
      }

    deleteIndividualCandy = id => {
        return CandyManager.removeAndList(id)
        .then(() => CandyManager.getAll())
            .then(candies => this.setState({
                candies: candies
            })
            )
    }


    componentDidMount() {
        // console.log("componentDidMount -- ApplicationViews")
        const newState = {}
        LocationManager.getAll()

            .then(locations => newState.locations = locations)
        EmployeeManager.getAll()
            .then(employees => newState.employees = employees)
        CandyTypesManager.getAll()
            .then(candyTypes => newState.candyTypes = candyTypes)
        CandyManager.getAll()
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
                        deleteEmployee={this.deleteEmployee} />
                }} />
                <Route exact path="/SearchResults" render={(props) => {
                    return <SearchResults locations={this.state.locations} />
                }} />
            </React.Fragment>
        )
    }
}




export default ApplicationViews