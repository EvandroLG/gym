import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../components/menu';
import { NavLink } from 'react-router-dom';

describe('menu', () => {
  const component = shallow(<Menu />);

  it('component should render as expected', () => {
    expect(component.find('.nav')).toHaveLength(1);
    expect(component.find('.nav > li')).toHaveLength(2);
    expect(component.find('.nav > li').first().find(NavLink)).toBeTruthy();
    expect(component.find('.nav > li').last().find(NavLink)).toBeTruthy();
  });

  it('component should render navLink component as expected', () => {
    const first = component.find('.nav > li').first().find(NavLink).props();
    expect(first.children).toEqual('Training');
    expect(first.to).toEqual('/');
    expect(first.exact).toBeTruthy();

    const last = component.find('.nav > li').last().find(NavLink).props();
    expect(last.children).toEqual('New Training');
    expect(last.to).toEqual('/new_training');
    expect(last.exact).toBeFalsy();
  });
});
