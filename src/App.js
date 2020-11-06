
import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import ListPage from './ListPage';
import CreatePage from './CreatePage';
import DetailPage from './DetailPage';
import { Link } from 'react-router-dom';
//import TruckPage from './TruckPage';

export default class App extends Component {


  render() {

    return (
      <div className="App">

        <Router>

          <Link to="/">Home</Link>


          <Switch>

            <Route
              path="/"
              exact
              render={(routerProps) => <ListPage {...routerProps} />}

            />

            <Route
              path="/create"
              exact
              render={(routerProps) => <CreatePage {...routerProps} />}
            />


            <Route
              path="/detail/:id"
              exact
              render={(routerProps) => <DetailPage {...routerProps} />}
            />
            {/* <Route
              path="/trucks"
              exact
              render={(routerProps) => <TruckPage {...routerProps} />}
            /> */}


          </Switch>
        </Router>


      </div >
    )
  }
}