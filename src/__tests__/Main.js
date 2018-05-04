import React from 'react';
import { shallow } from 'enzyme';
import Main from '../components/Main';

/* global verifySnapshot */

describe('main', () => {

  it('should render as expected', () => {
    const component = shallow(<Main />);
    verifySnapshot(component);
  });
});
