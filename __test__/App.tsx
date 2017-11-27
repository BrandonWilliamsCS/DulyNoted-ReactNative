import { shallow } from 'enzyme';
import React from 'react';
import 'react-native';

import App from '../src/App';

it('renders correctly', () => {
  const wrapper = shallow(
    <App />,
  );
  expect(wrapper.length).toBe(1);
});
