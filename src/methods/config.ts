import { Override } from 'eslint-define-config';

import { compatibility } from '../utils/compatibility.ts';

/**  @return entire config */
const config = (object: Override) => compatibility.config(object);

export { config };
