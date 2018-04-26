import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Menu from './menu';
import TrainingList from './training_list/index';
import NewTraining from './new_training/index';

export default class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Menu />
          <div className="content">
            <Route exact path="/" component={TrainingList} />
            <Route path="/new_training" component={NewTraining} />
          </div>
        </div>
      </HashRouter>
    )
  }
}
