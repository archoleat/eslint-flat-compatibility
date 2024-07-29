import { Environments } from 'eslint-define-config';

import { compatibility } from '#compatibility';

/**  @return mimic env */
const environments = (object: Environments) => compatibility.env(object);

export { environments };
