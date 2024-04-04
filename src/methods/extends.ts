import { compatibility } from '../utils/compatibility.ts';

/** @return mimic extends */
const extend = (...array: string[]) => {
  return compatibility.extends(...array);
};

export { extend };
