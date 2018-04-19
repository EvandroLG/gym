import React from 'react';
import { shallow } from 'enzyme';
import NewTraining from '../components/new_training/index';
import ExerciseFields from '../components/new_training/exercise_fields';

describe('new training', () => {
  const newTraining = shallow(<NewTraining />);
  const exerciseFields = shallow(<ExerciseFields />);

  it('new training component should render as expected', () => {
    verifySnapshot(newTraining);
  });

  it('exercise fields component should render as expected', () => {
    verifySnapshot(exerciseFields);
  });

  describe('events', () => {
    it('should create a box with correct form fields after click on add button', () => {
      expect(newTraining.find(ExerciseFields)).toHaveLength(0);
      newTraining.find('#add').simulate('click');
      expect(newTraining.find(ExerciseFields)).toHaveLength(1);
      newTraining.find('#add').simulate('click');
      expect(newTraining.find(ExerciseFields)).toHaveLength(2);
    });

    it('should delete a box when delete button was clicked', () => {
      //newTraining.find('.btn-danger').first().simulate('click', { preventDefault() {} });
      //expect(newTraining.find(ExerciseFields)).toHaveLength(1);
    });
  });
});
