import React, { Component } from 'react';
import ExerciseField from './ExerciseField';

import './Training.css';

export default class Training extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };

    this._onChangeExercise = this._onChangeExercise.bind(this);
    this._onFormSubmit = this._onFormSubmit.bind(this);
    this._onEditButtonClick = this._onEditButtonClick.bind(this);
  }

  _renderButtonWatchVideo(url) {
    if (url) {
      return (
        <td>
          <button type="button" onClick={ () => this.props.onVideoUrlChange(url) }>
            Watch
          </button>
        </td>
      );
    }

    return <td>---</td>;
  }

  _renderExerciseTr(exercise, key) {
    return (
      <tr key={ key }>
        <td>{ exercise.name }</td>
        <td>{ exercise.set }</td>
        <td>{ exercise.repetition }</td>
        <td>{ exercise.weight }</td>
        { this._renderButtonWatchVideo(exercise.youtube) }
        <td></td>
      </tr>
    )
  }

  _onChangeExercise(idExercise, property, value) {
    const { id, onChangeExercise } = this.props;
    onChangeExercise(id, idExercise, property, value);
  }

  _renderExerciseField(exercise) {
    const { id } = exercise;

    return ['name', 'set', 'repetition', 'weight', 'youtube'].map((value, index) => {
      const key = `${id}_${index}`;

      return (
        <ExerciseField
          key={key}
          id={id}
          value={ exercise[value] }
          property={ value }
          onInputChange={ this._onChangeExercise }
        />
      )
    });
  };

  _renderExerciseForm(exercise) {
    const { id } = exercise;

    return (
      <tr key={ id }>
        { this._renderExerciseField(exercise) }
        <td>
          <button
            type="button"
            className="remove"
            onClick={ () => this.props.onRemoveExercise(this.props.id, id) }>
            Remove
          </button>
        </td>
      </tr>
    )
  }

  _renderExerciseList() {
    const editing = this.state.editing;

    return this.props.exerciseList.map((exercise, key) => {
      return this[editing ? '_renderExerciseForm' : '_renderExerciseTr'](exercise, key);
    });
  }

  _onEditButtonClick() {
    this.setState({
      editing: true
    });
  }

  _renderInputTitle() {
    return (
      <input
        type="text"
        onChange={ (e) => this.props.onChangeTitle(this.props.id, e.target.value) }
        value={ this.props.title }
      />
    )
  }

  _renderTitle() {
    return (
      <h3>{ this.props.title }</h3>
    )
  }

  _renderAddButton() {
    if (!this.state.editing) { return; }

    return (
      <tr>
        <td colSpan="6">
          <button type="button" onClick={ this.props.onAddNewExercise }
            className="add">
            Add
          </button>
        </td>
      </tr>
    )
  }

  _renderTable() {
    return (
      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Set</th>
            <th>Repetition</th>
            <th>Weight</th>
            <th>Video</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { this._renderExerciseList() }
          { this._renderAddButton() }
        </tbody>
      </table>
    )
  }

  _onFormSubmit(e) {
    e.preventDefault();

    this.setState({
      editing: false
    });

    const { id, exerciseList, title } = this.props;
    const training = {
      title,
      exerciseList
    };

    this.props.onSubmit(id, training);
  }

  _renderSubmitButton() {
    if (!this.state.editing) { return; }

    return (
      <input type="submit" value="Save!" />
    )
  }

  render() {
    return (
      <li>
        <div className="btn-group">
          <button
            type="button"
            className="edit"
            onClick={ this._onEditButtonClick }>
            Edit
          </button>

          <button
            type="button"
            className="remove"
            onClick={ () => this.props.onRemoveTraining(this.props.id) }>
            Remove
          </button>
        </div>

        <form onSubmit={ this._onFormSubmit }>
          { this[this.state.editing ? '_renderInputTitle' : '_renderTitle']() }
          { this._renderTable() }
          { this._renderSubmitButton() }
        </form>
      </li>
    )
  }
}
