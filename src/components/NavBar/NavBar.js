import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import SearchInput from "./navBarInput";



class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Store Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/candy">Candy We Sell</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Our Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/SearchResults">Search Results</Link>
                    </li>
                    <SearchInput />
                </ul>

            </nav>
        )
    }
}

export default NavBar