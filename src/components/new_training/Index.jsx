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

  _onExerciseInputChange(fieldId, params) {
    const exerciseFields = this._updateExerciseFields(fieldId, params);
    this.setState({ exerciseFields });
  }

  _renderExerciseList() {
    return this.props.exerciseList.map((exercise) => {
      return (
        <ExerciseFields
          key = {exercise.id}
          {...exercise}
          onButtonRemoveExercise = { () => this.props.onRemoveExercise(exercise.id) }
          onInputChange = { this.props.onUpdateExercise }
        />
      )
    });
  }

  render() {
    return (
      <div>
        <h1>Register a new training</h1>

        <form onSubmit={this._onFormSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="title">Title</label>

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
              onClick={this.props.onAddExercise}>
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
