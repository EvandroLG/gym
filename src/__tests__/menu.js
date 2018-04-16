import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Menu from '../components/menu';

describe('menu', () => {

  it('component should render as expected', () => {
    const component = shallow(<Menu />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
  });
});
