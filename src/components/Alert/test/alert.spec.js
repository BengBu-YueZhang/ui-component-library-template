import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Alert from '../Alert';

Enzyme.configure({ adapter: new Adapter() });

describe('Alert', () => {

  it('测试Alert组件的children渲染', () => {
    const wrapper = Enzyme.shallow(
      <Alert>this is alert</Alert>
    );
    expect(wrapper.contains('this is alert')).toBe(true);
  });

  it('测试Alert组件的DOM结构', () => {
    const wrapper = Enzyme.mount(
      <Alert>Hello</Alert>
    );
    expect(wrapper.html()).toBe('<div class="alert">Hello</div>');
  });
});
