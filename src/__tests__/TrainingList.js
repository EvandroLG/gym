import React from 'react';
import { shallow } from 'enzyme';
import DB from '../libs/db';
import ExerciseField from '../components/training_list/ExerciseField';
import Training, { Unwrapped as UnwrappedTraining } from '../components/training_list/Training';
import TrainingList from '../components/training_list/Index';
import fixtures from './fixtures';

/* global verifySnapshot */

describe('training list', () => {
  describe('instances', () => {
    it('execise field component should render as expected', () => {
      const component = shallow(<ExerciseField />);
      verifySnapshot(component);
    });

    it('training component should render as expected', () => {
      DB.prototype._initialize = () => {}; 
      DB.prototype.update = () => {};

      const props = {
        index: '1',
        title: fixtures[0].title,
        exercises: fixtures[0].exercises,
        onButtonClick: () => {}
      };

      const component = shallow(<UnwrappedTraining key={ props.index } { ...props } />);
      verifySnapshot(component);
    });

    it('training list component should render as expected', () => {
      DB.prototype.findAll = (callback) => {
        callback(fixtures);
      };

      const component = shallow(<TrainingList />);
      verifySnapshot(component);
    });
  });
});
