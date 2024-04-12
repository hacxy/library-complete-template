import { expect, test } from 'vitest';
import { helloWorld, sayHello } from '../dist';

test('测试示例方法, 无输入, 返回 "Hello, World!"', () => {
  expect(helloWorld()).toBe('Hello, World!');
});

test('sayHello, 输入"hacxy" 返回"Hello, hacxy!"', () => {
  expect(sayHello('hacxy')).toBe('Hello, hacxy!');
});
