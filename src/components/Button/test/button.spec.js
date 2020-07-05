import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {

  it('Button组件快照测试', () => {
    const component = renderer.create(
      <Button>click</Button>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('测试Button组件的children渲染', () => {
    const wrapper = Enzyme.shallow(
      <Button>click</Button>
    );
    expect(wrapper.contains('click')).toBe(true);
  });

  it('模拟Button组件的点击回调', () => {
    let count = 0;
    const handleClick = () => {
      count += 1;
    };
    const wrapper = Enzyme.shallow(
      <Button onClick={handleClick}/>
    );
    wrapper.find('div').simulate('click');
    expect(count).toBe(1);
  });

  it('测试Button组件的DOM结构', () => {
    const wrapper = Enzyme.mount(
      <Button>Hello</Button>
    );
    expect(wrapper.html()).toBe('<div class="button" role="button">Hello</div>');
  });
});
