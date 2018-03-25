import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="disabled" className="nav-link">Training</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/new_training" activeClassName="disabled" className="nav-link">New Training</NavLink>
        </li>
      </ul>
    )
  }
};
