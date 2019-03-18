import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
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
    // having my handleSubmit function an arrow function and a constructor-bound 
    // instance method.
    // Neither is working with jest.spyOn
    // I'd love your feedback on how you would test this.

    let spy = jest.spyOn(StudentCreate.prototype, 'handleSubmit');
    Storage.prototype.getItem = jest.fn(() => "[\"hello\", \"world\"]");
    
    const component = mount(<StudentCreate />);
    const index = 1;
    component.find('#create-submit').at(index).simulate('click');

    expect(spy).toHaveBeenCalled();
    expect(component).toMatchSnapshot();
    component.unmount();
  });    
});