import { setVideoUrl } from '../action_creators';

describe('action creators', () => {
  it('should return an expected object', () => {
    const output = setVideoUrl('https://www.youtube.com/watch?v=04p4MWfhpAI');
    expect(output).toMatchSnapshot();
  });
});
