import { Environments } from 'eslint-define-config';

import { compatibility } from '../utils/compatibility.ts';

/**  @return mimic env */
const environments = (object: Environments) => compatibility.env(object);

export { environments };
