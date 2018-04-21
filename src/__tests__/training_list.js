import React from 'react';
import { shallow } from 'enzyme';
import DB from '../libs/db';
import ExerciseField from '../components/training_list/exercise_field';
import Training from '../components/training_list/training';
import fixtures from './fixtures';

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
        title: 'Back',
        exercises: fixtures.legs,
        onButtonClick: () => {}
      };

      const component = shallow(<Training key={ props.index } { ...props } />);
      verifySnapshot(component);
    });
  });
});
