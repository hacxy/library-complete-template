/**
 * @name 这是一个说hello的函数
 * @group 工具函数
 * @param name 名称
 * @example
 * ```ts
 * console.log(sayHello('hacxy')); // Hello, hacxy!
 * ```
 */
export const sayHello = (name: string): string => {
  return `Hello, ${name}!`;
};

/**
 * @name 这是一个示例函数,它打印一个Hello,World字符串
 * @group 示例函数
 * @example
 * ```ts
 * console.log(helloWorld()); // Hello, World!
 * ```
 */
export const helloWorld = () => {
  return 'Hello, World!';
};

/**
 * @name 求两数相加之和
 * @param num1 数字1
 * @param num2  数字2
 */
export const addition = (num1: number, num2: number) => {
  return num1 + num2;
};
