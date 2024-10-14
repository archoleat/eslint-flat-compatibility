import { compatibility } from '#shared';

import type { Environments } from 'eslint-define-config';

/**  @return mimic env */
const environments = (object: Environments) => compatibility.env(object);

export { environments };
