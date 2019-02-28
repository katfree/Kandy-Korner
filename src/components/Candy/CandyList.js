import React, { Component } from 'react';


class CandyList extends Component {
    render() {
        // console.log("render -- CandyList")
        return (
            <section className="candyList">


                <h1>Candy We Sell</h1>

                {
                    this.props.candies.map(candy =>
                        <div key ={candy.id}>
                        <h4>{candy.name}</h4>

                        <p> Type: {this.props.candyTypes
                            .find( candyType => {
                                return candyType.id === candy.typeId
                            }).type
                        }
                        </p>

                        <button onClick={() => this.props.deleteIndividualCandy(candy.id)}> DELETE</button>
                        </div>
                    )
                }

            </section>
        )
    }
}

export default CandyList
