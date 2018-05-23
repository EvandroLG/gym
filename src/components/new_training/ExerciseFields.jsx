import React, { Component } from 'react';

export default class ExerciseFields extends Component {

  constructor(props) {
    super(props);
    this._onInputChange = this._onInputChange.bind(this);
  }

  componentDidMount() {
    if (this.nameInput) {
      this.nameInput.focus();
    }
  }

  _onInputChange(e) {
    const fieldName = e.target.id.split('_')[1];
    this.props.onInputChange(this.props.id, fieldName, e.target.value);
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <label htmlFor={`exercise_name_${this.props.id}`}>Name</label>

          <input
            type="text"
            ref={ (input) => this.nameInput = input }
            id={`exercise_name_${this.props.id}`}
            onChange={this._onInputChange} />
        </div>

        <div className="col">
          <label htmlFor={`exercise_set_${this.props.id}`}>Set</label>

          <input
            type="text"
            id={`exercise_set_${this.props.id}`}
            onChange={this._onInputChange} />
        </div>

        <div className="col">
          <label htmlFor={`exercise_repetition_${this.props.id}`}>Repetition</label>

          <input
            type="text"
            id={`exercise_repetition_${this.props.id}`}
            onChange={this._onInputChange} />
        </div>

        <div className="col">
          <label htmlFor={`exercise_weight_${this.props.id}`}>Weight</label>

          <input
            type="text"
            id={`exercise_weight_${this.props.id}`}
            onChange={this._onInputChange} />
        </div>

        <div className="col">
          <label htmlFor={`exercise_youtube_${this.props.id}`}>Youtube</label>

          <input
            type="text"
            id={`exercise_youtube_${this.props.id}`}
            onChange={this._onInputChange} />
        </div>

        <div className="col">
          <button
            type="button"
            className="remove"
            onClick={ () => this.props.onButtonRemoveExercise(this.props.id) }>
            Remove
          </button>
        </div>
      </div>
    )
  }
}
