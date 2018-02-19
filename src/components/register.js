import React, { Component } from 'react';
import DB from '../libs/db';
import ExerciseFields from './exercise_fields';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titleField: null,
      exerciseComponents: [],
      exerciseFields: []
    };
  }

  onFormSubmit(e) {
    e.preventDefault();

    const db = new DB();
    db.createSchema();

    db.insert({
      title: this.state.titleField,
      exercises: this.state.exerciseFields
    });
  }

  onInputChange(e) {
    this.setState({
      titleField: e.target.value
    });
  }

  removeExercise(i) {
    let state = this.state.exerciseComponents;
    state.splice(i, 1);

    this.setState({ exerciseComponents: state });
  }

  _updateExerciseFields(fieldId, params) {
    let fields = this.state.exerciseFields;
    const index = fields.map((x) => { return Object.keys(x)[0]; })
                        .indexOf(fieldId);

    if (index >= 0) {
      fields[index][fieldId] = params;
    } else {
      fields.push({
        [fieldId]: params
      });
    }

    return fields;
  }

  onExerciseInputChange(fieldId, params) {
    const fields = this._updateExerciseFields(fieldId, params);

    this.setState({
      exerciseFields: fields
    });
  }

  onButtonAddExercise() {
    let exerciseComponents = this.state.exerciseComponents;
    const id = exerciseComponents.length;
    const props = {
      index: id,
      onButtonRemoveExercise: this.removeExercise.bind(this),
      onInputChange: this.onExerciseInputChange.bind(this)
    }

    this.setState({
      exerciseComponents: exerciseComponents.concat(
        <ExerciseFields key={ id } {...props} />)
    });
  }

  render() {
    return (
      <div>
        <h1>Register a new training</h1>

          <form onSubmit={this.onFormSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="title" value={this.state.titleField}>Title</label>
              <input className="form-control" id="title" onChange={this.onInputChange.bind(this)} />
            </div>

            {
              this.state.exerciseComponents.map((fields) => {
                return fields;
              })
            }

            <button type="button" className="btn btn-success" onClick={this.onButtonAddExercise.bind(this)}>
              Add Exercise
            </button>
            <input type="submit" className="btn btn-primary" value="Register it!" />
          </form>
      </div>
    )
  }
};

export default Register;
