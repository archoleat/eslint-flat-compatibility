import { compatibility } from '../utils/compatibility.ts';

const extend = (...array: string[]) => {
  return compatibility.extends(...array);
};

export { extend };
