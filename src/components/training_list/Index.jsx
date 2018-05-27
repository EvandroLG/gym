import React, { Component } from 'react';
import ShowVideo from '../../containers/ShowVideo';
import Training from '../../containers/Training';
import DB from '../../libs/db';

export default class TrainingList extends Component {

  constructor(props) {
    super(props);

    this.db = new DB();
  }

  componentDidMount() {
    this.props.findAll();
  }

  _removeTraining(i) {
    const key = i + '';
    const trainingList = this.state.trainingList.filter((training) => {
      return training.key !== key;
    });

    this.setState({ trainingList });

    this.db.remove(i);
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
