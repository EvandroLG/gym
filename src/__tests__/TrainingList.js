import React from 'react';
import { shallow } from 'enzyme';
import fixtures from './fixtures';
import TrainingList from '../components/training_list/';
import ShowVideo from '../components/training_list/ShowVideo';
import Training from '../components/training_list/Training';

/* global verifySnapshot */

describe('training list', () => {
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
    const props = {
      exerciseList: fixtures[0].exerciseList
    };
    const training = shallow(<Training { ...props } />);

    it('should return html structure as expected', () => {
      expect(training).toMatchSnapshot();
    });
  });
});
