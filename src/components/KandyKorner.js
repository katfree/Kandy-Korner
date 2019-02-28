import React, { Component } from "react"

import ApplicationViews from "./ApplicationViews"
import NavBar from "./NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css"
import SearchInput from "./NavBar/navBarInput";




class KandyKorner extends Component {
    render() {
        return (
            <React.Fragment>

                <NavBar />
                

                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default KandyKorner
