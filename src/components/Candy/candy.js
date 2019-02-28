import React, { Component } from 'react';

class Candy extends Component {
    render () {
        return (
            <React.Fragment>
                {
                    this.props.candies.map(candy =>
                        <div key={candy.id}>

                            {candy.name}
                    </div> )
                }
            </React.Fragment>
        )
    }
}

export default Candy


