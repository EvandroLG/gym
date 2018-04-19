import React from 'react';
import { shallow } from 'enzyme';
import ExerciseField from '../components/training_list/exercise_field';

describe('training list', () => {

  it('execise field component should render as expected', () => {
    const component = shallow(<ExerciseField />);
    verifySnapshot(component);
  });
});
