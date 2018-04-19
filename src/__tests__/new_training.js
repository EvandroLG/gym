import React from 'react';
import { shallow, mount } from 'enzyme';
import NewTraining from '../components/new_training/index';
import ExerciseFields from '../components/new_training/exercise_fields';

describe('new training', () => {
  const newTraining = mount(<NewTraining />);
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
      newTraining.find('.btn-danger').first().simulate('click');
      expect(newTraining.find(ExerciseFields)).toHaveLength(1);

      newTraining.find('.btn-danger').first().simulate('click');
      expect(newTraining.find(ExerciseFields)).toHaveLength(0);
    });

    it('should save title in state on change', () => {
      const component = shallow(<NewTraining />);
      const value = 'Chest';

      component.find('#title').simulate('change', {
        target: {
          value: value
        }
      });

      expect(component.state().titleField).toEqual(value);
    });

    it('should save exercises in state on change', () => {
      expect(newTraining.state().exerciseComponents).toHaveLength(0);
      expect(newTraining.state().exerciseFields).toHaveLength(0);

      newTraining.find('#add').simulate('click');

      function simulateChange(field, v) {
        newTraining.find('#exercise_name_0').simulate('change', {
          target: {
            id: `exercise_${field}_0`,
            value: v
          }
        });
      }

      const name = 'Bench press';
      simulateChange('name', name);

      const set = '3';
      simulateChange('set', set);

      const repetition = '8';
      simulateChange('repetition', repetition);

      const weight = '30kg';
      simulateChange('weight', weight);

      const stateFields = newTraining.state().exerciseFields[0]['0'];

      expect(newTraining.state().exerciseComponents).toHaveLength(1);
      expect(newTraining.state().exerciseFields).toHaveLength(1);
      expect(stateFields.name).toEqual(name);
      expect(stateFields.set).toEqual(set);
      expect(stateFields.repetition).toEqual(repetition);
      expect(stateFields.weight).toEqual(weight);
    });
  });
});
