import React, { Component } from 'react';



class SearchInput extends Component {
 userInput = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault()
    }
    handleKeyPress = (event) => {
        if (event.charCode === 13) {
            console.log("enter press here! ")
            console.log(this.userInput.current.value)
            const thisvalue = this.userInput.current.value
            fetch(`http://localhost:5002/locations?address_like=${thisvalue}`)
            .then(response => console.log(response.json()) )
            fetch(`http://localhost:5002/employees?name_like=${thisvalue}`)
            .then(response => console.log(response.json()) )




        }

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="search">
                    <input
                        placeholder="Search"
                        type="text"
                        onKeyPress={this.handleKeyPress}
                        id="searchId"
                        ref={this.userInput}
                    />

                </label>
            </form>


        )

    }
}

export default SearchInput