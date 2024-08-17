import { Environments } from 'eslint-define-config';

import { compatibility } from '#shared';

/**  @return mimic env */
// @ts-ignore
const environments = (object: Environments) => compatibility.env(object);

export { environments };
