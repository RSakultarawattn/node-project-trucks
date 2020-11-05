
import React, { Component } from 'react';
import fetch from 'superagent';







export default class FetchTrucks extends Component {

    state = {

        truckResults: [],

    }

    componentDidMount = async () => {
        await this.FetchTrucks();
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await this.FetchTrucks();
    }

    handleChange = (e) => {
        this.setState({ searchInput: e.target.value });

    }

    FetchTrucks = async () => {
        const response = await fetch.get(`https://intense-dusk-47624.herokuapp.com/trucks`);


        this.setState({ truckResults: response.body });
    }

    render() {
        console.log(this.state.truckResults)
        return (

            <div className="fetch">

                {
                    this.state.loading
                        ? 'loading!!!'

                        : this.state.truckResults.map(truck =>


                            <li>

                                <p>Model: {truck.model_id}</p>
                                <p>Desire Level: {truck.desire_level}</p>
                                <p>Affordability: {truck.affordability}</p>

                            </li>)


                }
            </div>

        )
    }
}