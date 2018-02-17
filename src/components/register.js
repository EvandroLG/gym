import React, { Component } from 'react';
import ExerciseFields from './exercise_fields';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = { exerciseComponents: [] };
  }

  onInputSubmit(e) {
    console.log('submited');
    e.preventDefault();
  }

  removeExercise(i) {
    let state = this.state.exerciseComponents;
    state.splice(i, 1);
    this.setState({ exerciseComponents: state });
  }

  onButtonAddExercise() {
    let exerciseComponents = this.state.exerciseComponents;
    let id = exerciseComponents.length;

    this.setState({
      exerciseComponents: exerciseComponents.concat(
        <ExerciseFields key={ id } index={ id }
         onButtonRemoveExercise={ this.removeExercise.bind(this) } />)
    });
  }

  render() {
    return (
      <div>
        <h1>Register a new training</h1>

          <form onSubmit={this.onInputSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input className="form-control" id="title" />
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
