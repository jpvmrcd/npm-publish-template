import { TestClass } from '../src/index';

test('null element should throw error', () => {
  const test = new TestClass(document.createElement('div'), { isTrue: true });
  expect(test).not.toBeNull();
});

test('test() should return the element', () => {
  const div = document.createElement('div');
  const test = new TestClass(div, { isTrue: true });
  expect(test.test()).toEqual(div);
});
