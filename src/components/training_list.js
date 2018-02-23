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
    this._getTrainings();
  }

  _populateTrainings(params) {
    let key = this.state.trainingList.length - 1;

    params.forEach((param) => {
      key = key + 1;
      let training = <Training key={ key } title={ param.title } />;

      this.setState({
        trainingList: this.state.trainingList.concat(training)
      });
    });
  }

  _getTrainings() {
    const db = new DB();

    db.createSchema();
    db.findAll(this._populateTrainings.bind(this));
  }

  render() {
    return (
      <div>
        <h1>Current Training</h1>

        <ul>
          {
            this.state.trainingList.map((training) => {
              return training; 
            })
          }
        </ul>
      </div>
    )
  }
};

export default TrainingList;
