import React from 'react';
import { shallow, mount } from 'enzyme';
import StudentIndex from '../components/StudentIndex';
import StudentCreate from '../components/StudentCreate';
import StudentEdit from '../components/StudentEdit';

describe('StudentIndex', () => {
  it('should render correctly', () => {
    const component = shallow(<StudentIndex />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('StudentCreate', () => {
  it('should render correctly', () => {
    const component = shallow(<StudentCreate />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('StudentEdit', () => {
  it('should render correctly', () => {
    const component = shallow(<StudentEdit />);
  
    expect(component).toMatchSnapshot();
  });
});
 
describe('StudentCreate', () => {
  it('should set storage on save button click', () => {
    
    // I've tried everyting to get this to work.  I've flip flopped between 
    // having my handleSubmit function an arrow function and a constructor-bound instance method.
    // Neither is working and I'm afraid this test will fail.

    const wrapper = mount(<StudentCreate />);
    const handleSubmit = jest.spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.instance().forceUpdate();
    const index = 1;
    wrapper.find('#create-submit').at(index).simulate('click');
    expect(handleSubmit.mock.calls.length).toBe(1)
    expect(component).toMatchSnapshot();
  });    
});