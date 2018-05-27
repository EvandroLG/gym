import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Menu from './Menu';
import TrainingList from '../containers/TrainingList';
import NewTraining from '../containers/NewTraining';

import './Main.css';

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Menu />
          <div className="content">
            <Route exact path="/" component={TrainingList} />
            <Route path="/new_training" component={NewTraining} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
