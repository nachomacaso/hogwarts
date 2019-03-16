import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import StudentCreate from '../components/StudentCreate';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StudentCreate />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('creates a new student', () => {
    let y = localStorage.setItem('students', ['stuff']);
    let x = localStorage.getItem('students');
    console.log(x);
}); 
