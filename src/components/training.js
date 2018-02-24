import React, { Component } from 'react';

class Training extends Component {

  _renderExerciseList() {
    return this.props.exercises.map((exercise, key) => {
      return (
        <tr key={ key }>
          <td>{ exercise[key].name }</td>
          <td>{ exercise[key].repetition }</td>
          <td>{ exercise[key].weight }</td>
        </tr>
      )
    });
  }

  render() {
    return (
      <li className="list-group-item">
        <h2>{ this.props.title }</h2>

        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th className="col">Exercise</th>
              <th className="col">Repetition</th>
              <th className="col">Weight</th>
            </tr>
          </thead>
          <tbody>
            { this._renderExerciseList() }
          </tbody>
        </table>
      </li>
    )
  }
};

export default Training
