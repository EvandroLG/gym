import React, { Component } from 'react';
import Training from './training';
import DB from '../libs/db';

class TrainingList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      trainingList: []
    };
  }

  componentDidMount() {
    this._getTrainingList();
  }

  _populateTrainingList(params) {
    let key = this.state.trainingList.length - 1;

    params.forEach((param) => {
      key = key + 1;
      let props = {
        title: param.title,
        exercises: param.exercises
      };

      let training = <Training key={ key } {...props} />;

      this.setState({
        trainingList: this.state.trainingList.concat(training)
      });
    });
  }

  _getTrainingList() {
    new DB().findAll(this._populateTrainingList.bind(this));
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
      </div>
    )
  }
};

export default TrainingList;
