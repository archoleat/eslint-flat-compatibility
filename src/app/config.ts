import { compatibility } from '#shared';

import type { Override } from 'eslint-define-config';

/**  @return entire config */
const config = (object: Override) => compatibility.config(object);

export { config };
