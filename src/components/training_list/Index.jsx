import React, { Component } from 'react';
import ShowVideo from './ShowVideo';
import Training from './Training';
import DB from '../../libs/db';

import './Index.css';

export default class TrainingList extends Component {

  constructor(props) {
    super(props);

    this.db = new DB();
    this.state = {
      trainingList: []
    };
  }

  componentDidMount() {
    this._getTrainingList();
  }

  _removeTraining(i) {
    const key = i + '';
    const trainingList = this.state.trainingList.filter((training) => {
      return training.key !== key;
    });

    this.setState({ trainingList });

    this.db.remove(i);
  }

  _populateTrainingList(params) {
    params.forEach((param) => {
      let props = {
        index: param.id,
        title: param.title,
        exercises: param.exercises,
        onButtonClick: this._removeTraining.bind(this)
      };

      let training = <Training key={ param.id } {...props} />;

      this.setState({
        trainingList: this.state.trainingList.concat(training)
      });
    });
  }

  _getTrainingList() {
    this.db.findAll(this._populateTrainingList.bind(this));
  }

  _renderTrainingList() {
    return this.state.trainingList.map((training) => {
      return training;
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
