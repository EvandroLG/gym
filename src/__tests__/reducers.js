import reducers from '../reducers';
import fixtures from './fixtures';

describe('reducers', () => {

  describe('video url', () => {
    it('should handle SET_VIDEO_URL', () => {
      const url = 'https://www.youtube.com/watch?v=04p4MWfhpAI';

      const state = reducers(undefined, {
        type: 'SET_VIDEO_URL',
        url
      });

      expect(state).toMatchSnapshot();
    });
  });

  describe('new training', () => {
    it('should handle SET_TITLE_NEW_TRAINING', () => {
      const { title } = fixtures[0];
      const state = reducers(undefined, {
        type: 'SET_TITLE_NEW_TRAINING',
        title
      });

      expect(state).toMatchSnapshot();
    });

    it('should handle ADD_EXERCISE_NEW_TRAINING', () => {
      const state = reducers(undefined, {
        type: 'ADD_EXERCISE_NEW_TRAINING',
      });

      expect(state).toMatchSnapshot();
    });

    it('should handle REMOVE_EXERCISE_NEW_TRAINING', () => {
      const state = reducers({
        videoUrl: '',
        trainingList: [],
        newTraining: fixtures[0]
      }, {
        type: 'REMOVE_EXERCISE_NEW_TRAINING',
        id: 0
      });

      expect(state).toMatchSnapshot();
    });

    it('should handle SET_FIELD_NEW_TRAINING', () => {
      const state = reducers({
        videoUrl: '',
        trainingList: [],
        newTraining: fixtures[0]
      }, {
        type: 'SET_FIELD_NEW_TRAINING',
        id: 0,
        fieldName: 'name',
        value: 'Pull-Down'
      });

      expect(state).toMatchSnapshot();
    });

    it('should handle EMPTY_NEW_TRAINING', () => {
      const state = reducers({
        videoUrl: '',
        trainingList: [],
        newTraining: fixtures[0]
      }, {
        type: 'EMPTY_NEW_TRAINING',
      });

      expect(state).toMatchSnapshot();
    });
  });
});
