import noop from '../noop';

describe('noop', () => {

  it('noop是没有任何作用的函数', () => {
    expect(noop()).toBe(undefined);
  });
});
