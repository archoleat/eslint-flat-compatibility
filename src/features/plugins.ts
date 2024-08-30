import { compatibility } from '#compatibility';

/**  @return mimic plugins */
const plugins = (...array: string[]) => compatibility.plugins(...array);

export { plugins };
