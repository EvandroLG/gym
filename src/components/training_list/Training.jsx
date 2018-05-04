import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVideoUrl } from '../../action_creators';
import ExerciseField from './ExerciseField';
import DB from '../../libs/db';

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

  _onExerciseInputChange(e, key, property) {
    let exercises = this.state.exercises;
    exercises[key][property] = e.target.value;

    this.setState({ exercises });
  }

  _onRemoveButtonClick(index) {
    this.state.exercises.splice(index, 1);
    this.setState({
      exercises: this.state.exercises
    });
  }

  _renderExerciseForm(exercise, key) {
    const onExerciseInputChange = this._onExerciseInputChange.bind(this);

    return (
      <tr key={ key }>
        <ExerciseField value={ exercise.name } index={ key } property='name'
          onInputChange={ onExerciseInputChange } />
        <ExerciseField value={ exercise.set } index={ key } property='set'
          onInputChange={ onExerciseInputChange } />
        <ExerciseField value={ exercise.repetition } index={ key } property='repetition'
          onInputChange={ onExerciseInputChange } />
        <ExerciseField value={ exercise.weight } index={ key } property='weight'
          onInputChange={ onExerciseInputChange } />
        <ExerciseField value={ exercise.youtube } index={ key } property='youtube'
          onInputChange={ onExerciseInputChange } />

        <td>
          <button type="button" className="btn btn-danger btn-sm"
            onClick={ () => this._onRemoveButtonClick(key) }>
            Remove
          </button>
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

  _onButtonAddClick() {
    this.setState({
      exercises: this.state.exercises.concat({
        name: '',
        set: '',
        repetition: '',
        weight: '',
        youtube: ''
      })
    });
  }

  _renderAddButton() {
    if (!this.state.editing) { return; }

    return (
      <tr>
        <td colSpan="5">
          <button type="button" onClick={ this._onButtonAddClick.bind(this) }
            className="btn btn-sm btn-primary float-right">
            Add
          </button>
        </td>
      </tr>
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
            <th className="col">Video</th>
            <th className="col"></th>
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

    const exercises = this.state.exercises.filter((exercise) => {
      return exercise.name;
    });

    const props = {
      title: this.state.title,
      exercises
    };

    this.setState({ exercises });

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
}

const mapStateToProps = (state) => {
  return {
    videoUrl: state.videoUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onVideoUrlChange: (url) => {
      dispatch(setVideoUrl(url));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Training);
