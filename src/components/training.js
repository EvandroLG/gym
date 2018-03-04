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
        <div className="btn-group float-right mb-1">
          <button type="button" className="btn btn-primary btn-sm">
            Edit
          </button>

          <button type="button" className="btn btn-danger btn-sm"
           onClick={ () => this.props.onButtonClick(this.props.index) }>
            Remove
          </button>
        </div>

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
