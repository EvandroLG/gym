import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Menu from './menu';
import TrainingList from './training_list';
import Register from './register';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Menu />
          <div className="content">
            <Route exact path="/" component={TrainingList} />
            <Route path="/register" component={Register} />
          </div>
        </div>
      </HashRouter>
    )
  }
};

export default Main;
