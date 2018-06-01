import React from 'react';
import { shallow, mount } from 'enzyme';
import fixtures from './fixtures';
import DB from '../libs/db';
import NewTraining from '../components/new_training/Index';
import ExerciseFields from '../components/new_training/ExerciseFields';
import { mapStateToProps as mapStateNewTraining, mapDispatchToProps } from '../containers/NewTraining';
jest.mock('../libs/db');

/* global verifySnapshot */

describe('container', () => {
  it('should contains title and exerciseList with correct values in mapStateToProps', () => {
    const { title, exerciseList } = fixtures[0];

    verifyMapStateToProps(mapStateNewTraining, {
      newTraining: { title }
    }, 'title', title);

    verifyMapStateToProps(mapStateNewTraining, {
      newTraining: { exerciseList }
    }, 'exerciseList',  exerciseList);
  });

  it('should return onTitleUpdate method', () => {
    const title = 'Arms';

    verifyMapDispatchToProps(mapDispatchToProps, 'onTitleUpdate', [title], {
      type: 'SET_TITLE_NEW_TRAINING',
      title
    });
  });

  it('should return onAddExercise method', () => {
    verifyMapDispatchToProps(mapDispatchToProps, 'onAddExercise', [], {
      type: 'ADD_EXERCISE_NEW_TRAINING'
    });
  });

  it('should return onRemoveExercise', () => {
    const id = 1;
    verifyMapDispatchToProps(mapDispatchToProps, 'onRemoveExercise', [id], {
      type: 'REMOVE_EXERCISE_NEW_TRAINING',
      id
    });
  });

  it('should return onUpdateExercise', () => {
    const id = 1;
    const fieldName = 'name';
    const value = 'Pull-Down';

    verifyMapDispatchToProps(mapDispatchToProps, 'onUpdateExercise', [id, fieldName, value], {
      type: 'SET_FIELD_NEW_TRAINING',
      id,
      fieldName,
      value
    });
  });

  it('it should return onSubmit', () => {
    const mockCallback = jest.fn();
    const { title, exerciseList } = fixtures[0];

    mapDispatchToProps(mockCallback).onSubmit(title, exerciseList);

    expect(DB.prototype.insert).toBeCalled();
    expect(DB.prototype.insert.mock.calls[0][0]).toEqual({
      title,
      exerciseList
    });

    DB.prototype.insert.mock.calls[0][1]();

    expect(mockCallback).toBeCalled();
    expect(mockCallback).toBeCalledWith({
      type: 'EMPTY_NEW_TRAINING'
    });
  });
});

describe('components', () => {

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
