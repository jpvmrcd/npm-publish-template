import { PublishTest } from '../src/index';

test('null element should throw error', () => {
  const test = new PublishTest(document.createElement('div'), { isTrue: true });
  expect(test).not.toBeNull();
});

test('test() should return the element', () => {
  const div = document.createElement('div');
  const test = new PublishTest(div, { isTrue: true });
  expect(test.test()).toEqual(div);
});
