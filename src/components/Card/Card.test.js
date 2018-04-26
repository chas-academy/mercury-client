import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Card from './Card';

describe('<Card />', () => {
  it('renders a Card without crashing', () => {
    const card = shallow(<Card />);
    expect(card.find('div').length).toEqual(1);
  });
});

