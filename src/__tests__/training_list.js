import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ExerciseField from '../components/training_list/exercise_field';

describe('training list', () => {

  it('should render as expected', () => {
    const component = shallow(<ExerciseField />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
  });
});
