import React from 'react';
import { shallow, mount } from 'enzyme';
import DB from '../libs/db';
import NewTraining from '../components/new_training/Index';
import ExerciseFields from '../components/new_training/ExerciseFields';

/* global verifySnapshot */

describe('new training', () => {

  it('new training component should render as expected', () => {
    const props = { title: '', exerciseList: [] };
    const newTraining = mount(<NewTraining { ...props } />);

    verifySnapshot(newTraining);
  });

  it('exercise fields component should render as expected', () => {
    const exerciseFields = shallow(<ExerciseFields />);
    verifySnapshot(exerciseFields);
  });

  describe('events', () => {

    function mountNewTraining(keyProp, mockCallback) {
      const props = {
        title: '',
        exerciseList: [],
        [keyProp]: mockCallback
      };

      return mount(<NewTraining { ...props } />);
    }

    it('should call correct callback after click on add button', () => {
      const mockCallback = jest.fn();
      const newTraining = mountNewTraining('onAddExercise', mockCallback) 

      newTraining.find('#add').simulate('click');
      expect(mockCallback.mock.calls.length).toBe(1);
    });

    it('should call correct callback after change title', () => {
      const mockCallback = jest.fn();
      const newTraining = mountNewTraining('onTitleUpdate', mockCallback);

      newTraining.find('#title').simulate('change', {
        target: {
          value: 'Chest'
        }
      });

      expect(mockCallback).toMatchSnapshot();
    });

    function mountExercise(keyProp, mockCallback) {
      const props = {
        id: 1,
        title: '',
        exerciseList: [],
        [keyProp]: mockCallback
      };

      return shallow(<ExerciseFields { ...props } />);
    }

    it('should call correct callback after change input', () => {
      const mockCallback = jest.fn();
      const exercise = mountExercise('onInputChange', mockCallback);
      const id = 'exercise_name_1';

      exercise.find(`#${id}`).simulate('change', {
        target: {
          id,
          value: 'Dumbbel Press'
        }
      });

      expect(mockCallback).toMatchSnapshot();
    });

    it('should call correct callback after click on remove button', () => {
      const mockCallback = jest.fn();
      const exercise = mountExercise('onButtonRemoveExercise', mockCallback);

      exercise.find('.remove').simulate('click');

      expect(mockCallback).toMatchSnapshot();
    });
  });
});
