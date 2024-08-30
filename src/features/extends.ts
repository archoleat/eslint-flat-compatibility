import { compatibility } from '#compatibility';

/** @return mimic extends */
const extend = (...array: string[]) => compatibility.extends(...array);

export { extend };
