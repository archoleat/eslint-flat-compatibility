import type { Environments } from 'eslint-define-config';

import { compatibility } from '#shared';

/**  @return mimic env */
const environments = (object: Environments) => compatibility.env(object);

export { environments };
