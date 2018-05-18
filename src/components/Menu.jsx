import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <ul className="nav">
        <li>
          <NavLink exact to="/" activeClassName="disabled">Training</NavLink>
        </li>
        <li>
          <NavLink to="/new_training" activeClassName="disabled">New Training</NavLink>
        </li>
      </ul>
    )
  }
}
