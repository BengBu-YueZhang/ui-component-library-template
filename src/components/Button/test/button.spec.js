import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  it('测试Button组件的onClick回调', () => {
    let count = 0;
    const handleClick = () => {
      count += 1;
    };
    const component = renderer.create(
      <Button onClick={handleClick}/>
    );
    const tree = component.toJSON();
    tree.props.onClick();
    expect(count).toBe(1);
  });

  it('测试Button组件的DOM结构', () => {
    const wrapper = Enzyme.shallow(
      <Button>click</Button>
    );
    expect(wrapper.contains('click')).toBe(true);
  });

  it('模拟点击Button组件', () => {
    let count = 0;
    const handleClick = () => {
      count += 1;
    };
    const wrapper = Enzyme.shallow(
      <Button onClick={handleClick}/>
    );
    wrapper.find('div').simulate('click');
    expect(count).toBe(1);
  })
});
