import { expect, test } from 'vitest';
import { formatInitialCapital, objectToQuery, getRandomArrayItem, isDate, is } from '../dist';

test('测试字符串格式化首字母大写', () => {
  expect(formatInitialCapital('javascript')).toBe('Javascript');
});

test('formatInitialCapital', () => {
  expect(formatInitialCapital('哈哈哈')).toBe('哈哈哈');
});

test('对象转query', () => {
  expect(objectToQuery({ name: 'loclink', age: 18 })).toBe('name=loclink&age=18');
});

test('从数组中取出随机一个值', () => {
  expect(getRandomArrayItem([1, 2, 3, 4, 5])).toEqual(expect.anything());
});

test('测试Date类型,输入正确的Date类型,结果为true', () => {
  expect(isDate(new Date())).toBe(true);
});

test('测试Date类型,输入错误的Date类型,结果为false', () => {
  expect(isDate(111)).toBe(false);
});

test('测试is方法, 输入Date 返回字符串 date', () => {
  expect(is(new Date())).toBe('date');
});

test('测试is方法, 输入 new对象实例 返回字符串 object', () => {
  expect(is(new Object())).toBe('object');
});

test('测试is方法, 输入 new数组实例 返回字符串 array', () => {
  expect(is(new Array())).toBe('array');
});

test('测试is方法, 输入 数组 返回字符串 array', () => {
  expect(is([])).toBe('array');
});
