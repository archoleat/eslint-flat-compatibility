import { compatibility } from '../utils/compatibility.ts';

const plugins = (...array: string[]) => {
  return compatibility.plugins(...array);
};

export { plugins };
