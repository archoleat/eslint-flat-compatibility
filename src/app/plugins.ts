import { compatibility } from '#shared';

/**  @return mimic plugins */
const plugins = (...array: string[]) => compatibility.plugins(...array);

export { plugins };
