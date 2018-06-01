import React from 'react';
import { shallow } from 'enzyme';
import fixtures from './fixtures';
import DB from '../libs/db';
import TrainingList from '../components/training_list/';
import ShowVideo from '../components/training_list/ShowVideo';
import Training from '../components/training_list/Training';
import ExerciseField from '../components/training_list/ExerciseField';
import { mapStateToProps as mapStateTrainingList, mapDispatchToProps as mapDispatchTrainingList } from '../containers/TrainingList';
import { mapStateToProps as mapStateShowVideo, mapDispatchToProps as mapDispatchShowVideo  } from '../containers/ShowVideo';

jest.mock('../libs/db');

/* global verifySnapshot */

describe('containers', () => {
  describe('training list', () => {
    it('should return trainingList with correct value', () => {
      verifyMapStateToProps(mapStateTrainingList, {
        trainingList: fixtures
      }, 'trainingList', fixtures);
    });

    it('should return an object with onAddNewExercise', () => {
      const id = 1;
      verifyMapDispatchToProps(mapDispatchTrainingList, 'onAddNewExercise', [id], {
        type: 'ADD_NEW_EXERCISE',
        id
      });
    });

    it('should return an object with onRemoveExercise method', () => {
      const idTraining = 1;
      const idExercise = 2;

      verifyMapDispatchToProps(mapDispatchTrainingList, 'onRemoveExercise', [idTraining, idExercise], {
        type: 'REMOVE_EXERCISE',
        idTraining,
        idExercise
      });
    });

    it('should return an object with findAll method', () => {
      const mockCallback = jest.fn();
      mapDispatchTrainingList(mockCallback).findAll();

      expect(DB.prototype.findAll).toBeCalled();
      expect(DB.prototype.findAll.mock.calls[0]).toHaveLength(1);

      DB.prototype.findAll.mock.calls[0][0](fixtures);

      expect(mockCallback).toBeCalled();
      expect(mockCallback).toBeCalledWith({
        type: 'LOAD_TRAINING_LIST',
        trainingList: fixtures
      });
    });

    it('should return an object with onRemoveTraining', () => {
      const id = 1;

      verifyMapDispatchToProps(mapDispatchTrainingList, 'onRemoveTraining', [id], {
        type: 'REMOVE_TRAINING',
        id
      });

      expect(DB.prototype.remove).toBeCalled();
      expect(DB.prototype.remove).toBeCalledWith(id);
    });

    it('should return an object with onSubmit method', () => {
      const id = 1;
      const training = fixtures[0];

      mapDispatchTrainingList().onSubmit(id, training);

      expect(DB.prototype.update).toBeCalled();
      expect(DB.prototype.update).toBeCalledWith(id, training);
    });
  });

  describe('show video', () => {
    it('should return videoUrl with right value', () => {
      const url = 'http://localhost:8080/video';
      verifyMapDispatchToProps(mapDispatchShowVideo, 'onVideoUrlChange', [url], {
        type: 'SET_VIDEO_URL',
        url
      });
    });

    it('should return an object with onVideoUrlChange', () => {
      const url = 'http://localhost:8080/video';
      verifyMapDispatchToProps(mapDispatchShowVideo, 'onVideoUrlChange', [url], {
        type: 'SET_VIDEO_URL',
        url
      });
    });
  });
});

describe('components', () => {
  describe('training list component', () => {
    it('should return an expected html structure and call findAll method', () => {
      const mockCallback = jest.fn();
      const props = {
        findAll: mockCallback,
        trainingList: fixtures
      };

      const trainingList = shallow(<TrainingList { ...props } />);

      expect(trainingList).toMatchSnapshot();
      expect(mockCallback).toBeCalled();
    });

  });

  describe('video component', () => {
    const mockCallback = jest.fn();
    const props = {
      videoUrl: 'http://localhost:8080/video',
      onVideoUrlChange: mockCallback
    };
    const showVideo = shallow(<ShowVideo { ...props } />);

    it('should return an expected html structure', () => {
      expect(showVideo).toMatchSnapshot();
    });

    it('should call method after click on close button', () => {
      showVideo.find('.remove').simulate('click');

      expect(mockCallback).toBeCalled();
      expect(mockCallback).toBeCalledWith('');
    });
  });

  describe('training component', () => {
    function mountTraining(keyProperty, mockCallback) {
      const props = {
        id: 1,
        exerciseList: fixtures[0].exerciseList,
        [keyProperty]: mockCallback,
      };

      return shallow(<Training { ...props } />);
    }

    it('should return html structure as expected', () => {
      expect(mountTraining()).toMatchSnapshot();
    });

    it('should call correct method after click on remove button', () => {
      const mockCallback = jest.fn();
      const training = mountTraining('onRemoveTraining', mockCallback);

      training.find('.remove').simulate('click');

      expect(mockCallback).toBeCalled();
      expect(mockCallback).toBeCalledWith(1);
    });

    it('should call correct method after submit form', () => {
      const mockCallback = jest.fn();
      const training = mountTraining('onSubmit', mockCallback);

      training.find('.edit').simulate('click');
      training.find('form').simulate('submit', {
        preventDefault: () => {}
      });

      expect(mockCallback).toMatchSnapshot();
    });
  });

  describe('exercise field component', () => {
    function mountExerciseField(keyProperty, mockCallback) {
      const props = {
        id: 1,
        property: 'name',
        value: 'Barbell Deadlift',
        [keyProperty]: mockCallback
      };

      return shallow(<ExerciseField { ...props } />);
    }

    it('should render component as expected', () => {
      expect(mountExerciseField()).toMatchSnapshot();
    });

    it('should call correct method after change on input', () => {
      const mockCallback = jest.fn();
      const exerciseField = mountExerciseField('onInputChange', mockCallback);
      const value = 'Pull-Down';

      exerciseField.find('input').simulate('change', {
        target: {
          value
        }
      });

      expect(mockCallback).toBeCalled()
      expect(mockCallback).toBeCalledWith(1, 'name', value);
    });
  });
});
