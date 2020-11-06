import React, { Component } from 'react'

import './App.css';
import { createTruck, fetchModels } from './fetches';


const userFromLocalStorage = {
    userId: 1
};


export default class CreatePage extends Component {

    state = {

       models: []

    }

    componentDidMount = async () => {
        const models = await fetchModels();
        this.setState({ models });
        
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createTruck({

            name: this.state.id,
            model_id: this.state.modelId,
            desire_level: this.state.desireLevel,
            affordability: this.state.affordability,
            owner_id: userFromLocalStorage.userId
        });

        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({ modelId: e.target.value });
    }

    render() {
        console.log(this.state.models)
        return (
            <div>              <h2 className="choices">Create a truck</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Desire Level
                        
                        <input onChange={e => this.setState({ desireLevel: e.target.value })} type="number" />
                        
                    </label>
                    

                    <label>
                        Model
                        <select onChange={this.handleChange}>
                            {
                                this.state.models.length > 0 
                                ? this.state.models.map(model => 
                                <option key={model.id} value={model.id} >{model.name}</option>
                                )
                                : 'loading'
                                    }   
                        </select>

                    </label>

                    <button>Submit</button>

                </form>

            </div >
        )
    }
}
