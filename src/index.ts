/**
 * @name 这是一个说hello的函数
 * @group 工具函数
 * @param name 名称
 * @returns
 * @example
 * ```ts
 * console.log(sayHello('hacxy')); // Hello, hacxy!
 * ```
 */
export const sayHello = (name: string): string => {
  return `Hello, ${name}!`;
};

/**
 * @name helloWorld
 * @group 示例函数
 * @returns
 * @example
 * ```ts
 * console.log(helloWorld()); // Hello, World!
 * ```
 */
export const helloWorld = () => {
  return 'Hello, World!';
};
