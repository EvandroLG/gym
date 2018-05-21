import React, { Component } from 'react';
import DB from '../../libs/db';
import ExerciseFields from './ExerciseFields';

import './Index.css';

export default class NewTraining extends Component {

  constructor(props) {
    super(props);

    this.state = {
      exerciseComponents: [],
      exerciseFields: []
    };
  }

  _clearStates() {
    this.setState({
      exerciseComponents: [],
      exerciseFields: []
    });
  }

  _onFormSubmit(e) {
    e.preventDefault();

    new DB().insert({
      title: this.state.titleField,
      exercises: this.state.exerciseFields.map((element) => {
        return element[Object.keys(element)[0]];
      })
    });

    this._clearStates();
  }

  _removeExercise(i) {
    const key = i + '';
    const exerciseComponents = this.state.exerciseComponents.filter((exercise) => {
      return exercise.key !== key;
    });

    this.setState({ exerciseComponents: exerciseComponents });
  }

  _updateExerciseFields(fieldId, params) {
    let fields = this.state.exerciseFields;
    const index = fields.map((x) => { return Object.keys(x)[0]; }).indexOf(fieldId);

    if (index >= 0) {
      fields[index][fieldId] = params;
    } else {
      fields.push({ [fieldId]: params });
    }

    return fields;
  }

  _onExerciseInputChange(fieldId, params) {
    const exerciseFields = this._updateExerciseFields(fieldId, params);
    this.setState({ exerciseFields });
  }

  _onButtonAddExercise() {
    let exerciseComponents = this.state.exerciseComponents;
    const id = exerciseComponents.length;
    const props = {
      index: id,
      onButtonRemoveExercise: this._removeExercise.bind(this),
      onInputChange: this._onExerciseInputChange.bind(this)
    }

    exerciseComponents.push(
      <ExerciseFields key={ id } {...props} />
    )

    this.setState({ exerciseComponents });
  }

  _renderExerciseList() {
    return this.state.exerciseComponents.map((fields) => {
      return fields;
    });
  }

  render() {
    return (
      <div>
        <h1>Register a new training</h1>

        <form onSubmit={this._onFormSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="title" value={this.state.titleField}>Title</label>

            <input
              type="text"
              id="title"
              value={this.props.title}
              onChange={ (e) => this.props.onTitleUpdate(e.target.value) }
            />

            { this._renderExerciseList() }

            <button
              type="button"
              className="add"
              id="add"
              onClick={this._onButtonAddExercise.bind(this)}>
              Add Exercise
            </button>
          </div>

          <input
            type="submit"
            value="Register it!"
          />
        </form>
      </div>
    )
  }
}
