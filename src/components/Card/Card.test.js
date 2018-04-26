import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Card from './Card';
import Item from '../Item/Item';

describe('<Card />', () => {
  it('renders a Card without crashing', () => {
    const card = shallow(<Card />);
    expect(card.find('div').length).toEqual(1);
  });
});

describe('<Card />', () => {
  it('renders a Card with an Item without crashing', () => {
    const card = shallow(<Card><Item /></Card>);
    expect(card.find('Item').length).toEqual(1);
  });
});

describe('<Card />', () => {
  it('renders a Card with class box without crashing', () => {
    const card = shallow(<Card variant="box" />);
    expect(card.find('.box').length).toEqual(1);
  });
});

describe('<Card />', () => {
  it('renders a Card with default class circle without crashing', () => {
    const card = shallow(<Card />);
    expect(card.find('.circle').length).toEqual(1);
  });
});

describe('<Card />', () => {
  it('full rendering: renders a Card with default class circle without crashing', () => {
    const card = mount(<Card />);
    expect(card.find('.circle').length).toEqual(1);
  });
});

describe('<Card />', () => {
  it('full rendering: renders a Card with a h1 without crashing', () => {
    const card = mount((<Card><h1>"hey"</h1></Card>));
    expect(card.contains(<h1>"hey"</h1>)).toEqual(true);
  });
});
