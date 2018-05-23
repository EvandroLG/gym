import { setVideoUrl } from '../action';

describe('action', () => {

  it('should return an expected object', () => {
    const output = setVideoUrl('https://www.youtube.com/watch?v=04p4MWfhpAI');
    expect(output).toMatchSnapshot();
  });
});
