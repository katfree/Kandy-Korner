import React, { Component } from 'react';



class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    state = {
        searchId: ""
    }
    handleFieldChange = event => {

        this.setState({value: event.target.value});



    }
    handleKeyPress = (event) => {
                if (event.charCode === 13) {
                    console.log("enter press here! ")
                    console.log(this.state.value)
                    const thisvalue = this.state.value
                    fetch(`http://localhost:5002/locations?address_like=${thisvalue}`)
                .then(r => r.json())


                }

    }
    render() {
        return (
            <form>
                <label htmlFor="search">
                    <input
                        placeholder="Search"
                        type="text"
                        onKeyPress={this.handleKeyPress}
                        value={this.state.value}
                        onChange={this.handleFieldChange}
                        id="searchId"
                    />

                </label>
            </form>


        )

    }
}

export default SearchInput