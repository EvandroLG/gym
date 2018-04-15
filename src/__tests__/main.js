import React from 'react';
import { shallow } from 'enzyme';
import { HashRouter, Route } from 'react-router-dom';
import Menu from '../components/menu';
import TrainingList from '../components/training_list/index';
import NewTraining from '../components/new_training/index';
import Main from '../components/main';

describe('main', () => {
  const component = shallow(<Main />);

  it('should render as expected', () => {
    expect(component.find(HashRouter)).toHaveLength(1);
    expect(component.find(Route)).toHaveLength(2);
    expect(component.find(Menu)).toHaveLength(1);
    expect(component.find('.content')).toHaveLength(1);
  });

  it('should render route as expected', () => {
    const first = component.find(Route).first().props();
    expect(first.exact).toBeTruthy();
    expect(first.path).toEqual('/');
    expect(first.component).toEqual(TrainingList);

    const last = component.find(Route).last().props();
    expect(last.exact).toBeFalsy();
    expect(last.path).toEqual('/new_training');
    expect(last.component).toEqual(NewTraining);
  });
});
