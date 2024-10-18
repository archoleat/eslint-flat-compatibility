import type { Override } from 'eslint-define-config';

import { compatibility } from '#shared';

/**  @return entire config */
const config = (object: Override) => compatibility.config(object);

export { config };
