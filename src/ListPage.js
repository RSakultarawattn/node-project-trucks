import React, { Component } from 'react'
import request from 'superagent';

export default class ListPage extends Component {

    state = {

        trucks: []
    }

    componentDidMount = async () => {
        const response = await request.get('https://intense-dusk-47624.herokuapp.com/trucks');

        this.setState({ trucks: response.body });
    }
    render() {

        return (
            <div>
                {
                    this.state.trucks.length > 0
                        ? this.state.trucks.map(truck => <div>
                            <p>{truck.model}</p>
                            <p>{truck.desire_level}</p>
                        </div>)
                        : 'loading'
                }

            </div>
        )
    }
}
