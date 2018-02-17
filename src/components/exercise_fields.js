import React, { Component } from 'react';

class ExerciseFields extends Component {

  render() {
    return (
      <div className="row form-group">
        <div className="col">
          <label htmlFor={`exercise_name_${this.props.index}`}>Name</label>
          <input type="text" className="form-control" id={`exercise_name_${this.props.index}`} />
        </div>
        <div className="col">
          <label htmlFor={`exercise_repetition_${this.props.id}`}>Repetition</label>
          <input type="text" className="form-control" id={`exercise_repetition_${this.props.index}`} />
        </div>
        <div className="col">
          <label htmlFor={`exercise_weight_${this.props.id}`}>Weight</label>
          <input type="text" className="form-control" id={`exercise_weight_${this.props.index}`} />
        </div>
        <div className="col">
          <button type="button" className="btn btn-danger"
           onClick={ () => this.props.onButtonRemoveExercise(this.props.index) }>
            Remove
          </button>
        </div>
      </div>
    )
  }
};

export default ExerciseFields;
