import React from 'react';
import { shallow, mount } from 'enzyme';
import DB from '../libs/db';
import NewTraining from '../components/new_training/Index';
import ExerciseFields from '../components/new_training/ExerciseFields';

/* global verifySnapshot */

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
    function simulateChangeToExercise(field, v) {
      newTraining.find('#exercise_name_0').simulate('change', {
        target: {
          id: `exercise_${field}_0`,
          value: v
        }
      });
    }

    function addExercise() {
      const name = 'Bench press';
      simulateChangeToExercise('name', name);

      const set = '3';
      simulateChangeToExercise('set', set);

      const repetition = '8';
      simulateChangeToExercise('repetition', repetition);

      const weight = '30kg';
      simulateChangeToExercise('weight', weight);

      return {
        name,
        set,
        repetition,
        weight
      };
    }

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

      const exercise = addExercise();
      const stateFields = newTraining.state().exerciseFields[0]['0'];

      expect(newTraining.state().exerciseComponents).toHaveLength(1);
      expect(newTraining.state().exerciseFields).toHaveLength(1);
      expect(stateFields.name).toEqual(exercise.name);
      expect(stateFields.set).toEqual(exercise.set);
      expect(stateFields.repetition).toEqual(exercise.repetition);
      expect(stateFields.weight).toEqual(exercise.weight);

      newTraining.instance()._clearStates();
    });

    it('should save exercises in indexddb on submit and clean the states', () => {
      DB.prototype._initialize = () => {};
      let params = null;
      DB.prototype.insert = (_params) => {
        params = _params;
      };

      const title = 'Chest';
      newTraining.find('#title').simulate('change', {
        target: {
          value: title
        }
      });

      newTraining.find('#add').simulate('click');
      const exercise = addExercise();
      newTraining.find('form').simulate('submit');
      const exercises = params.exercises[0];

      expect(params.title).toEqual(title);
      expect(exercises.name).toEqual(exercise.name);
      expect(exercises.repetition).toEqual(exercise.repetition);
      expect(exercises.weight).toEqual(exercise.weight);

      const state = newTraining.state();
      expect(state.titleField).toEqual('');
      expect(state.exerciseComponents).toHaveLength(0);
      expect(state.exerciseFields).toHaveLength(0);
    });
  });
});
