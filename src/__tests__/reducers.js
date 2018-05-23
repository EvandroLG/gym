import reducers from '../reducers';
import fixtures from './fixtures';

describe('reducers', () => {
  it('should return an object with the same value passed as a parameter', () => {
    const videoUrl = 'https://www.youtube.com/watch?v=04p4MWfhpAI';
    const exerciseList = fixtures[0].exercises
    const title = fixtures[0].title

    const state = reducers({
      videoUrl: ''
    }, {
      type: 'SET_VIDEO_URL',
      url: videoUrl,
      newTraining: {
        exerciseList,
        title
      }
    });

    expect(state).toMatchSnapshot();
  });
});
