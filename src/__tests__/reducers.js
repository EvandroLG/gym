import reducers from '../reducers';

describe('reducers', () => {
  it('should return an object with the same value passed as a parameter', () => {
    const videoUrl = 'https://www.youtube.com/watch?v=04p4MWfhpAI';
    const state = reducers({
      videoUrl: ''
    }, {
      type: 'SET_VIDEO_URL',
      payload: videoUrl
    });

    expect(state).toEqual({
      videoUrl
    });
  });
});
