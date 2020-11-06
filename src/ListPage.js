import React, { Component } from 'react'

import { fetchTrucks } from './fetches';

export default class ListPage extends Component {

    state = {

        trucks: []
    }

    componentDidMount = async () => {
        const trucks = await fetchTrucks();

        this.setState({ trucks });
    }
    render() {
        const { trucks } = this.state;

        return (
            <div>
                {
                    trucks.length > 0
                        ? trucks.map(truck => <div>
                            <p>{truck.model}</p>
                            <p>{truck.desire_level}</p>
                            <p>{truck.affordability}</p>
                        </div>)
                        : 'loading'
                }

            </div>
        )
    }
}
