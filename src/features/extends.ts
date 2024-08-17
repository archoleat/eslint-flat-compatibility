import { compatibility } from '#shared';

/** @return mimic extends */
const extend = (...array: string[]) => compatibility.extends(...array);

export { extend };
