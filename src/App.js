//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import FetchTrucks from './TruckPage';

export default class App extends Component {


  render() {

    return (
      <div className="App">

        <Router>
          <Switch>

            <Route
              path="/"
              exact
              render={(routerProps) => <FetchTrucks {...routerProps} />}
            />
          </Switch>
        </Router>


      </div>
    )
  }
}