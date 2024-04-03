import { compatibility } from '../utils/compatibility.ts';

const config = (object: {}) => {
  return compatibility.config(object);
};

export { config };
