import React, { Component } from 'react'
import {

    updateTruck,
    fetchTruck,
    fetchModels,
    deleteTruck,
} from './fetches.js';

const userFromLocalStorage = {
    userId: 1
};

export default class CreatePage extends Component {

    state = {
        models: [],
        desire_level: 0,
        model_id: 1,
        affordability: true,
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
            model_id: matchingModel.id,
            desire_level: truck.desire_level,
            affordability: truck.affordability
        });

    }


    handleSubmit = async (e) => {
        e.preventDefault();
        Number(this.state.model_id)
        await updateTruck(
            this.props.match.params.id,
            {

                model_id: this.state.model_id,
                desire_level: this.state.desire_level,
                affordability: this.state.affordability,
                owner_id: userFromLocalStorage.userId



            });

        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({ model_id: e.target.value });
    }

    removeTruck = async () => {
        await deleteTruck(this.props.match.params.id);
        this.props.history.push('/');
    
      }
    

    render() {
        return (
            <div>
                <h2>UPDATE a Truck!</h2>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Desire Level
                        

                        <input
                            value={this.state.desire_level}
                            onChange={e => this.setState({ desire_level: e.target.value })}
                            type="number" />
                    </label>

                    <label>
                        Model
                        

                        <select onChange={this.handleChange}>
                            {

                                this.state.models.map(model => <option

                                    selected={this.state.model_id === model.id}
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
                <div className="delete-container">
          <button onClick={this.removeTruck}>Or, remove this truck</button>
        </div>


            </div>

        )
    }
}
