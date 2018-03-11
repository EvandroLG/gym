import React, { Component } from 'react';
import DB from '../libs/db';

class Training extends Component {

  constructor(props) {
    super(props);

    this.db = new DB();
    this.state = {
      editing: false,
      title: this.props.title,
      exercises: this.props.exercises
    };
  }

  _renderExerciseTr(exercise, key) {
    return (
      <tr key={ key }>
        <td>{ exercise[key].name }</td>
        <td>{ exercise[key].set }</td>
        <td>{ exercise[key].repetition }</td>
        <td>{ exercise[key].weight }</td>
      </tr>
    )
  }

  _renderExerciseForm(exercise, key) {
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

    return this.state.exercises.map((exercise, key) => {
      return this[editing ? '_renderExerciseForm' : '_renderExerciseTr'](exercise, key);
    });
  }

  _onEditButtonClick() {
    this.setState({
      editing: true
    });
  }

  _onInputTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  _renderInputTitle() {
    return (
      <input type="text" onChange={ this._onInputTitleChange.bind(this) }
        value={ this.state.title } />
    )
  }

  _renderTitle() {
    return (
      <h4>{ this.state.title }</h4>
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

  _onFormSubmit(e) {
    e.preventDefault();

    const props = {
      title: this.state.title,
      exercises: this.state.exercises
    };

    this.db.update(this.props.index, props, () => {
      this.setState({
        editing: false
      });
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
