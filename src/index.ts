/**
 * @name 说hello
 * @group 工具函数
 * @param name 名称
 * @returns
 * @example
 * ```ts
 * sayHello('hacxy'); // Hello, hacxy!
 * ```
 */
export const sayHello = (name: string): string => {
  return `Hello, ${name}!`;
};

/**
 * @name helloWorld
 * @group 示例函数
 * @returns
 */
export const helloWorld = () => {
  return 'Hello, World!';
};
