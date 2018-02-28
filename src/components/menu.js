import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Current Training</NavLink>
        </li>
        <li>
          <NavLink to="register" className="nav-link">New Training</NavLink>
        </li>
      </ul>
    )
  }
};

export default Menu;
