import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                            <Link to={`/detail/${truck.id}`} className="updater">Update</Link>
                            <h2>Model:{truck.model}</h2>
                            <p>Desire Level:{truck.desire_level}</p>
                            <p>Is it affordable?:{truck.affordability}</p>

                        </div>)
                        : 'loading'
                }

            </div>
        )
    }
}
