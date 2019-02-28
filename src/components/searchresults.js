// ?title_like=server
import React, { Component } from 'react';


class SearchResults extends Component {
    render() {
        return (
            fetch("http://localhost:5002/locations?address_like=100")
                .then(r => r.json())
                .then(r => {
                    r.map(a =>
                        a.address)
                })
                )


    }
}

// fetch("http://localhost:5002/employees?title_like=server")
// .then(r => r.json())

// fetch("http://localhost:5002/candyTypes?title_like=server")
// .then(r => r.json())

// fetch("http://localhost:5002/individualCandies?title_like=server")
// .then(r => r.json())

export default SearchResults