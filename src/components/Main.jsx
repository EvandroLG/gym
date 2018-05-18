import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Menu from './Menu';
import TrainingList from './training_list/Index';
import NewTraining from './new_training/Index';

import './Main.css';

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <Menu />
            <div className="content">
              <Route exact path="/" component={TrainingList} />
              <Route path="/new_training" component={NewTraining} />
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}
