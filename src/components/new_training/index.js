import React, { Component } from 'react';
import DB from '../../libs/db';
import ExerciseFields from './exercise_fields';

export default class NewTraining extends Component {

  constructor(props) {
    super(props);

    this.state = {
      titleField: '',
      exerciseComponents: [],
      exerciseFields: []
    };
  }

  _clearStates() {
    this.setState({
      titleField: '',
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

  _onInputChange(e) {
    this.setState({
      titleField: e.target.value
    });
  }

  _removeExercise(i) {
    const key = i + '';
    const exerciseList = this.state.exerciseComponents.filter((exercise) => {
      return exercise.key !== key;
    });

    this.setState({
      exerciseComponents: exerciseList
    });
  }

  _updateExerciseFields(fieldId, params) {
    let fields = this.state.exerciseFields;
    const index = fields.map((x) => { return Object.keys(x)[0]; })
                        .indexOf(fieldId);

    if (index >= 0) {
      fields[index][fieldId] = params;
    } else {
      fields.push({ [fieldId]: params });
    }

    return fields;
  }

  _onExerciseInputChange(fieldId, params) {
    const fields = this._updateExerciseFields(fieldId, params);

    this.setState({
      exerciseFields: fields
    });
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

    this.setState({
      exerciseComponents: exerciseComponents
    });
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

              <input className="form-control"
               id="title"
               value={this.state.titleField}
               onChange={this._onInputChange.bind(this)} />

              { this._renderExerciseList() }

              <button type="button"
               className="btn btn-primary btn-sm mt-1"
               id="add"
               onClick={this._onButtonAddExercise.bind(this)}>
                Add Exercise
              </button>
            </div>

            <input type="submit"
             className="btn btn-success btn-block mt-2"
             value="Register it!" />
          </form>
      </div>
    )
  }
};
