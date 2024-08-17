import { Override } from 'eslint-define-config';

import { compatibility } from '#shared';

/**  @return entire config */
// @ts-ignore
const config = (object: Override) => compatibility.config(object);

export { config };
