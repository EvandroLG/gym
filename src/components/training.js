import React, { Component } from 'react';

class Training extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  renderExerciseTr(exercise, key) {
    return (
      <tr key={ key }>
        <td>{ exercise[key].name }</td>
        <td>{ exercise[key].set }</td>
        <td>{ exercise[key].repetition }</td>
        <td>{ exercise[key].weight }</td>
      </tr>
    )
  }

  renderExerciseForm(exercise, key) {
    return (
      <tr key={ key }>
        <td>
          <input type="text" defaultValue={ exercise[key].name } />
        </td>
        <td>
          <input type="text" defaultValue={ exercise[key].set } />
        </td>
        <td>
          <input type="text" defaultValue={ exercise[key].repetition } />
        </td>
        <td>
          <input type="text" defaultValue={ exercise[key].weight } />
        </td>
      </tr>
    )
  }

  _renderExerciseList() {
    const editing = this.state.editing;

    return this.props.exercises.map((exercise, key) => {
      return this[editing ? 'renderExerciseForm' : 'renderExerciseTr'](exercise, key);
    });
  }

  _onEditButtonClick() {
    this.setState({
      editing: true
    });
  }

  _renderInputTitle() {
    return (
      <input type="text" defaultValue={ this.props.title } />
    )
  }

  _renderTitle() {
    return (
      <h4>{ this.props.title }</h4>
    )
  }

  _renderTable() {
    return (
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
    )
  }

  _onFormSubmit() {
    this.setState({
      editing: false
    });
  }

  _renderSubmitButton() {
    if (!this.state.editing) { return; }

    return (
      <input type="submit" className="btn btn-success btn-sm float-right" value="Save!" />
    )
  }

  render() {
    return (
      <li className="list-group-item">
        <div className="btn-group float-right mb-1">
          <button type="button" className="btn btn-primary btn-sm"
           onClick={ this._onEditButtonClick.bind(this) }>
            Edit
          </button>

          <button type="button" className="btn btn-danger btn-sm"
           onClick={ () => this.props.onButtonClick(this.props.index) }>
            Remove
          </button>
        </div>

        <form onSubmit={ this._onFormSubmit.bind(this) }>
          { this[this.state.editing ? '_renderInputTitle' : '_renderTitle']() }
          { this._renderTable() }
          { this._renderSubmitButton() }
        </form>
      </li>
    )
  }
};

export default Training
