import React from 'react';
import { shallow, mount } from 'enzyme';
import fixtures from './fixtures';
import NewTraining from '../components/new_training/Index';
import ExerciseFields from '../components/new_training/ExerciseFields';

/* global verifySnapshot */

describe('new training', () => {

  describe('new training component', () => {
    function mountNewTraining(keyProp, mockCallback) {
      const props = {
        title: '',
        exerciseList: [],
        [keyProp]: mockCallback
      };

      return mount(<NewTraining { ...props } />);
    }

    it('new training component should render as expected', () => {
      const newTraining = mountNewTraining();
      verifySnapshot(newTraining);
    });

    it('should call correct callback after click on add button', () => {
      const mockCallback = jest.fn();
      const newTraining = mountNewTraining('onAddExercise', mockCallback) 

      newTraining.find('#add').simulate('click');
      expect(mockCallback).toBeCalled();
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

    it('should call correct method after submit form', () => {
      const { title, exerciseList } = fixtures[0];
      const mockCallback = jest.fn();

      const props = {
        title,
        exerciseList,
        onSubmit: mockCallback
      };

      const newTraining = mount(<NewTraining { ...props } />);

      newTraining.find('form').simulate('submit', {
        preventDefault: () => {}
      });

      expect(mockCallback).toBeCalled();
      expect(mockCallback).toBeCalledWith(title, exerciseList);
    });
  });

  describe('exercise fields component', () => {
    function mountExerciseFields(keyProperty, mockCallback) {
      const props = {
        id: 1,
        [keyProperty]: mockCallback
      };

      return shallow(<ExerciseFields { ...props } />);
    }

    it('exercise fields component should render as expected', () => {
      const exerciseFields = mountExerciseFields();
      verifySnapshot(exerciseFields);
    });

    it('should call correct method after change input', () => {
      const mockCallback = jest.fn();
      const exerciseFields = mountExerciseFields('onInputChange', mockCallback);
      const id = 'exercise_name_1';
      const value = 'Pull-Down';

      exerciseFields.find(`#${id}`).simulate('change', {
        target: {
          id,
          value
        }
      });

      expect(mockCallback).toBeCalled();
      expect(mockCallback).toBeCalledWith(1, 'name', value);
    });

    it('should call correct callback after click on remove button', () => {
      const mockCallback = jest.fn();
      const exercise = mountExerciseFields('onButtonRemoveExercise', mockCallback);

      exercise.find('.remove').simulate('click');

      expect(mockCallback).toMatchSnapshot();
    });
  });
});
