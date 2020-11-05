import React, { Component } from 'react'
import request from 'superagent';


const userFromLocalStorage = {
    userId: 1
};


export default class CreatePage extends Component {

    state = {

        models: []

    }

    componentDidMount = async () => {
        const response = await request.get('https://intense-dusk-47624.herokuapp.com/models');

        this.setState({ models: response.body });
        console.log(response.body)
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const newTruck = {
            model_id: this.state.modelId,
            desire_level: this.state.desireLevel,
            affordability: this.state.affordability,
            owner_id: userFromLocalStorage.userId
        };

        await request
            .post('https://intense-dusk-47624.herokuapp.com/trucks')
            .send(newTruck);


        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({ modelId: e.target.value });
    }

    render() {
        console.log(this.state.models)
        return (
            <div>
                Create a truck
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Desire Level
                        
                        <input onChange={e => this.setState({ desireLevel: e.target.value })} type="number" />
                        
                    </label>
                    <label>
                        Affordability
                        
                        <input onChange={e => this.setState({ affordability: e.target.value })} />
                        
                    </label>

                    <label>
                        Model
                        <select onChange={this.handleChange}>
                            {
                                this.state.models.length > 0 
                                ? this.state.models.map(model => <option key={model.id} value={model.id} >
                                    {model.name}
                                </option>)
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
