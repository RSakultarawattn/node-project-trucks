import React, { Component } from 'react'
import {

    updateTruck,
    fetchTruck,
    fetchModels,
} from './fetches.js';

const userFromLocalStorage = {
    userId: 1
};

export default class CreatePage extends Component {

    state = {
        models: [],
        desireLevel: 0,
        modelId: 1,
    }

    componentDidMount = async () => {
        const models = await fetchModels();
        const truck = await fetchTruck(this.props.match.params.id);
        const modelNameAsAString = truck.model;

        const matchingModel = models.find((model) => {
            return model.name === modelNameAsAString
        });

        this.setState({
            models: models,
            modelId: matchingModel.id,
            desireLevel: truck.desire_level
        });

    }


    handleSubmit = async (e) => {
        e.preventDefault();

        await updateTruck(
            this.props.match.params.id,
            {

                model_id: this.state.modelId,
                desire_level: this.state.desireLevel,
                owner_id: userFromLocalStorage.userId


            });

        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({ modelId: e.target.value });
    }

    render() {
        return (
            <div>
                <h2>UPDATE a Truck!</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Desire desireLevel
                        {}
                        <input
                            value={this.state.desireLevel}
                            onChange={e => this.setState({ desireLevel: e.target.value })}
                            type="number" />
                    </label>

                    <label>
                        Model
                        {}
                        <select onChange={this.handleChange}>
                            {

                                this.state.models.map(model => <option

                                    selected={this.state.modelId === model.id}
                                    key={model.id}
                                    value={model.id}>
                                    {model.name}
                                </option>
                                )
                            }
                        </select>

                    </label>
                    <button>Submit</button>

                </form>

            </div>
        )
    }
}
