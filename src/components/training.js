import React, { Component } from 'react';

class Training extends Component {

  _renderExerciseList() {
    return this.props.exercises.map((exercise, key) => {
      return (
        <tr key={ key }>
          <td>{ exercise[key].name }</td>
          <td>{ exercise[key].set }</td>
          <td>{ exercise[key].repetition }</td>
          <td>{ exercise[key].weight }</td>
        </tr>
      )
    });
  }

  render() {
    return (
      <li className="list-group-item">
        <h4>{ this.props.title }</h4>
        <button type="button" className="btn btn-danger" onClick={ () => this.props.onButtonClick(this.props.index) }>
          Remove
        </button>

        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th className="col">Exercise</th>
              <th className="col">Set</th>
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
