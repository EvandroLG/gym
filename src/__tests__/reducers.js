import reducers from '../reducers';
import fixtures from './fixtures';

describe('reducers', () => {

  const initialFakeState = {
    videoUrl: '',
    trainingList: [],
    newTraining: fixtures[0]
  };

  function verifyReducers(action, state) {
    expect(reducers(state, action)).toMatchSnapshot();
  }

  describe('video url', () => {
    it('should handle SET_VIDEO_URL', () => {
      verifyReducers({
        type: 'SET_VIDEO_URL',
        url: 'https://www.youtube.com/watch?v=04p4MWfhpAI'
      });
    });
  });

  describe('new training', () => {
    it('should handle SET_TITLE_NEW_TRAINING', () => {
      const { title } = fixtures[0];

      verifyReducers({
        type: 'SET_TITLE_NEW_TRAINING',
        title
      });
    });

    it('should handle ADD_EXERCISE_NEW_TRAINING', () => {
      verifyReducers({
        type: 'ADD_EXERCISE_NEW_TRAINING',
      });
    });

    it('should handle REMOVE_EXERCISE_NEW_TRAINING', () => {
      verifyReducers({
        type: 'REMOVE_EXERCISE_NEW_TRAINING',
        id: 0
      }, initialFakeState);
    });

    it('should handle SET_FIELD_NEW_TRAINING', () => {
      verifyReducers({
        type: 'SET_FIELD_NEW_TRAINING',
        id: 0,
        fieldName: 'name',
        value: 'Pull-Down'
      }, initialFakeState);
    });

    it('should handle EMPTY_NEW_TRAINING', () => {
      verifyReducers({
        type: 'EMPTY_NEW_TRAINING',
      }, initialFakeState);
    });
  });

  describe('training list', () => {
    it('should handle LOAD_TRAINING_LIST', () => {
      verifyReducers({
        type: 'LOAD_TRAINING_LIST',
        trainingList: []
      });
    });

    it('should handle REMOVE_TRAINING', () => {
      verifyReducers({
        type: 'REMOVE_TRAINING',
        id: 0
      }, initialFakeState);
    });

    it('should handle ADD_NEW_EXERCISE', () => {
      verifyReducers({
        type: 'ADD_NEW_EXERCISE',
        id: 1
      }, initialFakeState);
    });

    it('should handle REMOVE_EXERCISE', () => {
      verifyReducers({
        type: 'REMOVE_EXERCISE',
        idTraining: 1,
        idExercise: 0
      }, initialFakeState);
    });

    it('should handle CHANGE_TITLE_TRAINING', () => {
      verifyReducers({
        type: 'CHANGE_TITLE_TRAINING',
        id: 1,
        title: 'Arms'
      }, initialFakeState);
    });

    it('should handle CHANGE_EXERCISE_TRAINING', () => {
      verifyReducers({
        type: 'CHANGE_EXERCISE_TRAINING',
        idTraining: 1,
        idExercise: 0,
        value: 'Pull-Down'
      }, initialFakeState);
    });
  });
});
