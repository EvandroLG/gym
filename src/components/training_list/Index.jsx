import React, { Component } from 'react';
import ShowVideo from '../../containers/ShowVideo';
import Training from '../../containers/Training';

export default class TrainingList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.findAll();
  }

  _getTrainingList() {
    this.db.findAll(this._populateTrainingList.bind(this));
  }

  _renderTrainingList() {
    return this.props.trainingList.map(({ id, title, exerciseList }) => {
      const props = {
        id,
        title,
        exerciseList,
        onChangeTitle: this.props.onChangeTitle,
        onRemoveTraining: this.props.onRemoveTraining,
        onChangeExercise: this.props.onChangeExercise,
        onRemoveExercise: this.props.onRemoveExercise,
        onAddNewExercise: () => { this.props.onAddNewExercise(id) },
        onSubmit: this.props.onSubmit
      };

      return <Training key={ id } { ...props } />;
    });
  }

  render() {
    return (
      <div>
        <h1>Current Training</h1>

        <ul className="list-group">
          { this._renderTrainingList() }
        </ul>

        <ShowVideo />
      </div>
    )
  }
}
