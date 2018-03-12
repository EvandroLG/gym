import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Training</NavLink>
        </li>
        <li>
          <NavLink to="/new_training" className="nav-link">New Training</NavLink>
        </li>
      </ul>
    )
  }
};
