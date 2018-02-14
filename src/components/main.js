import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Menu from './menu';
import Training from './training';
import Register from './register';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Menu />
          <div className="content">
            <Route path="/" component={Training} />
            <Route path="register" component={Register} />
          </div>
        </div>
      </HashRouter>
    )
  }
};

export default Main;
