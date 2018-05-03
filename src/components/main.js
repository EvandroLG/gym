import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Menu from './menu';
import TrainingList from './training_list/index';
import NewTraining from './new_training/index';

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
