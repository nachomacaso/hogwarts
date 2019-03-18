import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App', () => {
  it('should render correctly', () => {
    const component = shallow(<App />);
  
    expect(component).toMatchSnapshot();
  });
});