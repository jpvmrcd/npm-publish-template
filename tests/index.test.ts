import { PublishTest } from '../src/index';

test('null element should throw error', () => {
  const test = new PublishTest(document.createElement('div'), { isTrue: true });
  expect(test).not.toBeNull();
});
