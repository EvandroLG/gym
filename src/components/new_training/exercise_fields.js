import React, { Component } from 'react';

export default class ExerciseFields extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      repetition: '',
      weight: '',
      set: '',
      youtube: ''
    };
  }

  componentDidMount() {
    if (this.nameInput) {
      this.nameInput.focus();
    }
  }

  onInputChange(e) {
    const key = e.target.id.split('_')[1];

    this.setState({
      [key]: e.target.value
    }, () => {
      this.props.onInputChange(this.props.index + '', this.state)
    });
  }

  render() {
    return (
      <div className="row form-group mt-1 d-flex">
        <div className="col">
          <label htmlFor={`exercise_name_${this.props.index}`}>Name</label>

          <input type="text" className="form-control"
            ref={ (input) => this.nameInput = input }
            id={`exercise_name_${this.props.index}`}
            onChange={this.onInputChange.bind(this)} />
        </div>

        <div className="col">
          <label htmlFor={`exercise_set_${this.props.index}`}>Set</label>

          <input type="text" className="form-control"
            id={`exercise_set_${this.props.index}`}
            onChange={this.onInputChange.bind(this)} />
        </div>

        <div className="col">
          <label htmlFor={`exercise_repetition_${this.props.index}`}>Repetition</label>

          <input type="text" className="form-control"
            id={`exercise_repetition_${this.props.index}`}
            onChange={this.onInputChange.bind(this)} />
        </div>

        <div className="col">
          <label htmlFor={`exercise_weight_${this.props.index}`}>Weight</label>

          <input type="text" className="form-control"
            id={`exercise_weight_${this.props.index}`}
            onChange={this.onInputChange.bind(this)} />
        </div>

        <div className="col">
          <label htmlFor={`exercise_youtube_${this.props.index}`}>Youtube</label>

          <input type="text" className="form-control"
            id={`exercise_youtube_${this.props.index}`}
            onChange={this.onInputChange.bind(this)} />
        </div>

        <div className="col align-self-center">
          <button type="button" className="btn btn-danger btn-sm"
            onClick={ () => this.props.onButtonRemoveExercise(this.props.index) }>
            Remove
          </button>
        </div>
      </div>
    )
  }
}
