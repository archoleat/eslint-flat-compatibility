import { compatibility } from '../utils/compatibility.ts';

/**  @return mimic plugins */
const plugins = (...array: string[]) => compatibility.plugins(...array);

export { plugins };
