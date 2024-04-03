import { compatibility } from '../utils/compatibility.ts';

const environments = (object: {}) => {
  return compatibility.env(object);
};

export { environments };
