import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Box from './Box';
import Item from '../Item/Item';

describe('<Box />', () => {
  it('renders a Box without crashing', () => {
    const Box = shallow(<Box />);
    expect(Box.find('div').length).toEqual(1);
  });
});

describe('<Box />', () => {
  it('renders a Box with an Item without crashing', () => {
    const Box = shallow(
      <Box>
        <Item />
      </Box>
    );
    expect(Box.find('Item').length).toEqual(1);
  });
});

describe('<Box />', () => {
  it('renders a Box with class box without crashing', () => {
    const Box = shallow(<Box variant="box" />);
    expect(Box.find('.box').length).toEqual(1);
  });
});

describe('<Box />', () => {
  it('renders a Box with default class circle without crashing', () => {
    const Box = shallow(<Box />);
    expect(Box.find('.circle').length).toEqual(1);
  });
});

describe('<Box />', () => {
  it('full rendering: renders a Box with default class circle without crashing', () => {
    const Box = mount(<Box />);
    expect(Box.find('.circle').length).toEqual(1);
  });
});

describe('<Box />', () => {
  it('full rendering: renders a Box with a h1 without crashing', () => {
    const Box = mount(
      <Box>
        <h1>"hey"</h1>
      </Box>
    );
    expect(Box.contains(<h1>"hey"</h1>)).toEqual(true);
  });
});
