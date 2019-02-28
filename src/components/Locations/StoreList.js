import React, { Component } from 'react';


class StoreList extends Component {
    render() {
        // console.log("render -- StoreList")
        return (
            <section className="storeLocations">
            <h1> Our Locations </h1>
            {
                this.props.locations.map(location =>
                    <div key={location.id}>

                        {location.address}


                    </div>
                )
            }
            </section>
        )
    }

}

export default StoreList