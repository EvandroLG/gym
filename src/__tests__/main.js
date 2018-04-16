import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Main from '../components/main';

describe('main', () => {

  it('should render as expected', () => {
    const component = shallow(<Main />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
  });
});
