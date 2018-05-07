import reducers from '../reducers';

test('reducers', () => {
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
