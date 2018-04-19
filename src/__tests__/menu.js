import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../components/menu';

describe('menu', () => {

  it('component should render as expected', () => {
    const component = shallow(<Menu />);
    verifySnapshot(component);
  });
});
