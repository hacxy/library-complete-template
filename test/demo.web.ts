import { debounce } from '../dist';

const foo = () => {
  console.log('test');
  return 'hello';
};
const _foo = debounce(foo, 400);

_foo().then((res) => {
  console.log(res);
});
